import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const {
      name,
      email,
      phone,
      instrument,
      level,
      preferred_shift,
      comments,
    } = await req.json();

    if (!name || !email || !phone) {
      return new Response(
        JSON.stringify({ error: 'Faltan campos obligatorios' }),
        {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    const supabaseAdmin = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    );

    const { error: dbError } = await supabaseAdmin.from('booking_requests').insert({
      name,
      email,
      phone,
      instrument,
      level,
      preferred_shift,
      comments: comments || null,
    });

    if (dbError) {
      throw dbError;
    }

    const resendApiKey = Deno.env.get('RESEND_API_KEY');
    if (!resendApiKey) {
      throw new Error('Falta RESEND_API_KEY');
    }

    const emailBody = `
Solicitud de clase de prueba

Nombre: ${name}
Email: ${email}
Teléfono: ${phone}
Instrumento: ${instrument}
Nivel: ${level}
Horario: ${preferred_shift}
Comentarios: ${comments || 'Sin comentarios'}
    `.trim();

    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Tupa Tupa Riff <info@tupatupariff.com>',
        to: ['info@tupatupariff.com'],
        subject: 'Nueva solicitud de clase de prueba',
        text: emailBody,
      }),
    });

    if (!resendResponse.ok) {
      const errorText = await resendResponse.text();
      throw new Error(`Resend error: ${errorText}`);
    }

    return new Response(
      JSON.stringify({ ok: true }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error(error);

    return new Response(
      JSON.stringify({
        ok: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});

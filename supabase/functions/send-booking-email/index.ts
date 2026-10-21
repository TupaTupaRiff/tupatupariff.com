import { createClient } from "npm:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", {
      headers: corsHeaders,
    });
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
        JSON.stringify({ error: "Faltan campos obligatorios" }),
        {
          status: 400,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const serviceRoleKey = Deno.env.get("SERVICE_ROLE_KEY");

    if (!supabaseUrl || !serviceRoleKey) {
      return new Response(
        JSON.stringify({
          error: "Falta SUPABASE_URL o SERVICE_ROLE_KEY",
        }),
        {
          status: 500,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    const supabaseAdmin = createClient(supabaseUrl, serviceRoleKey);

    const { error: dbError } = await supabaseAdmin
      .from("booking_requests")
      .insert({
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

    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    if (!resendApiKey) {
      throw new Error("Falta RESEND_API_KEY");
    }

    const emailBody = `
Solicitud de clase de prueba

Nombre: ${name}
Email: ${email}
Teléfono: ${phone}
Instrumento: ${instrument}
Nivel: ${level}
Horario: ${preferred_shift}
Comentarios: ${comments || "Sin comentarios"}
    `.trim();

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Tupa Tupa Riff <info@tupatupariff.com>",
        to: ["info@tupatupariff.com"],
        subject: "Nueva solicitud de clase de prueba",
        html: `
          <h1>Solicitud de clase de prueba</h1>
          <p><strong>Nombre:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Teléfono:</strong> ${phone}</p>
          <p><strong>Instrumento:</strong> ${instrument}</p>
          <p><strong>Nivel:</strong> ${level}</p>
          <p><strong>Horario:</strong> ${preferred_shift}</p>
          <p><strong>Comentarios:</strong> ${comments || "Sin comentarios"}</p>
        `,
        text: emailBody,
      }),
    });

    if (!resendResponse.ok) {
      const resendError = await resendResponse.text();
      throw new Error(`Error enviando correo: ${resendError}`);
    }

    return new Response(
      JSON.stringify({ ok: true, message: "Solicitud guardada y email enviado" }),
      {
        status: 200,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Error en la función:", error);

    return new Response(
      JSON.stringify({
        error: error instanceof Error ? error.message : "Error desconocido",
      }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  }
});

import { useState, type FormEvent } from 'react';
import { supabase } from '@/lib/supabase';

const instruments = [
  'Guitarra Eléctrica',
  'Guitarra Acústica / Española',
  'Bajo Eléctrico',
  'Batería',
  'Ukelele',
];

const levels = [
  'Desde cero',
  'Básico',
  'Intermedio',
  'Avanzado',
];

const shifts = [
  'Tardes (16:00 a 22:00)',
  'Mañanas (10:00 a 12:00)',
  'Sábados por la mañana',
];

export default function Matricula() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    instrument: instruments[0],
    level: levels[0],
    preferred_shift: shifts[0],
    comments: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (field: keyof typeof form, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    const { error } = await supabase.from('booking_requests').insert({
      name: form.name,
      email: form.email,
      phone: form.phone,
      instrument: form.instrument,
      level: form.level,
      preferred_shift: form.preferred_shift,
      comments: form.comments || null,
    });

    if (error) {
      setStatus('error');
      setErrorMsg('No se pudo enviar la solicitud. Inténtalo de nuevo en unos minutos.');
      return;
    }

    setStatus('success');
    setForm({
      name: '',
      email: '',
      phone: '',
      instrument: instruments[0],
      level: levels[0],
      preferred_shift: shifts[0],
      comments: '',
    });
  };

  const inputClass =
    'w-full bg-brand-dark border border-brand-darkBorder rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-purpleLight transition';
  const labelClass = 'block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2';

  return (
    <section id="matricula" className="py-24 bg-gradient-to-b from-brand-darkCard to-brand-dark border-t border-brand-darkBorder">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="text-brand-purpleLight font-rock text-lg">Comienza tu andadura</span>
          <h2 className="text-3xl sm:text-5xl font-black text-white mt-1">Reserva tu Clase de Prueba</h2>
          <p className="text-slate-400 mt-2 text-sm sm:text-base">
            Sin compromiso. Ven a conocer las instalaciones, prueba el instrumento que prefieras y hablamos de tus
            objetivos.
          </p>
        </div>

        <div className="bg-brand-darkCard border border-brand-darkBorder rounded-3xl p-6 sm:p-10 shadow-2xl relative">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className={labelClass}>Nombre y Apellidos *</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  placeholder="Tu nombre o el del alumno"
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>Correo Electrónico *</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  placeholder="tuemail@ejemplo.com"
                  className={inputClass}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className={labelClass}>Teléfono de Contacto *</label>
                <input
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  placeholder="600 000 000"
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>Instrumento de Interés *</label>
                <select
                  value={form.instrument}
                  onChange={(e) => handleChange('instrument', e.target.value)}
                  className={inputClass}
                >
                  {instruments.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className={labelClass}>Nivel Actual</label>
                <select
                  value={form.level}
                  onChange={(e) => handleChange('level', e.target.value)}
                  className={inputClass}
                >
                  {levels.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className={labelClass}>Preferencia de Horario</label>
                <select
                  value={form.preferred_shift}
                  onChange={(e) => handleChange('preferred_shift', e.target.value)}
                  className={inputClass}
                >
                  {shifts.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className={labelClass}>
                ¿Cuáles son tus grupos o artistas favoritos? (Opcional)
              </label>
              <textarea
                rows={3}
                value={form.comments}
                onChange={(e) => handleChange('comments', e.target.value)}
                placeholder="Cuéntanos qué música te mueve (AC/DC, Queen, Nirvana, Extremoduro, Platero, Muse...)"
                className={inputClass}
              />
            </div>

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full py-4 bg-brand-purple hover:bg-brand-purpleLight text-white font-black text-sm uppercase tracking-wider rounded-xl shadow-lg shadow-brand-purple/40 hover:shadow-brand-purple/70 transition duration-300 disabled:opacity-60"
            >
              {status === 'submitting' ? 'Enviando...' : 'Enviar Solicitud de Clase de Prueba'}
            </button>

            {status === 'error' && (
              <p className="text-center text-sm text-red-400">{errorMsg}</p>
            )}

            <p className="text-center text-xs text-slate-500">
              Tus datos se utilizarán exclusivamente para contactar contigo y coordinar la cita previa.
            </p>
          </form>
        </div>
      </div>

      {status === 'success' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="bg-brand-darkCard border border-brand-purpleLight/60 rounded-3xl max-w-md w-full p-6 sm:p-8 text-center shadow-2xl relative">
            <div className="w-16 h-16 rounded-full bg-brand-purple/30 text-brand-purpleLight flex items-center justify-center text-3xl mx-auto mb-4 border border-brand-purpleLight">
              🤘
            </div>
            <h3 className="text-2xl font-black text-white mb-2">¡Solicitud Recibida!</h3>
            <p className="text-sm text-slate-300 mb-6 leading-relaxed">
              Gracias por ponerte en contacto. Nos comunicaremos contigo en breve para coordinar tu clase de prueba
              personalizada.
            </p>
            <button
              onClick={() => setStatus('idle')}
              className="w-full py-3 bg-brand-purple hover:bg-brand-purpleLight text-white font-bold rounded-xl text-xs uppercase tracking-wider transition"
            >
              Entendido, ¡a rocanrolear!
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

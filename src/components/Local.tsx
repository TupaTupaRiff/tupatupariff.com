const facilities = [
  { title: '126 m² útiles', desc: 'Distribución amplia con ventilación e iluminación óptima.' },
  { title: '5 Aulas Independientes', desc: 'Espacios especializados para clases individuales y colectivas.' },
  { title: 'Insonorización', desc: 'Acondicionamiento acústico específico para batería y amplificación.' },
  { title: 'Sala de Ensayo (Próximamente)', desc: 'Equipada con backline disponible por horas para grupos locales.' },
];

const hours = [
  { day: 'Lunes a Viernes (Mañanas)', time: '10:00 - 12:00' },
  { day: 'Lunes a Viernes (Tardes)', time: '16:00 - 22:00' },
  { day: 'Sábados (Mañanas)', time: '10:00 - 14:00', last: true },
];

export default function Local() {
  return (
    <section id="local" className="py-24 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-brand-purpleLight font-rock text-lg">Instalaciones en Albacete</span>
            <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight">
              Un espacio diseñado por y para la música
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Situado a pie de calle en la{' '}
              <strong className="text-white">Calle Doctor Collado Piña nº 41</strong>, un enclave de fácil acceso en
              Albacete tanto a pie como en transporte público.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {facilities.map((f) => (
                <div key={f.title} className="p-4 bg-brand-darkCard rounded-xl border border-brand-darkBorder">
                  <span className="text-brand-purpleLight font-bold text-lg">{f.title}</span>
                  <p className="text-xs text-slate-400 mt-1">{f.desc}</p>
                </div>
              ))}
            </div>

            <div className="p-5 bg-brand-darkCard/80 rounded-2xl border border-brand-darkBorder space-y-2">
              {hours.map((h) => (
                <div
                  key={h.day}
                  className={`flex items-center justify-between text-sm${h.last ? ' border-t border-brand-darkBorder/60 pt-2' : ''}`}
                >
                  <span className="font-bold text-slate-200">{h.day}</span>
                  <span className="text-brand-gold font-semibold">{h.time}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="bg-brand-darkCard border border-brand-darkBorder rounded-3xl p-6 shadow-2xl relative overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
                  <h3 className="font-bold text-white text-base">Albacete Capital</h3>
                </div>
                <span className="text-xs text-brand-purpleLight font-bold">C. Doctor Collado Piña, 41</span>
              </div>

              <div className="w-full h-80 rounded-2xl bg-[#14121d] border border-brand-darkBorder flex flex-col items-center justify-center relative p-6 text-center group">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#7b3e94_1px,transparent_1px)] [background-size:16px_16px]" />

                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-brand-purple/30 border border-brand-purpleLight flex items-center justify-center text-3xl mb-3 shadow-lg group-hover:scale-110 transition duration-300">
                    📍
                  </div>
                  <h4 className="text-lg font-black text-white">Tupa Tupa Riff</h4>
                  <p className="text-xs text-slate-300 mt-1 max-w-xs">
                    Calle Doctor Collado Piña 41, Bajo
                    <br />
                    02003 Albacete
                  </p>
                  <a
                    href="https://maps.google.com/?q=Calle+Doctor+Collado+Pi%C3%B1a+41+Albacete"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 px-4 py-2 rounded-lg bg-brand-purple hover:bg-brand-purpleLight text-white text-xs font-bold transition"
                  >
                    Ver en Google Maps
                  </a>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between text-xs text-slate-400">
                <span>Aparcamiento y transporte público cercano</span>
                <span>Acceso adaptado y aseos normativos</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const pillars = [
  {
    num: '01',
    title: 'Repertorio Real desde el Día 1',
    desc: 'Aprende acordes, ritmos y técnicas tocando los temas de tus bandas favoritas: rock, metal, punk, grunge, stoner, blues, funk, indie, pop...',
    tag: 'Práctica aplicada inmediata',
  },
  {
    num: '02',
    title: 'Tutoría Personalizada',
    desc: 'Clases individuales o en grupos muy reducidos. Adaptamos los objetivos y el ritmo según tu edad, expectativas y gustos personales.',
    tag: 'Sin masificación, 100% a tu medida',
  },
  {
    num: '03',
    title: 'Cultura & Comunidad',
    desc: 'Asesoramiento para elegir instrumento, mantenimiento y ajustes, dinámicas de combo para tocar en conjunto y sesiones en directo con público.',
    tag: 'Conecta con otros músicos',
  },
];

export default function Filosofia() {
  return (
    <section id="filosofia" className="py-24 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-purpleLight font-rock text-lg tracking-wider uppercase">Nuestra Filosofía</span>
          <h2 className="text-3xl sm:text-5xl font-black text-white mt-2">
            No solo aprendas un instrumento: haz música.
          </h2>
          <p className="text-slate-400 mt-4 text-base sm:text-lg">
            A diferencia de métodos anticuados y rígidos, en Tupa Tupa Riff apostamos por la inmersión desde el primer
            día en un ambiente libre de presiones, creativo y colaborativo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((p) => (
            <div
              key={p.num}
              className="bg-brand-darkCard p-8 rounded-2xl border border-brand-darkBorder hover:border-brand-purple transition duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-brand-purple/20 text-brand-purpleLight flex items-center justify-center font-bold text-xl mb-6">
                  {p.num}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{p.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{p.desc}</p>
              </div>
              <div className="mt-6 pt-4 border-t border-brand-darkBorder/50 text-xs font-semibold text-brand-purpleLight">
                {p.tag}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

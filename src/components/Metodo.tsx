const steps = [
  {
    phase: 'Fase 1',
    phaseColor: 'text-brand-gold',
    title: 'Descubrimiento y Primer Contacto',
    desc: 'Te familiarizas con el instrumento, interiorizas la postura correcta y tocas tus primeros acordes y ritmos reales.',
    note: 'Pérdida del miedo escénico al instrumento.',
    num: 1,
    bgColor: 'bg-brand-purple',
  },
  {
    phase: 'Fase 2',
    phaseColor: 'text-brand-purpleLight',
    title: 'Técnica, Confianza y Autonomía',
    desc: 'Afinación, lenguaje musical práctico, precisión rítmica y educación del oído para poder aprender canciones por ti mismo.',
    note: 'Desarrollo del criterio musical y técnica limpia.',
    num: 2,
    bgColor: 'bg-brand-purpleLight',
  },
  {
    phase: 'Fase 3',
    phaseColor: 'text-brand-gold',
    title: 'Combos y Dinámica Grupal',
    desc: 'Aprender a escuchar a los demás, cuadrar con la batería, empastar con el bajo y sonar como una auténtica banda de rock.',
    note: 'Trabajo en equipo y cohesión sonora.',
    num: 3,
    bgColor: 'bg-brand-purple',
  },
  {
    phase: 'Fase 4',
    phaseColor: 'text-brand-purpleLight',
    title: 'Ensayos, Directos y Conciertos',
    desc: 'Subirse a las tablas. Organizamos conciertos y audiciones para que experimentes la adrenalina del directo con sonido real.',
    note: 'La meta definitiva: ser músico en vivo.',
    num: 4,
    bgColor: 'bg-brand-gold',
    goldText: true,
  },
];

export default function Metodo() {
  return (
    <section id="metodo" className="py-24 bg-brand-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-brand-purpleLight font-rock text-lg">Metodología Propia</span>
          <h2 className="text-3xl sm:text-5xl font-black text-white mt-1">Volumen 11 (Spinal Tap)</h2>
          <p className="text-slate-400 mt-3 text-base">
            Entendemos el aprendizaje musical como un recorrido progresivo de superación artística y humana. VOLUMEN 11
            hace referencia a llevar cualquier cosa al máximo absoluto, cruzar la línea de lo razonable, exagerar la
            potencia y la actitud y pasar por alto las normas o la lógica.{' '}
            <span className="whitespace-nowrap">¿Por qué? ¡Porque mola más!</span>
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 -ml-0.5 w-1 h-full bg-gradient-to-b from-brand-purple via-brand-purpleLight to-brand-gold opacity-40" />

          <div className="space-y-12">
            {steps.map((step, idx) => {
              const isLeft = idx % 2 === 0;
              return (
                <div
                  key={step.num}
                  className={`relative flex flex-col md:flex-row${isLeft ? '' : '-reverse'} items-center justify-between`}
                >
                  <div
                    className={`w-full md:w-5/12 text-center md:text-right${isLeft ? ' pr-0 md:pr-8' : ' pl-0 md:pl-8 md:text-left'}`}
                  >
                    <span className={`${step.phaseColor} font-bold text-xs uppercase tracking-widest`}>
                      {step.phase}
                    </span>
                    <h3 className="text-xl font-extrabold text-white mt-1">{step.title}</h3>
                    <p className="text-sm text-slate-400 mt-2">{step.desc}</p>
                  </div>
                  <div
                    className={`w-12 h-12 rounded-full ${step.bgColor} border-4 border-brand-dark flex items-center justify-center font-black ${step.goldText ? 'text-brand-dark' : 'text-white'} z-10`}
                  >
                    {step.num}
                  </div>
                  <div
                    className={`w-full md:w-5/12${isLeft ? ' pl-0 md:pl-8 text-center md:text-left' : ' pr-0 md:pr-8 text-center md:text-right'} text-xs text-slate-500`}
                  >
                    {step.note}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

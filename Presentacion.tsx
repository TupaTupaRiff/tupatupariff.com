const founders = [
  {
    name: 'Fernando Moya "Fernan"',
    role: 'Socio Fundador & Docente',
    photo: '/Fernando.jpeg',
    desc: 'Guitarrista en bandas como "The Heretic" y "Centinela". Responsable de la coordinación académica y gestión del centro.',
  },
  {
    name: 'Antonio Cebrián "Toñín"',
    role: 'Socio Fundador & Docente',
    photo: '/Antonio.jpeg',
    desc: 'Baterista en bandas como "Insaniam" y "Reincarnation". Encargado de la producción técnica y comunicación de la escuela.',
  },
];

export default function Presentacion() {
  return (
    <section id="presentacion" className="pt-24 pb-4 bg-brand-dark border-b border-brand-darkBorder">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-brand-purpleLight font-rock text-base">Quiénes Somos</span>
          <h2 className="text-2xl sm:text-4xl font-black text-white mt-1">Una escuela formada por músicos</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10">
          {founders.map((f) => (
            <div
              key={f.name}
              className="flex flex-col sm:flex-row items-center gap-5 bg-brand-darkCard/60 border border-brand-darkBorder rounded-2xl p-5 sm:p-6 hover:border-brand-purpleLight/50 transition duration-300"
            >
              <div className="shrink-0 w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-brand-purple/60 shadow-lg">
                <img
                  src={f.photo}
                  alt={f.name}
                  className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition duration-500"
                />
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-lg font-black text-white">{f.name}</h3>
                <p className="text-xs font-bold text-brand-gold uppercase tracking-wider mt-0.5">{f.role}</p>
                <p className="text-sm text-slate-400 mt-2 leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

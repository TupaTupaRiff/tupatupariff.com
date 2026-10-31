const instruments = [
  {
    image: '/guitarra_electrica_v4.jpeg',
    name: 'Guitarra',
    subtitle: 'Eléctrica & Acústica',
    desc: 'Riffs, acordes abiertos y con cejilla, quintas, técnica de púa y dedos, escalas pentatónicas, solos e improvisación sobre canciones de rock y otros estilos.',
    features: ['Todos los estilos contemporáneos', 'Configuración de efectos y amplis'],
  },
  {
    image: '/bajo_electrico_v4.jpeg',
    name: 'Bajo Eléctrico',
    subtitle: 'Groove & Fundamento',
    desc: 'Conviértete en el motor de la banda. Pulso, digitación, coordinación rítmica con el bombo, técnicas de dedos, púa y slap en diferentes géneros.',
    features: ['Enfoque armónico y rítmico', 'Creación de líneas de bajo'],
  },
  {
    image: '/bateria_v6.jpeg',
    name: 'Batería acústica',
    subtitle: 'Tempo, Potencia e Independencia',
    desc: 'Agarre de baquetas, rudimentos, redobles, independencia de extremidades, dinámicas, técnica de doble pedal y ritmos icónicos de estilos variados.',
    features: ['Aula de batería insonorizada', 'Práctica con metrónomo y play-alongs'],
  },
  {
    image: '/ukelele_v4.jpeg',
    name: 'Ukelele',
    subtitle: 'Iniciación Rápida & Versátil',
    desc: 'El instrumento perfecto para adentrarse en la música sin complicaciones. Ideal tanto para niños como para adultos que desean acompañar canciones.',
    features: ['Ritmos de rasgueo y punteos', 'Resultados desde la primera sesión'],
  },
];

export default function Cursos() {
  return (
    <section id="cursos" className="py-24 bg-brand-darkCard/40 border-t border-brand-darkBorder">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-brand-purpleLight font-rock text-lg">Catálogo Formativo</span>
            <h2 className="text-3xl sm:text-5xl font-black text-white mt-1">Elige tu Instrumento</h2>
            <p className="text-slate-400 mt-2 max-w-xl text-sm sm:text-base">
              Desde iniciación infantil y juvenil hasta adultos que buscan perfeccionar su sonido.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 bg-brand-dark rounded-full text-xs text-brand-gold border border-brand-darkBorder">
              ● Clases individuales y en grupo
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {instruments.map((inst) => (
            <div
              key={inst.name}
              className="bg-brand-darkCard rounded-2xl p-6 border border-brand-darkBorder hover:border-brand-purpleLight transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative w-full aspect-[3/2] overflow-hidden rounded-xl mb-5 border border-brand-darkBorder bg-black">
                <img
                  src={inst.image}
                  alt={inst.name}
                  className="h-full w-full object-cover object-center transition duration-500 hover:scale-105"
                />
              </div>

              <h3 className="text-xl font-bold text-white mb-2">{inst.name}</h3>
              <p className="text-xs text-brand-purpleLight font-semibold mb-3">{inst.subtitle}</p>
              <p className="text-sm text-slate-400 mb-6 leading-relaxed">{inst.desc}</p>
              <ul className="text-xs text-slate-300 space-y-2 mb-6 border-t border-brand-darkBorder pt-4">
                {inst.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="text-brand-purpleLight font-bold">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#matricula"
                className="block text-center py-2.5 px-4 rounded-xl bg-brand-purple/20 hover:bg-brand-purple text-brand-purpleLight hover:text-white font-bold text-xs uppercase transition"
              >
                Solicitar Clase
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

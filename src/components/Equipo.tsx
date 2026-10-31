import { useState } from 'react';

const founders = [
  {
    name: 'Fernan',
    role: 'Profesor de Guitarra, Bajo y Ukelele',
    desc: 'Guitarrista, compositor y docente musical de Albacete, conocido principalmente por su trayectoria en la escena Metal y Rock en bandas manchegas.\n\nEn su trayectoria musical formó parte de la mítica banda de Heavy Metal "Centinela" y en bandas de Metal Extremo como "The Heretic" y "Uncreation".\n\nTrabajó en las orquestas de baile "Kalifornia" y "Seven".\n\nActualmente ejerce como guitarrista en la banda tributo "Otra Movida", en el proyecto en solitario del vocalista "Cano" y en su proyecto de Metal Extremo llamado "Josemi".\n\nGraduado en el "Superior de Guitarra Clásica", ha ejercido como profesor durante muchos años llegando a tener cargos de director en distintas academias de música en Albacete.',
    tags: ['Guitarra Eléctrica', 'Bajo', 'Ukelele'],
    photos: ['/IMG-20190813-WA0007~2.jpg'],
  },
  {
    name: 'Toñín',
    role: 'Profesor de Batería',
    desc: 'Más de media vida dedicada a la música. Especializado en ritmos y grooves de Metal, Rock y Punk.\n\nFundador de "Insaniam", banda albaceteña de Metal Extremo con la que ha compuesto y grabado 4 álbumes de estudio hasta la fecha y con la que ha girado por toda España y Portugal, llegando a tocar en festivales de prestigio como "Viña Rock", "Alterna Festival", "Ginetarock", "Kanekas Metal Fest" y "Dimetal Fest" entre otros, y compartiendo escenario con bandas nacionales como "Angelus Apatrida", "Soziedad Alkoholika" o "Narco" y con bandas internacionales como "Destruction", "Bonfire" o "Sinister".\n\nTambién ha sido batería en otras bandas de Metal como "Reincarnation", "Gennotype" y "Lux In Tenebre".\n\nDesde el año 2017 es miembro de "Orquesta Kalifornia", por lo que también se ha adentrado en otros géneros musicales como Pop, Funk, Indie, Rumba, Electrónica, Música Latina...',
    tags: ['Batería Acústica', 'Ritmo & Dinámicas', 'Combos'],
    photos: ['/514251462_23865194876469953_3742931374954281679_n.jpg'],
  },
];

function FounderCard({ founder }: { founder: (typeof founders)[number] }) {
  const [activePhoto, setActivePhoto] = useState(0);
  const hasPhotos = founder.photos.length > 0;

  return (
    <div className="bg-brand-darkCard border border-brand-darkBorder rounded-3xl p-6 sm:p-8 flex flex-col items-center text-center relative overflow-hidden group hover:border-brand-purpleLight transition-all duration-300">
      <div className="w-full max-w-[260px] aspect-[3/4] rounded-2xl overflow-hidden border-2 border-brand-purple/60 mb-6 shadow-xl relative bg-brand-dark flex items-center justify-center">
        {hasPhotos ? (
          <img
            src={founder.photos[activePhoto]}
            alt={`${founder.name} - foto ${activePhoto + 1}`}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition duration-500"
          />
        ) : (
          <span className="font-rock text-3xl text-brand-purpleLight">{founder.name.split(' ')[0]}</span>
        )}
      </div>

      {hasPhotos && founder.photos.length > 1 && (
        <div className="flex gap-2 mb-4">
          {founder.photos.map((photo, idx) => (
            <button
              key={photo}
              onClick={() => setActivePhoto(idx)}
              className={`w-14 h-14 rounded-lg overflow-hidden border-2 transition ${
                idx === activePhoto
                  ? 'border-brand-purpleLight opacity-100'
                  : 'border-brand-darkBorder opacity-50 hover:opacity-80'
              }`}
              aria-label={`Ver foto ${idx + 1} de ${founder.name}`}
            >
              <img src={photo} alt={`Miniatura ${idx + 1}`} className="w-full h-full object-cover object-top" />
            </button>
          ))}
        </div>
      )}

      <span className="px-3 py-1 bg-brand-purple/20 text-brand-purpleLight text-xs font-bold rounded-full mb-3 uppercase tracking-wider">
        {founder.role}
      </span>
      <h3 className="text-2xl font-black text-white">{founder.name}</h3>
      <div className="text-xs text-slate-400 mt-4 leading-relaxed max-w-sm space-y-3 text-left">
        {founder.desc.split('\n\n').map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>
      <div className="mt-6 flex gap-2 flex-wrap justify-center">
        {founder.tags.map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-1 bg-brand-dark rounded-md text-[11px] text-slate-300 border border-brand-darkBorder"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Equipo() {
  return (
    <section id="equipo" className="py-24 bg-brand-darkCard/50 border-y border-brand-darkBorder">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-purpleLight font-rock text-lg">Promotores y Músicos en Activo</span>
          <h2 className="text-3xl sm:text-5xl font-black text-white mt-1">Conoce al Equipo</h2>
          <p className="text-slate-400 mt-3 text-base">
            Un proyecto fundado en régimen de cooperativa por Fernando Moya y Antonio Cebrián,
            dos músicos albaceteños con muchas tablas y gran experiencia como docentes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {founders.map((f) => (
            <FounderCard key={f.name} founder={f} />
          ))}
        </div>
      </div>
    </section>
  );
}

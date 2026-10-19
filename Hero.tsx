export default function Hero() {
  return (
    <section id="hero" className="relative pt-10 pb-20 md:pt-12 md:pb-32 overflow-hidden purple-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-purple/30 border border-brand-purpleLight/40 text-brand-purpleLight text-xs font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-brand-gold animate-ping" />
              Nuevo Espacio Musical en Albacete Capital
            </div>

            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-black tracking-tight leading-none uppercase">
              Sube el volumen. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purpleLight via-purple-300 to-brand-gold text-glow">
                Rompe las reglas.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 font-light max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Un espacio donde los músicos empiezan, evolucionan y permanecen. Olvídate del aburrimiento: toca
              canciones reales, aprende técnica práctica, inyecta tu esencia y súbete al escenario.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#matricula"
                className="w-full sm:w-auto px-8 py-4 bg-brand-purple hover:bg-brand-purpleLight text-white font-extrabold rounded-xl shadow-lg shadow-brand-purple/40 hover:shadow-brand-purple/70 transition duration-300 text-center uppercase tracking-wide"
              >
                Reserva ya tu clase de prueba gratuita
              </a>

            </div>

            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-brand-darkBorder/60 text-center">
              <div>
                <p className="text-2xl font-black text-white">126 m²</p>
                <p className="text-xs text-slate-400">Instalaciones Insonorizadas</p>
              </div>
              <div>
                <p className="text-2xl font-black text-brand-purpleLight">Aulas</p>
                <p className="text-xs text-slate-400">Totalmente equipadas</p>
              </div>
              <div>
                <p className="text-2xl font-black text-brand-gold">100% Práctico</p>
                <p className="text-xs text-slate-400">Todas las edades<br />a partir de 6 años</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md group">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-brand-purple via-pink-600 to-brand-gold rounded-3xl blur-xl opacity-70 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
              <div className="relative bg-brand-darkCard rounded-2xl border border-brand-darkBorder p-6 shadow-2xl flex flex-col items-center text-center">
                <img
                  src="/logo.png"
                  alt="Tupa Tupa Riff Escuela de Rock"
                  className="w-full max-h-72 object-contain drop-shadow-2xl"
                />
                <div className="mt-4 px-4 py-2 bg-brand-dark/80 rounded-lg border border-brand-darkBorder w-full">
                  <p className="text-xs font-semibold text-slate-300 italic">
                    "No abrimos una escuela para dar clases de música. Creamos un lugar donde la música conecte a las
                    personas."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

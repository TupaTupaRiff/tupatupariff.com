export default function Matricula() {
  return (
    <section
      id="matricula"
      className="py-24 bg-gradient-to-b from-brand-darkCard to-brand-dark border-t border-brand-darkBorder"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="text-brand-purpleLight font-rock text-lg">
            Comienza tu andadura
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white mt-1">
            Reserva tu clase de prueba
          </h2>
          <p className="text-slate-400 mt-2 text-sm sm:text-base">
            Sin compromiso. Ven a conocer las instalaciones, prueba el instrumento
            que prefieras y hablamos de tus objetivos.
          </p>
        </div>

        <div className="bg-brand-darkCard border border-brand-darkBorder rounded-3xl p-6 sm:p-10 shadow-2xl text-center">
          <p className="text-slate-300 mb-6">
            Para consultar o reservar una clase de prueba, ponte en contacto con nosotros por teléfono o por correo electrónico.
          </p>
          <a
            href="#contacto"
            className="inline-block py-4 px-8 bg-brand-purple hover:bg-brand-purpleLight text-white font-black text-sm uppercase tracking-wider rounded-xl transition"
          >
            Ver datos de contacto
          </a>
        </div>
      </div>
    </section>
  );
}

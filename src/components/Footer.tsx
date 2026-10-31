export default function Footer() {
  return (
    <footer id="contacto" className="bg-brand-dark text-slate-400 border-t border-brand-darkBorder pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-brand-darkBorder">
          <div className="md:col-span-2 space-y-4">
            <img src="/logo.png" alt="Tupa Tupa Riff" className="h-16 w-auto object-contain" />
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Escuela de Rock y Música Moderna en Albacete. Microcooperativa de trabajo asociado fundada por Fernando
              Moya y Antonio Cebrián. Sube el volumen, rompe las reglas.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
              <span className="text-xs text-slate-300 font-semibold">Matrículas abiertas curso 2026-2027</span>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Contacto Directo</h4>
            <ul className="text-xs space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-brand-purpleLight">📍</span>
                <span>
                  C/ Doctor Collado Piña 41, Bajo
                  <br />
                  02003 Albacete
                </span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-brand-purpleLight">📞</span>
                <span>Atención e inscripciones</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-brand-purpleLight">✉️</span>
                <span>info@tupatupariff.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Horarios del Centro</h4>
            <ul className="text-xs space-y-2">
              <li>
                <strong className="text-slate-200">Lunes a Viernes:</strong>
                <br />
                10:00 - 12:00 | 16:00 - 22:00
              </li>
              <li className="pt-1">
                <strong className="text-slate-200">Sábados:</strong>
                <br />
                10:00 - 14:00
              </li>
              <li className="pt-1 text-brand-gold">Domingos cerrado</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>&copy; 2026 Tupa Tupa Riff Escuela de Rock. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <a href="#hero" className="hover:text-brand-purpleLight transition">
              Subir al Inicio ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

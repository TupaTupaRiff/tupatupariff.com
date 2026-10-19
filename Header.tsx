import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#filosofia', label: 'Filosofía' },
  { href: '#cursos', label: 'Clases e Instrumentos' },
  { href: '#metodo', label: 'Volumen 11' },
  { href: '#equipo', label: 'Profesorado' },
  { href: '#local', label: 'El Local' },
  { href: '#contacto', label: 'Contacto' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-brand-dark/90 backdrop-blur-md border-b border-brand-darkBorder transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-3 group">
          <img
            src="/logo.png"
            alt="Tupa Tupa Riff Logo"
            className="h-14 sm:h-16 w-auto object-contain transition-transform group-hover:scale-105 duration-200"
          />
          <span className="hidden md:inline-block font-rock text-xs tracking-widest text-slate-400 border-l border-brand-darkBorder pl-3 uppercase">
            Albacete <br />
            <span className="text-brand-purpleLight text-sm">Escuela de Rock</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8 font-semibold text-sm tracking-wide">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-brand-purpleLight transition">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="#matricula"
            className="relative group overflow-hidden rounded-full p-px font-bold text-xs uppercase tracking-wider inline-flex items-center justify-center"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-brand-purpleLight via-pink-500 to-brand-gold animate-pulse" />
            <span className="relative px-5 py-2.5 rounded-full bg-brand-dark group-hover:bg-transparent transition duration-300">
              Clase de Prueba
            </span>
          </a>

          <button
            aria-label="Abrir menú"
            onClick={() => setMenuOpen((v) => !v)}
            className="lg:hidden p-2 text-slate-300 hover:text-white focus:outline-none"
          >
            {menuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-brand-darkCard border-b border-brand-darkBorder px-6 py-5 flex flex-col gap-4 text-sm font-semibold">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="py-2 border-b border-brand-darkBorder/40 last:border-0"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

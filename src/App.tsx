import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Presentacion from '@/components/Presentacion';
import Filosofia from '@/components/Filosofia';
import Cursos from '@/components/Cursos';
import Metodo from '@/components/Metodo';
import Equipo from '@/components/Equipo';
import Local from '@/components/Local';
import Matricula from '@/components/Matricula';
import Footer from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-brand-dark text-slate-100 font-sans selection:bg-brand-purple selection:text-white">
      <Header />
      <main>
        <Presentacion />
        <Hero />
        <Filosofia />
        <Cursos />
        <Metodo />
        <Equipo />
        <Local />
        <Matricula />
      </main>
      <Footer />
    </div>
  );
}

export default App;

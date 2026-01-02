import Header from './components/Header';
import Hero from './components/Hero';
import ProjectGallery from './components/ProjectGallery';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingLines from './components/FloatingLines';
import { projects } from './data/projects';

function App() {
  return (
    <div className="min-h-screen relative">
      <div style={{ width: '100%', height: '100vh', position: 'fixed', top: 0, left: 0, zIndex: 0 }}>
        <FloatingLines 
          enabledWaves={['top', 'middle', 'bottom']}
          lineCount={[10, 15, 20]}
          lineDistance={[8, 6, 4]}
          bendRadius={5.0}
          bendStrength={-0.5}
          interactive={true}
          parallax={true}
          parallaxStrength={0.3}
          linesGradient={['#3a0a0a', '#4a0e0e', '#5a1a1a', '#6b2525']}
        />
      </div>
      <Header />
      <main className="relative z-10">
        <Hero />
        <ProjectGallery projects={projects} />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;


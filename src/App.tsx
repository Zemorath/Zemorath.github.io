import { Navigation } from '@/sections/Navigation';
import { Hero } from '@/sections/Hero';
import { About } from '@/sections/About';
import { Skills } from '@/sections/Skills';
import { Projects } from '@/sections/Projects';
import { Experience } from '@/sections/Experience';
import { Contact } from '@/sections/Contact';
import { Footer } from '@/sections/Footer';
import { ScrollToTop } from '@/components/ScrollToTop';

function App() {
  return (
    <div className="min-h-screen bg-[#0f0f0f]">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;

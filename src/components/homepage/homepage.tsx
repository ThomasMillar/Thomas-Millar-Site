import Hero from './hero';
import Projects from './projects';
import Skills from './skills';
import About from './about';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Projects />
      <Skills />
      <About />
    </main>
  );
}

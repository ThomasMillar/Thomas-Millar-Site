import Hero from './hero';
import Projects from './projects';
import Skills from './skills';

import styles from './styles.module.css';

export default function HomePage() {
  return (
    <main>
      <Hero />

      <section className={styles.section}>
        <Projects />
      </section>

      <section className={styles.section}>
        <Skills />
      </section>
    </main>
  );
}
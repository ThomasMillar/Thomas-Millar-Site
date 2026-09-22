import styles from './styles.module.css';

export default function Hero() {
  return (
    <header className={styles.hero}>
      <div className={styles.heroBackdrop} aria-hidden="true" />

      <div className={styles.heroInner}>
        <p className={styles.eyebrow}>DATA • ANALYTICS • ENGINEERING</p>

        <h1>
          Data Analyst working across
          <span> analytics and data engineering</span>
        </h1>

        <p className={styles.heroCopy}>
          I work with SQL, Python, Microsoft Fabric and Power BI to build
          data pipelines, models and reporting solutions from source through
          to end user.
        </p>

        <div className={styles.heroActions}>
          <a className={styles.primaryButton} href="#projects">
            Explore my work
          </a>
          <a className={styles.textLink} href="/CV.pdf">
            View CV <span>↗</span>
          </a>
        </div>

        <div className={styles.heroMeta}>
          <span>Manchester, UK</span>
          <span>Data Analyst</span>
          <span>Building towards Data Engineering</span>
        </div>
      </div>
    </header>
  );
}

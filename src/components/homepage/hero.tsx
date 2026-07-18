import styles from './styles.module.css';

export default function Hero() {
  return (
    <header className={styles.hero}>
      <h1>
        Thomas Millar
      </h1>

      <h2>
        Data Analyst → Data Engineer
      </h2>

      <p>
        Building data platforms, ETL pipelines and analytics solutions
        using Python, SQL, PostgreSQL and cloud technologies.
      </p>

      <div className={styles.buttons}>
        <a
          href="/docs/projects"
          className="button button--primary"
        >
          View Projects
        </a>

        <a
          href="https://github.com/"
          className="button button--secondary"
        >
          GitHub
        </a>
      </div>
    </header>
  );
}
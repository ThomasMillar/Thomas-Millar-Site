import styles from './styles.module.css';

export default function Hero() {
  return (
    <header className={styles.hero}>
      <h1>
        Thomas Millar
      </h1>

      <h2>
        Data Analyst | Building towards Data Engineering
      </h2>

      <p>
        I build data-driven solutions using SQL, Python and
        visualisation tools, while developing skills in data
        pipelines, databases and cloud technologies.
      </p>

      <div className={styles.buttons}>
        <a
          className="button button--primary button--lg"
          href="/docs/projects"
        >
          View Projects
        </a>

        <a
          className="button button--secondary button--lg"
          href="https://github.com/ThomasMillar"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>

        <a
          className="button button--secondary button--lg"
          href="https://www.linkedin.com/in/thomas-millar-00a896234/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </header>
  );
}
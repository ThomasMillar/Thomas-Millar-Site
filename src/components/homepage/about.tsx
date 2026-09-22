import styles from './styles.module.css';

export default function About() {
  return (
    <section className={styles.aboutSection} id="about">
      <div className={styles.aboutPanel}>
        <p className={styles.eyebrow}>ABOUT</p>

        <div className={styles.aboutGrid}>
          <h2>
            I like building things that make data easier to use.
          </h2>

          <div className={styles.aboutCopy}>
            <p>
              I currently work as a Data Analyst, using data to answer questions,
              improve reporting and support decision making.
            </p>
            <p>
              I’m developing further into data engineering by building projects
              that cover the full journey from source data and ingestion through
              to modelling, APIs and reporting.
            </p>

            <div className={styles.aboutLinks}>
              <a
                href="https://github.com/ThomasMillar"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub ↗
              </a>
              <a
                href="https://www.linkedin.com/in/thomas-millar-00a896234/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn ↗
              </a>
              <a href="pathname:///CV.pdf">CV ↗</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

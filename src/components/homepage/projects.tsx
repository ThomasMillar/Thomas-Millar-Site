import styles from './styles.module.css';

const projects = [
  {
    number: '01',
    title: 'UK Housing Data Platform',
    description:
      'An end-to-end platform built around HM Land Registry transaction data, from automated ingestion and PostgreSQL modelling through to a FastAPI layer and Streamlit dashboard.',
    technologies: ['Python', 'PostgreSQL', 'Docker', 'FastAPI', 'Streamlit'],
    page: '/projects/uk-housing',
    github: 'https://github.com/ThomasMillar/UK-housing-data-platform',
    imageClass: styles.housingVisual,
  },
  {
    number: '02',
    title: 'Football Analytics Platform',
    description:
      'A multi-league football data platform using API ingestion, Azure SQL, staged historical loads, SQL modelling and Power BI for league, team and player analysis.',
    technologies: ['Python', 'Azure SQL', 'Power BI', 'GitHub Actions', 'REST API'],
    page: '/projects/football-analytics',
    github: 'https://github.com/ThomasMillar/Football-Analytics-Platform',
    imageClass: styles.footballVisual,
  },
];

export default function Projects() {
  return (
    <section className={styles.projectsSection} id="projects">
      <div className={styles.sectionHeader}>
        <p className={styles.eyebrow}>SELECTED WORK</p>
        <h2>Projects built from the data layer up.</h2>
      </div>

      <div className={styles.projectList}>
        {projects.map((project, index) => (
          <article
            className={`${styles.projectRow} ${index % 2 ? styles.projectRowReverse : ''}`}
            key={project.title}
          >
            <a
              href={project.page}
              className={`${styles.projectVisual} ${project.imageClass}`}
              aria-label={`View ${project.title}`}
            >
              <div className={styles.visualGrid} />
              <span className={styles.projectNumber}>{project.number}</span>
              <span className={styles.visualLabel}>VIEW CASE STUDY ↗</span>
            </a>

            <div className={styles.projectContent}>
              <p className={styles.projectIndex}>PROJECT {project.number}</p>
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className={styles.tags}>
                {project.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <div className={styles.projectLinks}>
                <a href={project.page}>Case study →</a>
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  GitHub ↗
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

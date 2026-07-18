import styles from './styles.module.css';

const projects = [
  {
    title: "UK Housing Data Platform",
    description:
      "A data platform exploring UK property trends using HM Land Registry Price Paid data. Built automated data workflows, analytical datasets and interactive dashboards.",
    technologies: [
      "Python",
      "PostgreSQL",
      "Docker",
      "FastAPI",
      "Streamlit"
    ],
    link: "/docs/uk-housing-platform"
  },
  {
    title: "Football Analytics Platform",
    description:
      "A football analytics solution combining API data ingestion, SQL modelling and Power BI dashboards to explore Premier League performance.",
    technologies: [
      "Python",
      "SQL",
      "Azure SQL",
      "Power BI",
      "APIs"
    ],
    link: "/docs/football-analytics-platform"
  }
];

export default function Projects() {
  return (
    <div>
      <h2>Featured Projects</h2>

      <div className={styles.projectGrid}>
        {projects.map((project) => (
          <div
            className={styles.projectCard}
            key={project.title}
          >

            <h3>
              {project.title}
            </h3>

            <p>
              {project.description}
            </p>

            <div className={styles.tags}>
              {project.technologies.map((tech) => (
                <span key={tech}>
                  {tech}
                </span>
              ))}
            </div>

            <a
              href={project.link}
              className="button button--primary"
            >
              View Project →
            </a>

          </div>
        ))}
      </div>
    </div>
  );
}
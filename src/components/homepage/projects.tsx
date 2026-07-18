import styles from './styles.module.css';

const projects = [
  {
    title: "UK Housing Data Platform",
    description:
      "End-to-end data engineering platform using HM Land Registry data.",
    technologies: [
      "Python",
      "PostgreSQL",
      "Docker",
      "FastAPI",
      "Streamlit"
    ],
    link: "/docs/projects"
  },
  {
    title: "Football Analytics Platform",
    description:
      "Football data ingestion and analytics platform using APIs, Azure SQL and Power BI.",
    technologies: [
      "Python",
      "Azure SQL",
      "Power BI",
      "APIs"
    ],
    link: "/docs/projects"
  }
];

export default function Projects() {
  return (
    <div>
      <h2>Featured Projects</h2>

      <div className={styles.projectGrid}>
        {projects.map((project) => (
          <div className={styles.projectCard} key={project.title}>

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
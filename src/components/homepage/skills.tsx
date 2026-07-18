import styles from './styles.module.css';

export default function Skills() {
  const skills = [
    'SQL',
    'Power BI',
    'Python',
    'Excel',
    'Data Visualisation',
    'Data Analysis',
    'PostgreSQL',
    'Data Modelling',
    'Docker',
    'FastAPI',
    'Streamlit',
    'Azure',
  ];

  return (
    <div>
      <h2>
        Technical Skills
      </h2>

      <div className={styles.tags}>
        {skills.map((skill) => (
          <span key={skill}>
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
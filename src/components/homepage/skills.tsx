import styles from './styles.module.css';

const groups = [
  {
    title: 'Analytics',
    items: ['SQL', 'Power BI', 'Excel', 'Data Visualisation', 'Data Modelling'],
  },
  {
    title: 'Engineering',
    items: ['Python', 'ETL / ELT', 'REST APIs', 'FastAPI', 'Docker'],
  },
  {
    title: 'Platforms',
    items: ['PostgreSQL', 'Azure SQL', 'GitHub Actions', 'Streamlit', 'Git'],
  },
];

export default function Skills() {
  return (
    <section className={styles.skillsSection}>
      <div className={styles.sectionHeader}>
        <p className={styles.eyebrow}>WHAT I WORK WITH</p>
        <h2>Analytics experience with an engineering mindset.</h2>
      </div>

      <div className={styles.skillGrid}>
        {groups.map((group) => (
          <div className={styles.skillGroup} key={group.title}>
            <h3>{group.title}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function Skills() {
  const skills = [
    'Python',
    'SQL',
    'PostgreSQL',
    'Docker',
    'FastAPI',
    'Azure',
    'Power BI',
    'Streamlit',
  ];

  return (
    <div>
      <h2>
        Technical Skills
      </h2>

      <ul>
        {skills.map((skill) => (
          <li key={skill}>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}
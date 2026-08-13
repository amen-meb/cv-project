// src/components/CVPreview/CVSkills.jsx
export default function CVSkills({ skills }) {
  return (
    <div className="cv-section">
      <h3 className="cv-section-title">Skills</h3>
      <div className="cv-section-divider"></div>

      <ul className="cv-skills-list">
        {skills.map((skill, index) => (
          <li key={index} className="cv-skill-item">
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}
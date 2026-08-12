// src/components/CVPreview/CVSkills.jsx
export default function CVSkills({ skills }) {
  return (
    <div className="cv-section">
      <h3 className="cv-section-title">Skills</h3>
      <div className="cv-section-divider"></div>
      
      <div className="cv-skills-list">
        {skills.map((skill, index) => (
          <span key={index} className="cv-skill-item">
            {skill}{index < skills.length - 1 ? " • " : ""}
          </span>
        ))}
      </div>
    </div>
  );
}
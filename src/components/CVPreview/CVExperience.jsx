export default function CVExperience({ experience }) {
  return (
    <div className="cv-section">
      <h3 className="cv-section-title">Work Experience</h3>
      <div className="cv-section-divider"></div>

      {experience.map((exp) => (
        <div key={exp.id} className="cv-entry">
          <div className="cv-entry-header">
            <div>
              <strong className="cv-institution">{exp.company}</strong>
              <div className="cv-subtitle">{exp.role}</div>
            </div>
            <div className="cv-entry-dates">
              {exp.startDate} — {exp.endDate || "Present"}
            </div>
          </div>
          {exp.description && (
            <p className="cv-entry-description">{exp.description}</p>
          )}
        </div>
      ))}
    </div>
  );
}
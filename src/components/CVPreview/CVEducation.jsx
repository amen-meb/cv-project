export default function CVEducation({ education }) {
  return (
    <div className="cv-section">
      <h3 className="cv-section-title">Education</h3>
      <div className="cv-section-divider"></div>

      {education.map((edu) => (
        <div key={edu.id} className="cv-entry">
          <div className="cv-entry-header">
            <div>
              <strong className="cv-institution">{edu.school}</strong>
              <div className="cv-subtitle">
                {edu.degree} {edu.field && `in ${edu.field}`}
              </div>
            </div>
            <div className="cv-entry-dates">
              {edu.startDate} — {edu.endDate || "Present"}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
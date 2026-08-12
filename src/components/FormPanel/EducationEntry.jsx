import { simpleData } from "../../data/simpleData";

export default function EducationEntry({ edu, onChange, onRemove }) {
  const placeholderEdu = simpleData.education[0] || {
    school: "University Name",
    degree: "Degree",
    field: "Field of Study",
  };

  return (
    <div className="education-entry-container">
      <div className="input-group">
        <label>School</label>
        <input
          type="text"
          placeholder={`e.g. ${placeholderEdu.school}`}
          value={edu.school}
          onChange={(e) => onChange(edu.id, "school", e.target.value)}
        />
      </div>

      <div className="input-group">
        <label>Degree</label>
        <input
          type="text"
          placeholder={`e.g. ${placeholderEdu.degree}`}
          value={edu.degree}
          onChange={(e) => onChange(edu.id, "degree", e.target.value)}
        />
      </div>

      <div className="input-group">
        <label>Field of Study</label>
        <input
          type="text"
          placeholder={`e.g. ${placeholderEdu.field}`}
          value={edu.field}
          onChange={(e) => onChange(edu.id, "field", e.target.value)}
        />
      </div>

      <div className="date-group">
        <div className="input-group">
          <label>Start Date</label>
          <input
            type="month"
            value={edu.startDate}
            onChange={(e) => onChange(edu.id, "startDate", e.target.value)}
          />
        </div>

        <div className="input-group">
          <label>End Date</label>
          <input
            type="month"
            value={edu.endDate}
            onChange={(e) => onChange(edu.id, "endDate", e.target.value)}
          />
        </div>
      </div>

      <button 
        type="button" 
        className="btn-delete" 
        onClick={() => onRemove(edu.id)}
      >
        Remove Education
      </button>
      <hr className="entry-divider" />
    </div>
  );
}
import { simpleData } from "../../data/simpleData";

export default function ExperienceEntry({ exp, onChange, onRemove }) {
  const placeholderExp = simpleData.experience[0] || {
    company: "Company Name",
    role: "Job Title",
    description: "Describe your accomplishments and responsibilities...",
  };

  return (
    <div className="experience-entry-container">
      <div className="input-group">
        <label>Company</label>
        <input
          type="text"
          placeholder={`e.g. ${placeholderExp.company}`}
          value={exp.company}
          onChange={(e) => onChange(exp.id, "company", e.target.value)}
        />
      </div>

      <div className="input-group">
        <label>Role</label>
        <input
          type="text"
          placeholder={`e.g. ${placeholderExp.role}`}
          value={exp.role}
          onChange={(e) => onChange(exp.id, "role", e.target.value)}
        />
      </div>

      <div className="date-group">
        <div className="input-group">
          <label>Start Date</label>
          <input
            type="month"
            value={exp.startDate}
            onChange={(e) => onChange(exp.id, "startDate", e.target.value)}
          />
        </div>

        <div className="input-group">
          <label>End Date</label>
          <input
            type="month"
            value={exp.endDate}
            onChange={(e) => onChange(exp.id, "endDate", e.target.value)}
          />
        </div>
      </div>

      <div className="input-group">
        <label>Description</label>
        <textarea
          rows="4"
          placeholder={placeholderExp.description}
          value={exp.description}
          onChange={(e) => onChange(exp.id, "description", e.target.value)}
        />
      </div>

      <button 
        type="button" 
        className="btn-delete" 
        onClick={() => onRemove(exp.id)}
      >
        Remove Experience
      </button>
      <hr className="entry-divider" />
    </div>
  );
}
// src/components/FormPanel/ExperienceEntry.jsx
import { simpleData } from "../../data/simpleData";
import { FaTrash } from "react-icons/fa";

// FIXED: Added onClose to the destructuring parameter list
export default function ExperienceEntry({ exp, onChange, onRemove, onClose }) {
  if (!exp) return null;

  const placeholderExp = simpleData.experience[0] || {
    company: "Company Name",
    role: "Job Title",
    description: "Describe your accomplishments and responsibilities...",
  };

  return (
    <div className="experience-editing-container">
      <div className="input-group">
        <label htmlFor="company">Work Experience</label>
        <input
          type="text"
          id="company"
          placeholder={`e.g. ${placeholderExp.company}`}
          value={exp.company || ""}
          onChange={(e) => onChange(exp.id, "company", e.target.value)}
        />
      </div>

      <div className="input-group">
        <label htmlFor="role">Role</label>
        <input
          type="text"
          id="role"
          placeholder={`e.g. ${placeholderExp.role}`}
          value={exp.role || ""}
          onChange={(e) => onChange(exp.id, "role", e.target.value)}
        />
      </div>

      <div className="date-group">
        <div className="input-group">
          <label htmlFor="startDate">Start Date</label>
          <input
            type="month"
            id="startDate"
            placeholder="e.g. 06-2018"
            value={exp.startDate || ""}
            onChange={(e) => onChange(exp.id, "startDate", e.target.value)}
          />
        </div>

        <div className="input-group">
          <label htmlFor="endDate">End Date</label>
          <input
            type="month"
            id="endDate"
            placeholder="e.g. 06-2023"
            value={exp.endDate || ""}
            onChange={(e) => onChange(exp.id, "endDate", e.target.value)}
          />
        </div>
      </div>

      <div className="input-group">
        <label htmlFor="description">Description</label>
        <textarea
          rows="4"
          placeholder={placeholderExp.description}
          id="description"
          value={exp.description || ""}
          onChange={(e) => onChange(exp.id, "description", e.target.value)}
        />
      </div>

      {/* FIXED: Removed premature closing div tag so buttons render inside the action container */}
      <div className="entry-actions-row">
        <button 
          type="button" 
          className="btn-action-delete" // FIXED: Re-aligned with global App.css style
          onClick={() => {
            onRemove(exp.id);
            onClose(); // Safely calls onClose now
          }}
        >
          <FaTrash /> Delete
        </button>
        
        <div className="right-actions">
          <button 
            type="button" 
            className="btn-action-cancel"
            onClick={onClose}
          >
            Cancel
          </button>
          <button 
            type="button" 
            className="btn-action-save"
            onClick={onClose}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
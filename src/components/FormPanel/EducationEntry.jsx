import { FaTrash } from "react-icons/fa";

export default function EducationEntry({ edu, onChange, onRemove, onClose }) {
  if (!edu) return null;

  return (
    <div className="education-editing-container">
      {/* School Input */}
      <div className="input-group">
        <label htmlFor="school">School</label>
        <input
          type="text"
          id="school"
          placeholder="e.g. Addis Ababa University"
          value={edu.school || ""}
          onChange={(e) => onChange(edu.id, "school", e.target.value)}
        />
      </div>

      {/* Degree Input */}
      <div className="input-group">
        <label htmlFor="degree">Degree</label>
        <input
          type="text"
          id="degree"
          placeholder="e.g. Bachelor of Science"
          value={edu.degree || ""}
          onChange={(e) => onChange(edu.id, "degree", e.target.value)}
        />
      </div>

      {/* Field of Study Input */}
      <div className="input-group">
        <label htmlFor="field">Field of Study</label>
        <input
          type="text"
          id="field"
          placeholder="e.g. Computer Science"
          value={edu.field || ""}
          onChange={(e) => onChange(edu.id, "field", e.target.value)}
        />
      </div>

      {/* Dates Row */}
      <div className="date-group">
        <div className="input-group">
          <label htmlFor="startDate">Start Date</label>
          <input
            type="text"
            id="startDate"
            placeholder="e.g. 2018"
            value={edu.startDate || ""}
            onChange={(e) => onChange(edu.id, "startDate", e.target.value)}
          />
        </div>

        <div className="input-group">
          <label htmlFor="endDate">End Date</label>
          <input
            type="text"
            id="endDate"
            placeholder="e.g. 2022"
            value={edu.endDate || ""}
            onChange={(e) => onChange(edu.id, "endDate", e.target.value)}
          />
        </div>
      </div>


      {/* Actions Row: Delete (Left) | Cancel & Save (Right) */}
      <div className="entry-actions-row">
        <button 
          type="button" 
          className="btn-action-delete"
          onClick={() => {
            onRemove(edu.id);
            onClose(); 
          }}
        >
          <FaTrash /> Delete
        </button>

        <div className="right-actions">
          <button type="button" className="btn-action-cancel" onClick={onClose}>
            Cancel
          </button>
          <button type="button" className="btn-action-save" onClick={onClose}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
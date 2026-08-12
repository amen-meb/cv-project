// src/components/FormPanel/EducationEntry.jsx
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
          placeholder="Enter school / university"
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
          placeholder="Enter Degree / Field Of Study"
          value={edu.degree || ""}
          onChange={(e) => onChange(edu.id, "degree", e.target.value)}
        />
      </div>

      {/* Dates Row */}
      <div className="date-group">
        <div className="input-group">
          <label htmlFor="startDate">Start Date</label>
          <input
            type="text"
            id="startDate"
            placeholder="Enter Start Date"
            value={edu.startDate || ""}
            onChange={(e) => onChange(edu.id, "startDate", e.target.value)}
          />
        </div>

        <div className="input-group">
          <label htmlFor="endDate">End Date</label>
          <input
            type="text"
            id="endDate"
            placeholder="Enter End Date"
            value={edu.endDate || ""}
            onChange={(e) => onChange(edu.id, "endDate", e.target.value)}
          />
        </div>
      </div>

      {/* Location Input (Optional) */}
      <div className="input-group">
        <label htmlFor="location">
          Location <span className="label-helper">optional</span>
        </label>
        <input
          type="text"
          id="location"
          placeholder="Enter Location"
          value={edu.location || ""}
          onChange={(e) => onChange(edu.id, "location", e.target.value)}
        />
      </div>

      {/* Actions Row: Delete (Left) | Cancel & Save (Right) */}
      <div className="entry-actions-row">
        <button 
          type="button" 
          className="btn-action-delete"
          onClick={() => {
            onRemove(edu.id);
            onClose(); // Returns to list view
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
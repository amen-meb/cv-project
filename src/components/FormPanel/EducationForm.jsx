import { useState } from "react";
import { FaGraduationCap, FaChevronDown, FaRegEye } from "react-icons/fa";
import EducationEntry from "./EducationEntry";

export default function EducationForm({ educationList, onChange, onAdd, onRemove }) {
  const [isExpanded, setIsExpanded] = useState(true);
  const [editingId, setEditingId] = useState(null); 

  // Handler for adding a new education entry
  const handleAddClick = () => {
    const newId = crypto.randomUUID();
    onAdd(newId);
    setEditingId(newId);
  };

  return (
    <section className="form-section-card">
      {/* Collapsible Card Header */}
      <div 
        className="section-card-header" 
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="header-title-group">
          <h2>Education</h2>
        </div>
        <FaChevronDown className={`chevron-icon ${isExpanded ? "rotated" : ""}`} />
      </div>

      {isExpanded && (
        <div className="section-card-content">
          {editingId ? (
            /* EDIT VIEW */
            <EducationEntry
              edu={educationList.find((edu) => edu.id === editingId)}
              onChange={onChange}
              onRemove={onRemove}
              onClose={() => setEditingId(null)}
            />
          ) : (
            /* LIST VIEW */
            <div className="education-list-view">
              <div className="edu-rows-container">
                {educationList.map((edu) => (
                  <div 
                    key={edu.id} 
                    className="edu-list-row"
                    onClick={() => setEditingId(edu.id)}
                  >
                    <span className="edu-row-title">
                      {edu.school || "New Education Entry"}
                    </span>
                    <FaRegEye className="edu-row-eye-icon" />
                  </div>
                ))}
              </div>

              {/* Centered Pill Button */}
              <div className="add-pill-container">
                <button type="button" className="btn-add-pill" onClick={handleAddClick}>
                  + Education
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </section>
  );
}
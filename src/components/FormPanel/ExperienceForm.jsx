// src/components/FormPanel/ExperienceForm.jsx
import { useState } from "react";
import { FaBriefcase, FaChevronDown, FaRegEye } from "react-icons/fa";
import ExperienceEntry from "./ExperienceEntry";

export default function ExperienceForm({ experienceList, onChange, onAdd, onRemove }) {
  const [isExpanded, setIsExpanded] = useState(true);
  const [editingId, setEditingId] = useState(null); // Tracks which entry is being edited

  // Pre-generates the unique ID so we can immediately open it in Edit View
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
          <h2>Work Experience</h2>
        </div>
        <FaChevronDown className={`chevron-icon ${isExpanded ? "rotated" : ""}`} />
      </div>

      {isExpanded && (
        <div className="section-card-content">
          {editingId ? (
            <ExperienceEntry
              exp={experienceList.find((exp) => exp.id === editingId)}
              onChange={onChange}
              onRemove={onRemove}
              onClose={() => setEditingId(null)}
            />
          ) : (
            
            <div className="experience-list-view">
              <div className="exp-rows-container">
                {experienceList.map((exp) => (
                  <div 
                    key={exp.id} 
                    className="exp-list-row"
                    onClick={() => setEditingId(exp.id)}
                  >
                    <span className="exp-row-title">
                      {exp.company || "New Experience Entry"}
                    </span>
                    <FaRegEye className="exp-row-eye-icon" />
                  </div>
                ))}
              </div>

              {/* Centered Pill Button */}
              <div className="add-pill-container">
                <button type="button" className="btn-add-pill" onClick={handleAddClick}>
                  + Experience
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </section>
  );
}
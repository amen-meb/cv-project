// src/components/FormPanel/SkillsForm.jsx
import { useState } from "react";
import { FaTimes, FaChevronDown } from "react-icons/fa";

export default function SkillsForm({ skillsList, onAddSkill, onRemoveSkill }) {
  const [inputValue, setInputValue] = useState("");
  const [isExpanded, setIsExpanded] = useState(true); 

  const handleSubmit = (e) => {
    e.preventDefault(); 
    onAddSkill(inputValue);
    setInputValue(""); 
  };

  return (
    <section className="form-section-card">
      <div 
        className="section-card-header" 
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="header-title-group">
          <h2>Skills</h2>
        </div>
        <FaChevronDown className={`chevron-icon ${isExpanded ? "rotated" : ""}`} />
      </div>

      {isExpanded && (
        <div className="section-card-content">
          {/* Input box to add a skill */}
          <form onSubmit={handleSubmit} className="skill-input-row">
            <input
              type="text"
              placeholder="e.g. React, Python, Git"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button type="submit" className="btn-add-skill">Add</button>
          </form>

          <div className="skills-tags-container">
            {skillsList.map((skill, index) => (
              <span key={index} className="skill-tag">
                {skill}
                <button
                  type="button"
                  className="btn-remove-tag"
                  onClick={() => onRemoveSkill(skill)}
                >
                  <FaTimes />
                </button>
              </span>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
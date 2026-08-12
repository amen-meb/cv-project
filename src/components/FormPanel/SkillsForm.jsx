// src/components/FormPanel/SkillsForm.jsx
import { useState } from "react";
import { FaTimes } from "react-icons/fa";

export default function SkillsForm({ skillsList, onAddSkill, onRemoveSkill }) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page reload
    onAddSkill(inputValue);
    setInputValue(""); // Clears input box
  };

  return (
    <section className="form-section skills-form-section">
      <h2>Skills</h2>

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

      {/* List of active skill tags */}
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
    </section>
  );
}
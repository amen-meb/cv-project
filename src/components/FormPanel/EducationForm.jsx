// src/components/FormPanel/EducationForm.jsx
import EducationEntry from "./EducationEntry";

export default function EducationForm({ educationList, onChange, onAdd, onRemove }) {
  return (
    <section className="form-section education-form-section">
      <h2>Education</h2>

      <div className="education-entries-list">
        {educationList.map((edu) => (
          <EducationEntry
            key={edu.id}
            edu={edu}
            onChange={onChange}
            onRemove={onRemove}
          />
        ))}
      </div>

      <button type="button" className="btn-add" onClick={onAdd}>
        + Add Education
      </button>
    </section>
  );
}
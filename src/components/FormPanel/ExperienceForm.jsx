import ExperienceEntry from "./ExperienceEntry";

export default function ExperienceForm({ experienceList, onChange, onAdd, onRemove }) {
  return (
    <section className="form-section experience-form-section">
      <h2>Work Experience</h2>

      <div className="experience-entries-list">
        {experienceList.map((exp) => (
          <ExperienceEntry
            key={exp.id}
            exp={exp}
            onChange={onChange}
            onRemove={onRemove}
          />
        ))}
      </div>

      <button type="button" className="btn-add" onClick={onAdd}>
        + Add Experience
      </button>
    </section>
  );
}
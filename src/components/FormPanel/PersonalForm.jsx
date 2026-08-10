// src/components/FormPanel/PersonalForm.jsx
export default function PersonalForm({ personalInfo, onChange }) {
  return (
    <section className="form-section">
      <h2>Personal Information</h2>
      
      <div className="input-group">
        <label htmlFor="fullName">Full Name</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          placeholder="John Doe"
          value={personalInfo.fullName}
          onChange={onChange}
        />
      </div>

      <div className="input-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="johndoe@example.com"
          value={personalInfo.email}
          onChange={onChange}
        />
      </div>

      <div className="input-group">
        <label htmlFor="phone">Phone</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="(123) 456-7890"
          value={personalInfo.phone}
          onChange={onChange}
        />
      </div>

      <div className="input-group">
        <label htmlFor="location">Location</label>
        <input
          type="text"
          id="location"
          name="location"
          placeholder="City, State"
          value={personalInfo.location}
          onChange={onChange}
        />
      </div>

      <div className="input-group">
        <label htmlFor="linkedin">LinkedIn</label>
        <input
          type="text"
          id="linkedin"
          name="linkedin"
          placeholder="linkedin.com/in/username"
          value={personalInfo.linkedin}
          onChange={onChange}
        />
      </div>

      <div className="input-group">
        <label htmlFor="github">GitHub</label>
        <input
          type="text"
          id="github"
          name="github"
          placeholder="github.com/username"
          value={personalInfo.github}
          onChange={onChange}
        />
      </div>
    </section>
  );
}
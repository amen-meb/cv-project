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
          placeholder="Abebe Kebede"
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
          placeholder="abebekebede@gmeil.com"
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
          placeholder="(+251) 912345678"
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
          placeholder="linkedin.com/in/abebekebede"
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
          placeholder="github.com/abebekebede"
          value={personalInfo.github}
          onChange={onChange}
        />
      </div>
    </section>
  );
}
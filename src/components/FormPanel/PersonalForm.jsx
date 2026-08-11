import { simpleData } from "../../data/simpleData";


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
          placeholder={simpleData.fullName}
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
          placeholder={simpleData.emeil}
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
          placeholder={simpleData.phone}
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
          placeholder={simpleData.location}
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
          placeholder={simpleData.linkedin}
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
          placeholder={simpleData.github}
          value={personalInfo.github}
          onChange={onChange}
        />
      </div>
    </section>
  );
}
// src/components/CVPreview/CVHeader.jsx
export default function CVHeader({ info }) {
  const { fullName, email, phone, location, linkedin, github } = info;

  return (
    <header className="cv-header">
      {fullName && <h1 className="cv-name">{fullName}</h1>}
      
      <div className="cv-contact-info">
        {email && <span>{email}</span>}
        {phone && <span>{phone}</span>}
        {location && <span>{location}</span>}
      </div>

      <div className="cv-social-info">
        {linkedin && (
          <span>
            <strong>LinkedIn:</strong> {linkedin}
          </span>
        )}
        {github && (
          <span>
            <strong>GitHub:</strong> {github}
          </span>
        )}
      </div>
    </header>
  );
}
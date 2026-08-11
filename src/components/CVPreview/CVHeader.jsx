import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaLinkedin, 
  FaGithub 
} from "react-icons/fa";

export default function CVHeader({ info }) {
  const { fullName, email, phone, location, linkedin, github } = info;

  return (
    <header className="cv-header">
      {fullName && <h1 className="cv-name">{fullName}</h1>}
      
      <div className="cv-contact-info">
        {email && (<span><FaEnvelope className="cv-icon" /> {email}</span>)}
        {phone && <span><FaPhone className="cv-icon" />{phone}</span>}
        {location && <span><FaMapMarkerAlt className="cv-icon" />{location}</span>}
      </div>

      <div className="cv-social-info">
        {linkedin && (
          <span>
            <FaLinkedin className="cv-icon" /> {linkedin}
          </span>
        )}
        {github && (
          <span>
            <FaGithub className="cv-icon" /> {github}
          </span>
        )}
      </div>
    </header>
  );
}
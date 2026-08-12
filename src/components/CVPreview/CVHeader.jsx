// src/components/CVPreview/CVHeader.jsx
import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaLinkedin, 
  FaGithub 
} from "react-icons/fa";
import { simpleData } from "../../data/simpleData";

export default function CVHeader({ info }) {
  // Use state values if they exist, otherwise fall back to simpleData defaults
  const fullName = info.fullName || simpleData.personalInfo.fullName;
  const email = info.email || simpleData.personalInfo.email;
  const phone = info.phone || simpleData.personalInfo.phone;
  const location = info.location || simpleData.personalInfo.location;
  const linkedin = info.linkedin || simpleData.personalInfo.linkedin;
  const github = info.github || simpleData.personalInfo.github;

  return (
    <header className="cv-header">
      {fullName && <h1 className="cv-name">{fullName}</h1>}
      
      <div className="cv-contact-info">
        {email && (
          <span>
            <FaEnvelope className="cv-icon" /> {email}
          </span>
        )}
        {phone && (
          <span>
            <FaPhone className="cv-icon" /> {phone}
          </span>
        )}
        {location && (
          <span>
            <FaMapMarkerAlt className="cv-icon" /> {location}
          </span>
        )}
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
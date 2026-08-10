// src/App.jsx
import { useState } from "react";
import PersonalForm from "./components/FormPanel/PersonalForm";
import CVHeader from "./components/CVPreview/CVHeader";
import "./App.css";

function App() {
  // Define state with empty strings as default values
  const [personalInfo, setPersonalInfo] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    linkedin: "",
    github: "",
  });

  // Handle changes for all text inputs in this section
  const handlePersonalChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value, // Dynamically updates the matching key in state
    }));
  };

  return (
    <div className="app-container">
      {/* Left Panel: Form */}
      <div className="form-panel">
        <PersonalForm 
          personalInfo={personalInfo} 
          onChange={handlePersonalChange} 
        />
      </div>

      {/* Right Panel: Preview */}
      <div className="cv-preview-container">
        <div className="cv-document">
          <CVHeader info={personalInfo} />
        </div>
      </div>
    </div>
  );
}

export default App;
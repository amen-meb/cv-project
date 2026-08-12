import { useState } from "react";
import PersonalForm from "./components/FormPanel/PersonalForm";
import CVHeader from "./components/CVPreview/CVHeader";
import { simpleData } from "./data/simpleData";
import EducationForm from "./components/FormPanel/EducationForm";
import CVEducation from "./components/CVPreview/CVEducation";
import "./App.css";

function App() {
  const [personalInfo, setPersonalInfo] = useState(simpleData);
  const [educationList, setEducationList] = useState(simpleData.education);

  // Handle changes for all text inputs in this section
  const handlePersonalChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo((prevInfo) => ({
      ...prevInfo,[name]: value, 
    }));
  };

  const handleEducationChange = (id, field, value) => {
    setEducationList((prevList) =>
      prevList.map((edu) => 
        edu.id === id ? { ...edu, [field]: value } : edu
      )
    );
  };

  const handleAddEducation = () => {
    const newEdu = {
      id: crypto.randomUUID(), // Generates a unique ID
      school: "",
      degree: "",
      field: "",
      startDate: "",
      endDate: "",
    };
    setEducationList((prevList) => [...prevList, newEdu]);
  };

  const handleRemoveEducation = (id) => {
    setEducationList((prevList) => prevList.filter((edu) => edu.id !== id));
  };

  return (
    <div className="app-container">
      {/* Left Panel: Form */}
      <div className="form-panel">
        <PersonalForm 
          personalInfo={personalInfo} 
          onChange={handlePersonalChange} 
        />
      
        <EducationForm 
            educationList={educationList}
            onChange={handleEducationChange}
            onAdd={handleAddEducation}
            onRemove={handleRemoveEducation}
          />
      </div>

      {/* Right Panel: Preview */}
      <div className="cv-preview-container">
        <div className="cv-document">
          <CVHeader info={personalInfo} />

          {educationList.length > 0 && (
            <CVEducation education={educationList} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
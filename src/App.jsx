import { useState } from "react";
import PersonalForm from "./components/FormPanel/PersonalForm";
import CVHeader from "./components/CVPreview/CVHeader";
import { simpleData } from "./data/simpleData";
import EducationForm from "./components/FormPanel/EducationForm";
import CVEducation from "./components/CVPreview/CVEducation";
import ExperienceForm from "./components/FormPanel/ExperienceForm";
import CVExperience from "./components/CVPreview/CVExperience";
import SkillsForm from "./components/FormPanel/SkillsForm";
import CVSkills from "./components/CVPreview/CVSkills";
import "./App.css";

function App() {
  const [personalInfo, setPersonalInfo] = useState(simpleData);
  const [educationList, setEducationList] = useState(simpleData.education);
  const [experienceList, setExperienceList] = useState(simpleData.experience);
  const [skillsList, setSkillsList] = useState(simpleData.skills);

  // Handle changes for all text inputs in this section
  const handlePersonalChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo((prevInfo) => ({...prevInfo,[name]: value,}));
  };

  const handleEducationChange = (id, field, value) => {
    setEducationList((prevList) =>
      prevList.map((edu) => edu.id === id ? { ...edu, [field]: value } : edu)
    );
  };

  const handleAddEducation = () => {
    const newEdu = {
      id: crypto.randomUUID(),
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

  //Expriance handlers
  const handleExperienceChange = (id, field, value) => {
    setExperienceList((prevList) =>
      prevList.map((exp) => (exp.id === id ? { ...exp, [field]: value } : exp))
    );
  };

  const handleAddExperience = () => {
    const newExp = {
      id: crypto.randomUUID(),
      company: "",
      role: "",
      startDate: "",
      endDate: "",
      description: "",
    };
    setExperienceList((prevList) => [...prevList, newExp]);
  };

  const handleRemoveExperience = (id) => {
    setExperienceList((prevList) => prevList.filter((exp) => exp.id !== id));
  };

  //skill handlers
  const handleAddSkill = (newSkill) => {
    const trimmed = newSkill.trim();
    // Prevent adding empty strings or duplicate skills
    if (trimmed && !skillsList.includes(trimmed)) {
      setSkillsList((prev) => [...prev, trimmed]);
    }
  };

  const handleRemoveSkill = (skillToRemove) => {
    setSkillsList((prev) => prev.filter((skill) => skill !== skillToRemove));
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

          <ExperienceForm 
          experienceList={experienceList}
          onChange={handleExperienceChange}
          onAdd={handleAddExperience}
          onRemove={handleRemoveExperience}
        />

        <SkillsForm 
          skillsList={skillsList}
          onAddSkill={handleAddSkill}
          onRemoveSkill={handleRemoveSkill}
        />
      
      </div>

      {/* Right Panel: Preview */}
      <div className="cv-preview-container">
        <div className="cv-document">
          <CVHeader info={personalInfo} />

          {educationList.length > 0 && (
            <CVEducation education={educationList} />
          )}

          {experienceList.length > 0 && (
            <CVExperience experience={experienceList} />
          )}

          {skillsList.length > 0 && (
            <CVSkills skills={skillsList} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
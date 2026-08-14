// src/App.jsx
import { useState } from "react";
import PersonalForm from "./components/FormPanel/PersonalForm";
import CVHeader from "./components/CVPreview/CVHeader";
import Header from "./components/header";
import { simpleData } from "./data/simpleData";
import EducationForm from "./components/FormPanel/EducationForm";
import CVEducation from "./components/CVPreview/CVEducation";
import ExperienceForm from "./components/FormPanel/ExperienceForm";
import CVExperience from "./components/CVPreview/CVExperience";
import SkillsForm from "./components/FormPanel/SkillsForm";
import CVSkills from "./components/CVPreview/CVSkills";
import "./App.css";

function App() {
  const [personalInfo, setPersonalInfo] = useState(simpleData.personalInfo);
  const [educationList, setEducationList] = useState(simpleData.education);
  const [experienceList, setExperienceList] = useState(simpleData.experience);
  const [skillsList, setSkillsList] = useState(simpleData.skills);
  const [isPreviewMode, setIsPreviewMode] = useState(false);

  const handleClearAll = () => {
    setPersonalInfo({
      fullName: "",
      email: "",
      phone: "",
      location: "",
      linkedin: "",
      github: "",
    });
    setEducationList([]);
    setExperienceList([]);
    setSkillsList([]);
  };

  const handleLoadExample = () => {
    setPersonalInfo(simpleData.personalInfo);
    setEducationList(simpleData.education);
    setExperienceList(simpleData.experience);
    setSkillsList(simpleData.skills);
  };

  const handleDownloadCV = () => {
    const cvDocument = document.querySelector(".cv-document");

    if (!cvDocument) {
      window.print();
      return;
    }

    const printWindow = window.open("", "_blank", "width=900,height=1200");

    if (!printWindow) {
      window.alert("Please allow pop-ups to download the CV.");
      return;
    }

    const printContent = cvDocument.cloneNode(true);

    printWindow.document.write(`
      <html>
        <head>
          <title>CV Download</title>
          <meta charset="UTF-8" />
        </head>
        <body class="cv-print-body">
          ${printContent.outerHTML}
        </body>
      </html>
    `);

    Array.from(document.querySelectorAll("style, link[rel='stylesheet']")).forEach((styleNode) => {
      printWindow.document.head.appendChild(styleNode.cloneNode(true));
    });

    printWindow.document.close();
    printWindow.focus();

    setTimeout(() => {
      printWindow.print();
    }, 300);
  };

  const handleToggleMode = () => {
    setIsPreviewMode((prev) => !prev);
  };

  // Personal Details Change Handler
  const handlePersonalChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  // Education Handlers
  const handleEducationChange = (id, field, value) => {
    setEducationList((prevList) =>
      prevList.map((edu) => (edu.id === id ? { ...edu, [field]: value } : edu))
    );
  };

  const handleAddEducation = (id) => {
    const newEdu = {
      id: id || crypto.randomUUID(),
      school: "",
      degree: "",
      startDate: "",
      endDate: "",
      field: "",
    };
    setEducationList((prevList) => [...prevList, newEdu]);
  };

  const handleRemoveEducation = (id) => {
    setEducationList((prevList) => prevList.filter((edu) => edu.id !== id));
  };

  // Experience Handlers
  const handleExperienceChange = (id, field, value) => {
    setExperienceList((prevList) =>
      prevList.map((exp) => (exp.id === id ? { ...exp, [field]: value } : exp))
    );
  };

  const handleAddExperience = (id) => {
    const newExp = {
      id: id || crypto.randomUUID(),
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

  // Skills Handlers
  const handleAddSkill = (newSkill) => {
    const trimmed = newSkill.trim();
    if (trimmed && !skillsList.includes(trimmed)) {
      setSkillsList((prev) => [...prev, trimmed]);
    }
  };

  const handleRemoveSkill = (skillToRemove) => {
    setSkillsList((prev) => prev.filter((skill) => skill !== skillToRemove));
  };

  return (
    <>
      <Header
        onClearAll={handleClearAll}
        onLoadExample={handleLoadExample}
        onDownloadCV={handleDownloadCV}
        onToggleMode={handleToggleMode}
        isPreviewMode={isPreviewMode}
      />

      <div className="app-container">
        {!isPreviewMode && (
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
        )}

        <div className={`cv-preview-container ${isPreviewMode ? "preview-mode" : ""}`}>
          <div className="cv-document">
            <CVHeader info={personalInfo} />
            {educationList.length > 0 && <CVEducation education={educationList} />}
            {experienceList.length > 0 && <CVExperience experience={experienceList} />}
            {skillsList.length > 0 && <CVSkills skills={skillsList} />}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
import { useState } from 'react';
import './App.css';
import EducationForm from './components/educationForm';
import ExperienceForm from './components/experienceForm';
import InfoForm from './components/infoForm';
import SkillsForm from './components/skills';
import Resume from './components/resume';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [data, setData] = useState({
    info: [
      {
        name: 'firstName',
        text: '',
      },
      {
        name: 'lastName',
        text: '',
      },
      {
        name: 'city',
        text: '',
      },
      {
        name: 'pinCode',
        text: '',
      },
      {
        name: 'phone',
        text: '',
      },
      {
        name: 'mail',
        text: '',
      },
      {
        name: 'github',
        text: '',
      },
      {
        name: 'linkedIn',
        text: '',
      },
    ],
    educations: [
      {
        id: uuidv4(),
        school: '',
        degree: '',
        fieldOfStudy: '',
        schoolCity: '',
        startDate: '',
        endDate: '',
      },
    ],
    experiences: [
      {
        id: uuidv4(),
        jobTitle: '',
        employer: '',
        startDate: '',
        endDate: '',
        achievements: '',
      },
    ],
    skills: [
      {
        id: uuidv4(),
        skill: '',
      },
    ],
  });

  function handleData(e) {
    setData({
      ...data,
      info: data.info.map((element) => {
        if (element.name === e.target.id) element.text = e.target.value;
        return element;
      }),
    });
  }

  const addEducation = () => {
    setData({
      ...data,
      educations: [
        ...data.educations,
        {
          id: uuidv4(),
          jobTitle: '',
          employer: '',
          startDate: '',
          endDate: '',
          achievements: '',
        },
      ],
    });
  };

  const removeEducation = (id) => {
    setData({
      ...data,
      educations: data.educations.filter((education) => education.id !== id),
    });
  };

  function handleEducation(e, id) {
    setData({
      ...data,
      educations: data.educations.map((education) => {
        if (education.id === id) education[e.target.name] = e.target.value;
        return education;
      }),
    });
  }

  const addExperience = () => {
    setData({
      ...data,
      experiences: [
        ...data.experiences,
        {
          id: uuidv4(),
          jobTitle: '',
          employer: '',
          startDate: '',
          endDate: '',
          achievements: '',
        },
      ],
    });
  };

  const removeExperience = (id) => {
    setData({
      ...data,
      experiences: data.experiences.filter(
        (experience) => experience.id !== id,
      ),
    });
  };

  const handleExperience = (e, id) => {
    setData({
      ...data,
      experiences: data.experiences.map((experience) => {
        if (experience.id === id) experience[e.target.name] = e.target.value;
        return experience;
      }),
    });
  };

  const addSkill = () => {
    setData({ ...data, skills: [...data.skills, { id: uuidv4(), skill: '' }] });
  };

  const removeSkill = (id) => {
    setData({
      ...data,
      skills: data.skills.filter((skill) => skill.id !== id),
    });
  };

  const handleSkill = (e) => {
    setData({
      ...data,
      skills: data.skills.map((skill) => {
        if (skill.id === e.target.id) skill.skill = e.target.value;
        return skill;
      }),
    });
  };

  return (
    <>
      <div className="forms" style={{ padding: '2rem' }}>
        <InfoForm handleData={handleData} />
        <SkillsForm
          data={data}
          addSkill={addSkill}
          removeSkill={removeSkill}
          handleSkill={handleSkill}
        />
        <ExperienceForm
          data={data}
          addExperience={addExperience}
          removeExperience={removeExperience}
          handleExperience={handleExperience}
        />
        <EducationForm
          data={data}
          addEducation={addEducation}
          removeEducation={removeEducation}
          handleEducation={handleEducation}
        />
      </div>
      <div
        style={{
          backgroundColor: '#f4f7f9',
          padding: '2rem 6rem',
          display: 'grid',
          justifyItems: 'center',
        }}
      >
        <Resume data={data} />
      </div>
    </>
  );
}

export default App;

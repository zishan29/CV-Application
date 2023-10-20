import plus from '../assets/plus.svg';
import trash from '../assets/trash-can-outline.svg';

export default function ExperienceForm({
  data,
  addExperience,
  removeExperience,
  handleExperience,
}) {
  return (
    <div className="experienceForm">
      <h2 className="title" style={{ gridColumn: '1 / -1', marginTop: '10px' }}>
        Work History
      </h2>
      {data.experiences.map((experience, index) => (
        <div className="experienceRow" key={experience.id}>
          {data.experiences.length > 1 && (
            <div
              className="subHeading"
              style={{
                display: 'flex',
                alignItems: 'center',
                gridColumn: '1 / -1',
              }}
            >
              <h3>Experience {index + 1}</h3>
              <img
                src={trash}
                className="trash"
                onClick={() => removeExperience(experience.id)}
                style={{
                  height: '25px',
                  marginLeft: 'auto',
                  cursor: 'pointer',
                }}
              />
            </div>
          )}
          <label
            style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}
          >
            Job Title
            <input
              type="text"
              placeholder="e.g. Sales Representative"
              id="jobTitle"
              maxLength={38}
              name="jobTitle"
              value={experience.jobTitle}
              onChange={(e) => handleExperience(e, experience.id)}
            />
          </label>
          <label
            style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}
          >
            Employer
            <input
              type="text"
              placeholder="e.g. Amazon"
              id="employer"
              maxLength={30}
              name="employer"
              value={experience.employer}
              onChange={(e) => handleExperience(e, experience.id)}
            />
          </label>
          <label
            style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}
          >
            Start Date
            <input
              type="text"
              placeholder="Start Date"
              id="startDate"
              maxLength={12}
              name="startDate"
              value={experience.startDate}
              onChange={(e) => handleExperience(e, experience.id)}
            />
          </label>
          <label
            style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}
          >
            End Date
            <input
              type="text"
              placeholder="End Date"
              id="endDate"
              maxLength={12}
              name="endDate"
              value={experience.endDate}
              onChange={(e) => handleExperience(e, experience.id)}
            />
          </label>
          <label
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '5px',
              gridColumn: '1 / -1',
            }}
          >
            Achievements
            <textarea
              placeholder="Describe your achievements and responsibilities here"
              id="achievements"
              rows="8"
              name="achievements"
              value={experience.achievements}
              style={{ resize: 'none' }}
              onChange={(e) => handleExperience(e, experience.id)}
            />
          </label>
        </div>
      ))}
      {data.experiences.length < 6 && (
        <button
          className="Btn"
          onClick={addExperience}
          style={{
            width: 'max-content',
            justifySelf: 'center',
            display: 'flex',
            alignItems: 'center',
            fontSize: '16px',
          }}
        >
          <img src={plus} style={{ height: '25px' }} />
          Add Experience
        </button>
      )}
    </div>
  );
}

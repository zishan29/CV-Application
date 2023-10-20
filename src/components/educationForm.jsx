import plus from '../assets/plus.svg';
import trash from '../assets/trash-can-outline.svg';

export default function EducationForm({
  data,
  addEducation,
  removeEducation,
  handleEducation,
}) {
  return (
    <div className="educationForm">
      <h2 className="title" style={{ gridColumn: '1 / -1', marginTop: '10px' }}>
        Education History
      </h2>
      {data.educations.map((education, index) => (
        <div className="educationRow" key={education.id}>
          {data.educations.length > 1 && (
            <div
              className="subHeading"
              style={{
                display: 'flex',
                alignItems: 'center',
                gridColumn: '1 / -1',
              }}
            >
              <h3>Education {index + 1}</h3>
              <img
                src={trash}
                className="trash"
                onClick={() => removeEducation(education.id)}
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
            School Name
            <input
              type="text"
              placeholder="e.g. University of Washington"
              id="school"
              value={education.school}
              name="school"
              onChange={(e) => handleEducation(e, education.id)}
            />
          </label>
          <label
            style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}
          >
            Degree
            <input
              type="text"
              placeholder="Degree Name"
              id="degree"
              value={education.degree}
              name="degree"
              onChange={(e) => handleEducation(e, education.id)}
            />
          </label>
          <label
            style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}
          >
            Field of Study
            <input
              type="text"
              placeholder="Field of Study"
              id="fieldOfStudy"
              value={education.fieldOfStudy}
              name="fieldOfStudy"
              onChange={(e) => handleEducation(e, education.id)}
            />
          </label>
          <label
            style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}
          >
            City
            <input
              type="text"
              placeholder="e.g. Seattle"
              id="schoolCity"
              value={education.schoolCity}
              name="schoolCity"
              onChange={(e) => handleEducation(e, education.id)}
            />
          </label>
          <label
            style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}
          >
            Start Date
            <input
              type="text"
              id="startDate"
              placeholder="Start Date"
              value={education.startDate}
              name="startDate"
              onChange={(e) => handleEducation(e, education.id)}
            />
          </label>
          <label
            style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}
          >
            End Date
            <input
              type="text"
              id="endDate"
              placeholder="End Date"
              value={education.endDate}
              name="endDate"
              onChange={(e) => handleEducation(e, education.id)}
            />
          </label>
        </div>
      ))}
      {data.educations.length < 2 && (
        <button
          className="Btn"
          onClick={addEducation}
          style={{
            width: 'max-content',
            justifySelf: 'center',
            display: 'flex',
            alignItems: 'center',
            fontSize: '16px',
          }}
        >
          <img src={plus} style={{ height: '25px' }} />
          Add Education
        </button>
      )}
    </div>
  );
}

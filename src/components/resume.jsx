function Resume({ data }) {
  return (
    <>
      <div className="resume">
        <div id="header">
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              paddingTop: '10px',
            }}
          >
            <div
              className="mail"
              style={{ alignSelf: 'flex-start', justifySelf: 'flex-start' }}
            >
              {data.info[5].text}
            </div>
            <div
              className="phone"
              style={{ alignSelf: 'flex-start', justifySelf: 'flex-start' }}
            >
              {data.info[4].text}
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <div className="name">
              {data.info[0].text[0] &&
                data.info[0].text[0].toUpperCase() +
                  data.info[0].text.slice(1)}{' '}
              {data.info[1].text[0] &&
                data.info[1].text[0].toUpperCase() + data.info[1].text.slice(1)}
            </div>
            <div>
              {data.info[2].text}
              {data.info[2].text && data.info[3].text && <span>, </span>}
              {data.info[3].text}
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              paddingTop: '10px',
            }}
          >
            <div style={{ alignSelf: 'flex-end', justifySelf: 'flex-end' }}>
              {data.info[6].text}
            </div>

            <div style={{ alignSelf: 'flex-end', justifySelf: 'flex-end' }}>
              {data.info[7].text}
            </div>
          </div>
        </div>
        <div
          className="title"
          style={{
            borderBottom: '1px solid black',
            fontWeight: 'bold',
            margin: '10px 0',
          }}
        >
          Skills
        </div>
        <div className="skills">
          <ul>
            {data.skills.map((element) => (
              <li style={{ marginLeft: '20px' }} key={element.id}>
                {element.skill}
              </li>
            ))}
          </ul>
        </div>
        <div
          className="title"
          style={{
            borderBottom: '1px solid black',
            fontWeight: 'bold',
            marginTop: '10px',
          }}
        >
          Experience
        </div>
        <div className="experience">
          {data.experiences.map((element) => (
            <div className="experienceContainer" key={element.id}>
              <div className="jobTitle">{element.jobTitle}</div>
              <div className="date" style={{ justifySelf: 'flex-end' }}>
                {element.startDate}{' '}
                {element.startDate && element.endDate && <span> – </span>}{' '}
                {element.endDate}
              </div>
              <div className="employer">{element.employer}</div>
              <div
                className="achievements"
                style={{ gridColumn: '1 / -1', wordWrap: 'break-word' }}
              >
                {element.achievements}
              </div>
            </div>
          ))}
        </div>
        <div
          className="title"
          style={{
            borderBottom: '1px solid black',
            fontWeight: 'bold',
            marginTop: '10px',
          }}
        >
          Education
        </div>
        <div className="education">
          {data.educations.map((element) => (
            <div className="educationContainer" key={element.id}>
              <div className="degree">
                {element.degree}{' '}
                {element.degree && element.fieldOfStudy && <span> – </span>}{' '}
                {element.fieldOfStudy}
              </div>
              <div className="date" style={{ justifySelf: 'flex-end' }}>
                {element.startDate}{' '}
                {element.startDate && element.endDate && <span> – </span>}{' '}
                {element.endDate}
              </div>
              <div className="school">
                {element.school}
                {element.school && element.schoolCity && <span>, </span>}{' '}
                {element.schoolCity}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Resume;

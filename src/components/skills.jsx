import plus from '../assets/plus.svg';
import trash from '../assets/trash-can-outline.svg';

export default function SkillsForm({
  data,
  addSkill,
  removeSkill,
  handleSkill,
}) {
  return (
    <div className="skillsSection">
      <h2 className="title" style={{ gridColumn: '1 / -1', marginTop: '10px' }}>
        Skills
      </h2>
      {data.skills.map((skill) => (
        <div
          className="skillRow"
          key={skill.id}
          style={{ display: 'flex', alignItems: 'center' }}
        >
          <input
            id={skill.id}
            type="text"
            placeholder="Language or Technology"
            value={skill.skill}
            style={{ flex: '1' }}
            onChange={handleSkill}
          />
          {data.skills.length > 1 && (
            <img
              src={trash}
              className="trash"
              onClick={() => removeSkill(skill.id)}
              style={{
                height: '25px',
                marginLeft: 'auto',
                cursor: 'pointer',
              }}
            />
          )}
        </div>
      ))}
      {data.skills.length < 12 && (
        <button
          className="Btn"
          onClick={addSkill}
          style={{
            width: 'max-content',
            justifySelf: 'center',
            display: 'flex',
            alignItems: 'center',
            fontSize: '16px',
          }}
        >
          <img src={plus} style={{ height: '25px' }} />
          Add Skills
        </button>
      )}
    </div>
  );
}

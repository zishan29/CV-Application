export default function InfoForm({ handleData }) {
  return (
    <>
      <form className="infoForm">
        <h2
          className="title"
          style={{
            gridColumn: '1 / -1',
            marginTop: '10px',
          }}
        >
          Personal Info
        </h2>
        <label style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
          First Name
          <input
            type="text"
            id="firstName"
            placeholder="e.g. Jane"
            onChange={handleData}
            required
          />
        </label>
        <label style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
          Last Name
          <input
            type="text"
            id="lastName"
            placeholder="e.g. Smith"
            onChange={handleData}
            required
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
          Email Address
          <input
            type="mail"
            id="mail"
            placeholder="e.g. jane@example.com"
            onChange={handleData}
            required
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
          City
          <input
            type="text"
            id="city"
            placeholder="e.g. Seattle"
            onChange={handleData}
            required
          />
        </label>
        <label style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
          ZIP / Postal Code
          <input
            type="text"
            id="pinCode"
            placeholder="e.g. 12313"
            onChange={handleData}
          />
        </label>
        <label style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
          Phone Number
          <input
            type="text"
            id="phone"
            placeholder="e.g. (123) 456-7890"
            onChange={handleData}
            required
          />
        </label>
        <label style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
          Github
          <input
            type="text"
            id="github"
            placeholder="Github"
            onChange={handleData}
          />
        </label>
        <label style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
          LinkedIn
          <input
            type="text"
            id="linkedIn"
            placeholder="LinkedIn"
            onChange={handleData}
          />
        </label>
      </form>
    </>
  );
}

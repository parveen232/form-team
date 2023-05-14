import "../styles/Cards.css";

export default function Cards({ data, teamData, setTeamData }) {
  return (
    <ul className="users-container">
      {data.map((user) => (
        <li key={user.id} className="card">
          <div className="user-avatar">
            <img src={user.avatar} alt="avatar" />
          </div>
          <div className="user-info">
            <span className="name">
              {user.first_name} {user.last_name}
            </span>
            <span className="email">Email: {user.email}</span>
            <span className="domain">Domain: {user.domain}</span>
            <span className="gender">Gender: {user.gender}</span>
            <span className="available">
              Available: {user.available.toString()}
            </span>
            {user.available == true ? (
              <button
                className="add-btn"
                onClick={() => {
                  if (teamData.length == 0) {
                    setTeamData([user]);
                  } else {
                    if (user.domain == teamData[0].domain) {
                      setTeamData((item) => [...item, user]);
                    } else {
                      alert(`choose unique -> ${teamData[0].domain}`);
                    }
                  }
                }}
              >
                Add
              </button>
            ) : (
              <div></div>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}

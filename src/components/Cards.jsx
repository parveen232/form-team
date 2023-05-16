import "../styles/Cards.css";

export default function Cards({ data, teamData, setTeamData }) {
  function handleOnClick(user) {
    if (teamData.length === 0) {
      setTeamData([user]);
    } else if (teamData.includes(user)) {
      alert(`already added`);
      return;
    } else if (user.domain !== teamData[0].domain) {
      alert(`choose unique -> ${teamData[0].domain}`);
      return;
    } else {
      setTeamData([...teamData, user]);
    }
  }

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
              <button className="add-btn" onClick={() => handleOnClick(user)}>
                {teamData.includes(user) ? "Added" : "Add"}
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

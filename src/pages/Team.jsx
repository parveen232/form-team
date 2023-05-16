import { Link } from "react-router-dom";

export default function Team({ teamData, setTeamData }) {
  console.log(teamData);
  return (
    <>
      {teamData.length > 0 ? (
        <div>
          <h2>{teamData[0].domain} Team</h2>
          <ul className="users-container">
            {teamData.map((user) => (
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
                  <button
                    className="remove-btn"
                    onClick={() => {
                      const arr = [...teamData];
                      arr.splice(arr.indexOf(user), 1);
                      setTeamData(arr);
                    }}
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <Link to="/">Make Your Team</Link>
      )}
    </>
  );
}

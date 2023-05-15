import { Link } from "react-router-dom";
import Users from "../components/Users";

export default function Home({ teamData, setTeamData }) {
  return (
    <div className="home-container">
      <div className="team-link">
        <Link to="/team" className="btn team-btn">
          Your Team
        </Link>
        <span className="team-size">{teamData.length}</span>
      </div>
      <Users teamData={teamData} setTeamData={setTeamData} />
    </div>
  );
}

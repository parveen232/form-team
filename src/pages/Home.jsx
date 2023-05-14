import { Link } from "react-router-dom";
import Users from "../components/Users";

export default function Home({ teamData, setTeamData }) {
  return (
    <div className="home-container">
      <Link to="/team" className="btn team-btn">
        Your Team
      </Link>
      <Users teamData={teamData} setTeamData={setTeamData} />
    </div>
  );
}

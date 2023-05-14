import { Link } from "react-router-dom";
import Users from "../components/Users";

export default function Home() {
  return (
    <div className="home-container">
      <Link to="/team" className="btn team-btn">
        Your Team
      </Link>
      <Users />
    </div>
  );
}

import { Link } from "react-router-dom";
import Cards from "../components/Cards";

export default function Team({ teamData }) {
  return (
    <>
      {teamData.length > 0 ? (
        <div>
          <h2>{teamData[0].domain} Team</h2>
          <Cards data={teamData} />
        </div>
      ) : (
        <Link to="/">Make Your Team</Link>
      )}
    </>
  );
}

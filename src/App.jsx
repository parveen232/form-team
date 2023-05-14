import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Team from "./pages/Team";
import { Link } from "react-router-dom";
import { useState } from "react";

function App() {
  const [teamData, setTeamData] = useState([]);
  console.log(teamData);
  return (
    <div>
      <Link to="/" className="logo">
        FORMTEAM APP
      </Link>
      <Routes>
        <Route
          path="/"
          element={<Home teamData={teamData} setTeamData={setTeamData} />}
        />
        <Route path="/team" element={<Team teamData={teamData} />} />
      </Routes>
    </div>
  );
}

export default App;

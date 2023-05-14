import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Team from "./pages/Team";
import { Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Link to="/" className="logo">
        FORMTEAM APP
      </Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </div>
  );
}

export default App;

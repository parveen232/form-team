import Users from "./Users";
import "./App.css";
import { useState } from "react";

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <div>
      <h1>FORMTEAM APP</h1>
      <Users currentPage={currentPage} />
      <div className="pagination">
        <button
          className="btn"
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage == 1}
        >
          Previous
        </button>
        <button className="btn">You are on Page {currentPage}</button>
        <button className="btn" onClick={() => setCurrentPage(currentPage + 1)}>
          Next
        </button>
      </div>
    </div>
  );
}

export default App;

import { useState, useEffect } from "react";
import "./Users.css";

export default function Users({ currentPage }) {
  const [total, setTotal] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData(currentPage) {
      const res = await fetch("mockdata.json");
      const resdata = await res.json();
      const currentPageData = await resdata.slice(
        20 * (currentPage - 1),
        20 * currentPage
      );
      setTotal(resdata.length);
      setData(currentPageData);
    }

    getData(currentPage);
  }, []);

  function liveSearch() {
    const allNames = document.querySelectorAll(".name");
    let searchQuery = document.querySelector("#search").value;
    for (let name of allNames) {
      if (name.innerHTML.toLowerCase().includes(searchQuery.toLowerCase())) {
        name.parentElement.parentElement.classList.remove("hide");
      } else {
        name.parentElement.parentElement.classList.add("hide");
      }
    }
  }

  return (
    <div>
      <form action="">
        <label htmlFor="search">Search by Name:</label>
        <input
          type="text"
          name="search"
          id="search"
          onChange={() => liveSearch()}
        />
      </form>
      <span className="total">Total: {total}</span>
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
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

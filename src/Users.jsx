import { useState, useEffect } from "react";
import "./Users.css";

export default function Cards() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  });

  async function getData() {
    const res = await fetch("mockdata.json");
    const resdata = await res.json();
    setData(resdata);
  }

  return (
    <div>
      <span className="total">Total: {data.length}</span>
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

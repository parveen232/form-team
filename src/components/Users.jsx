import { useState, useEffect } from "react";
import "../styles/Users.css";
import usersData from "../data/mockdata.json";
import Cards from "./Cards";
import fetchDomainList from "../fetchDomainList";
import fetchGenderList from "../fetchGenderList";
import Search from "./Search";
import Pagination from "./Pagination";

export default function Users({ teamData, setTeamData }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [disableNext, setDisableNext] = useState(false);
  const [total, setTotal] = useState(usersData.length);
  const [data, setData] = useState(usersData);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    function pagination(data, currentPage) {
      const currentPageData = data.slice(
        20 * (currentPage - 1),
        20 * currentPage
      );
      setData(currentPageData);

      if (currentPageData.length < 20 && data.length >= 0) {
        setDisableNext(true);
      } else {
        setDisableNext(false);
      }
    }

    if (searchValue !== "") {
      const searchingData = [];
      for (let user of usersData) {
        const name = `${user.first_name} ${user.last_name}`;
        if (name.toLowerCase().includes(searchValue.toLowerCase())) {
          searchingData.push(user);
        }
      }
      setTotal(searchingData.length);
      pagination(searchingData, currentPage);
    } else {
      setTotal(usersData.length);
      pagination(usersData, currentPage);
    }
  }, [currentPage, searchValue]);

  const domains = fetchDomainList(usersData);
  const genders = fetchGenderList(usersData);

  return (
    <div>
      <Search setSearchValue={setSearchValue} setCurrentPage={setCurrentPage} />
      <div className="filter">
        <span className="filter-text">Filter:</span>
        <form
          action=""
          onSubmit={(e) => e.preventDefault()}
          className="filter-form"
        >
          <div className="filter-domain">
            <label htmlFor="domain">Domain:</label>
            <select name="domain" id="domain" onChange={() => liveFilterFun()}>
              <option value=""></option>
              {domains.map((domain) => (
                <option key={domain} value={domain}>
                  {domain}
                </option>
              ))}
            </select>
          </div>
          <div className="filter-gender">
            <label htmlFor="gender">Gender:</label>
            <select name="gender" id="gender">
              <option value=""></option>
              {genders.map((gender) => (
                <option key={gender} value={gender}>
                  {gender}
                </option>
              ))}
            </select>
          </div>
          <div className="filter-availability">
            <label htmlFor="availability">Availability:</label>
            <select name="availability" id="availability">
              <option value=""></option>
              <option value="male">Available</option>
              <option value="female">Not Available</option>
            </select>
          </div>
        </form>
      </div>
      <span className="total">Total: {total}</span>
      <Cards data={data} teamData={teamData} setTeamData={setTeamData} />
      <Pagination
        currentPage={currentPage}
        disableNext={disableNext}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

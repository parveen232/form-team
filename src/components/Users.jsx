import { useState, useEffect } from "react";
import "../styles/Users.css";
import usersData from "../data/mockdata.json";
import Cards from "./Cards";
import fetchDomainList from "../fetchDomainList";
import fetchGenderList from "../fetchGenderList";

export default function Users() {
  const [currentPage, setCurrentPage] = useState(1);
  const [disableNext, setDisableNext] = useState(false);
  const [total, setTotal] = useState(0);
  const [data, setData] = useState(usersData);
  const [searchData, setSearchData] = useState([]);
  const [liveSearch, setLiveSearch] = useState(false);

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

    if (liveSearch) {
      pagination(searchData, currentPage);
    } else {
      pagination(usersData, currentPage);
    }
  }, [searchData, liveSearch, currentPage]);

  function liveSearchFun() {
    setCurrentPage(1);
    const searchingData = [];
    let searchQuery = document.querySelector("#search").value;
    for (let user of usersData) {
      const name = `${user.first_name} ${user.last_name}`;
      if (name.toLowerCase().includes(searchQuery.toLowerCase())) {
        searchingData.push(user);
      }
    }
    setTotal(searchingData.length);
    setSearchData(searchingData);
    setLiveSearch(true);
  }

  function liveFilterFun() {
    console.log("selected");
  }

  const domains = fetchDomainList(usersData);
  const genders = fetchGenderList(usersData);

  return (
    <div>
      <form action="" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="search" id="search-label">
          Search by Name:
        </label>
        <input
          type="text"
          name="search"
          id="search"
          onChange={() => liveSearchFun()}
        />
      </form>
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
      <Cards data={data} />
      <div className="pagination">
        <button
          className="btn"
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage == 1}
        >
          Previous
        </button>
        <button className="btn">You are on Page {currentPage}</button>
        <button
          className="btn"
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={disableNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}

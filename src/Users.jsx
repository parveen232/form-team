import { useState, useEffect } from "react";
import "./Users.css";
import Cards from "./Cards";

export default function Users({ currentPage, setCurrentPage, setDisableNext }) {
  const [initialData, setInitialData] = useState([]);
  const [total, setTotal] = useState(0);
  const [data, setData] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [liveSearch, setLiveSearch] = useState(false);

  useEffect(() => {
    async function getData() {
      const res = await fetch("mockdata.json");
      const resData = await res.json();
      const currentPageData = await resData.slice(
        20 * (currentPage - 1),
        20 * currentPage
      );
      setDisableNext(false)
      setInitialData(resData);
      setTotal(resData.length);
      setData(currentPageData);
    }
    getData();
  }, []);

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
      pagination(initialData, currentPage);
    }
  }, [searchData, liveSearch, currentPage]);

  function liveSearchFun() {
    setCurrentPage(1);
    const searchingData = [];
    let searchQuery = document.querySelector("#search").value;
    for (let user of initialData) {
      const name = `${user.first_name} ${user.last_name}`;
      if (name.toLowerCase().includes(searchQuery.toLowerCase())) {
        searchingData.push(user);
      }
    }
    setTotal(searchingData.length);
    setSearchData(searchingData);
    setLiveSearch(true);
  }

  return (
    <div>
      <form action="">
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
      <span className="total">Total: {total}</span>
      <Cards data={data} />
    </div>
  );
}

import { useState, useEffect } from "react";
import "../styles/Users.css";
import usersData from "../data/mockdata.json";
import Cards from "./Cards";
import Search from "./Search";
import Pagination from "./Pagination";
import Filter from "./Filter";

export default function Users({ teamData, setTeamData }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [disableNext, setDisableNext] = useState(false);
  const [total, setTotal] = useState(usersData.length);
  const [data, setData] = useState(usersData);
  const [searchValue, setSearchValue] = useState("");
  const [filterData, setFilterData] = useState([]);
  console.log(filterData);

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
    } else if (filterData.length > 0) {
      setTotal(filterData.length);
      pagination(filterData, currentPage);
    } else {
      setTotal(usersData.length);
      pagination(usersData, currentPage);
    }
  }, [currentPage, searchValue, filterData]);

  return (
    <div>
      <Search setSearchValue={setSearchValue} setCurrentPage={setCurrentPage} />
      <Filter setFilterData={setFilterData} setCurrentPage={setCurrentPage} />
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

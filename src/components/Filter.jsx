import { useState } from "react";
import usersData from "../data/mockdata.json";
import fetchDomainList from "../fetchDomainList";
import fetchGenderList from "../fetchGenderList";
const domains = fetchDomainList(usersData);
const genders = fetchGenderList(usersData);

export default function Filter({ setFilterData, setCurrentPage }) {
  const [domainVal, setDomainVal] = useState("all");
  const [genderVal, setGenderVal] = useState("all");
  const [availabilityVal, setAvailabilityVal] = useState("all");
  const [finalVal, setFinalVal] = useState([]);

  function liveFilterFun(value, filterType) {
    setCurrentPage(1);
    let finalFilterVal = [];
    const filteredData = [];
    if (filterType === "domain") {
      setDomainVal(value);
      finalFilterVal = [value, genderVal, availabilityVal];
    } else if (filterType === "gender") {
      setGenderVal(value);
      finalFilterVal = [domainVal, value, availabilityVal];
    } else {
      if (value !== "all") {
        value = JSON.parse(value);
      }
      setAvailabilityVal(value);
      finalFilterVal = [domainVal, genderVal, value];
    }

    setFinalVal(finalFilterVal);

    for (let user of usersData) {
      if (
        (finalFilterVal[0] === user.domain || finalFilterVal[0] === "all") &&
        (finalFilterVal[1] === user.gender || finalFilterVal[1] === "all") &&
        (finalFilterVal[2] === user.available || finalFilterVal[2] === "all")
      ) {
        filteredData.push(user);
      }
    }
    setFilterData(filteredData);
  }

  console.log(finalVal);

  return (
    <div className="filter">
      <span className="filter-text">Filter:</span>
      <form
        action=""
        onSubmit={(e) => e.preventDefault()}
        className="filter-form"
      >
        <div className="filter-domain">
          <label htmlFor="domain">Domain:</label>
          <select
            name="domain"
            id="domain"
            onChange={(e) => liveFilterFun(e.target.value, "domain")}
          >
            <option value="all">All</option>
            {domains.map((domain) => (
              <option key={domain} value={domain}>
                {domain}
              </option>
            ))}
          </select>
        </div>
        <div className="filter-gender">
          <label htmlFor="gender">Gender:</label>
          <select
            name="gender"
            id="gender"
            onChange={(e) => liveFilterFun(e.target.value, "gender")}
          >
            <option value="all">All</option>
            {genders.map((gender) => (
              <option key={gender} value={gender}>
                {gender}
              </option>
            ))}
          </select>
        </div>
        <div className="filter-availability">
          <label htmlFor="availability">Availability:</label>
          <select
            name="availability"
            id="availability"
            onChange={(e) => liveFilterFun(e.target.value, "availability")}
          >
            <option value="all">All</option>
            <option value={true}>Available</option>
            <option value={false}>Not Available</option>
          </select>
        </div>
      </form>
    </div>
  );
}

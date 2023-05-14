export default function Filter({ domains }) {
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
          <select name="domain" id="domain">
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
            <option value="male">Male</option>
            <option value="female">Female</option>
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
  );
}

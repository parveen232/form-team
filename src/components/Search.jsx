export default function Search({ setSearchValue, setCurrentPage }) {
  return (
    <form action="" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="search" id="search-label">
        Search by Name:
      </label>
      <input
        type="text"
        name="search"
        id="search"
        onChange={(e) => {
          setSearchValue(e.target.value);
          setCurrentPage(1);
        }}
      />
    </form>
  );
}

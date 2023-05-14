export default function Pagination({
  currentPage,
  disableNext,
  setCurrentPage,
}) {
  return (
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
  );
}

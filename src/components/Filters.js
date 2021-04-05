export default function Filters({ setFilter }) {
  function handleAllFilterClick() {
    setFilter("");
  }
  function handleDoneFilterClick() {
    setFilter("Done");
  }
  function handlePendingFilterClick() {
    setFilter("Pending");
  }

  return (
    <div className="footer">
      <button className="footerButton btn1" onClick={handleAllFilterClick}>
        All
      </button>
      <button className="footerButton btn2" onClick={handleDoneFilterClick}>
        Done
      </button>
      <button className="footerButton btn3" onClick={handlePendingFilterClick}>
        Pending
      </button>
    </div>
  );
}

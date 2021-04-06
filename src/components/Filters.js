export default function Filters({ setFilter, setToDos }) {
  function handleAllFilterClick() {
    setFilter("");
  }
  function handleDoneFilterClick() {
    setFilter("Done");
  }
  function handlePendingFilterClick() {
    setFilter("Pending");
  }
  function handleClearList() {
    const confirmation = window.confirm(
      "Do you really want to delete your TODO-LIST?"
    );
    if (confirmation === true) {
      setToDos([]);
    }
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
      <button className="footerButton btn4" onClick={handleClearList}>
        Delete All
      </button>
    </div>
  );
}

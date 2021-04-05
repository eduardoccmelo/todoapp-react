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
    <div>
      <button onClick={handleAllFilterClick}>All</button>
      <button onClick={handleDoneFilterClick}>Done</button>
      <button onClick={handlePendingFilterClick}>Pending</button>
    </div>
  );
}

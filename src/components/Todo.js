export default function ToDo({
  name,
  status,
  onClickEdit,
  onClickToDoRemove,
  onClickPendingToggle,
}) {
  return (
    <li className="toDo">
      <button className="delete" onClick={() => onClickToDoRemove(name)}>
        <i className="far fa-trash-alt"></i>
      </button>
      <button className="edit" onClick={() => onClickEdit(name)}>
        <i className="fas fa-pencil-alt"></i>
      </button>
      <span>{name.toUpperCase()}</span>
      <button
        className={status === "Pending" ? "statusPending" : "statusDone"}
        onClick={() => onClickPendingToggle(name)}
      >
        {status}
      </button>
    </li>
  );
}

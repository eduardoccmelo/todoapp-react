import "./App.css";
import { useState } from "react";
import Filters from "./components/Filters";

function App() {
  const [toDos, setToDos] = useState([]);

  function renderToDos() {
    const allToDos = toDos.map((toDoName) => {
      return (
        <ToDo
          name={toDoName.todo}
          key={toDoName.todo}
          status={toDoName.status}
          onClickEdit={handleEdit}
          onClickToDoRemove={handleToDoRemove}
          onClickPendingToggle={handlePendingButton}
        />
      );
    });
    return allToDos;
  }
  return (
    <div className="App">
      <h1>ToDo List</h1>
      <Content />
      <Filters />
    </div>
  );

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const input = form.toDoName;
    const newTodos = [...toDos, { todo: input.value, status: "Pending" }];
    setToDos(newTodos);
  }

  function handleToDoRemove(toDoName) {
    const newTodos = toDos.filter((toDo) => {
      return toDo.todo !== toDoName;
    });
    setToDos(newTodos);
  }

  function handlePendingButton(toDoName) {
    const changeToDoStatus = toDos.map((toDo) => {
      if (toDoName === toDo.todo) {
        if (toDo.status === "Pending") {
          toDo.status = "Done";
        } else {
          toDo.status = "Pending";
        }
      }
      return toDo;
    });
    setToDos(changeToDoStatus);
  }

  function handleEdit(toDoName) {
    const value = prompt("Edit yout ToDo");
    const changeToDoName = toDos.map((toDo) => {
      if (toDoName === toDo.todo) {
        toDo.todo = value;
      }
      return toDo;
    });
    setToDos(changeToDoName);
  }

  function Content() {
    return (
      <div>
        <header>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="toDoName"
              placeholder="Type a task"
              required
            ></input>
            <button className="add" type="submit">
              Add
            </button>
          </form>
        </header>
        <main>
          <ul>{renderToDos()}</ul>
        </main>
      </div>
    );
  }

  function ToDo({
    name,
    status,
    onClickEdit,
    onClickToDoRemove,
    onClickPendingToggle,
  }) {
    return (
      <li className="toDo">
        <button className="delete" onClick={() => onClickToDoRemove(name)}>
          x
        </button>
        <span onClick={() => onClickEdit(name)}>{name}</span>
        <button
          className="statusButton"
          onClick={() => onClickPendingToggle(name)}
        >
          {status}
        </button>
      </li>
    );
  }
}

export default App;

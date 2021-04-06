import "./App.css";
import { useState } from "react";
import Filters from "./components/Filters";
import ToDo from "./components/Todo";

function App() {
  const [toDos, setToDos] = useState([]);
  const [filter, setFilter] = useState("");

  let filterToDos;

  if (filter === "Done") {
    filterToDos = toDos.filter((toDoName) => toDoName.status === "Done");
  } else if (filter === "Pending") {
    filterToDos = toDos.filter((toDoName) => toDoName.status === "Pending");
  } else {
    filterToDos = toDos;
  }

  function renderToDos() {
    const allToDos = filterToDos.map((toDoName) => {
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
      <h1>TODO-LIST</h1>
      <Content />
      <Filters setToDos={setToDos} setFilter={setFilter} filter={filter} />
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
    const value = prompt("Edit your todo", toDoName);
    const changeToDoName = toDos.map((toDo) => {
      if (toDoName === toDo.todo && !value) {
        toDo.todo = toDoName;
      } else if (toDoName === toDo.todo) {
        toDo.todo = value;
      }
      return toDo;
    });
    setToDos(changeToDoName);
  }

  function Content() {
    return (
      <div className="content">
        <header className="header">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="toDoName"
              placeholder=" Type a todo"
              maxLength="14"
              required
            ></input>
            <button className="add" type="submit">
              <i className="fas fa-plus"></i>
            </button>
          </form>
        </header>
        <main className="main">
          <ul>{renderToDos()}</ul>
        </main>
      </div>
    );
  }
}

export default App;

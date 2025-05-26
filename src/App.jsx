import { useState } from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [list, setList] = useState([]);

  function createTodo(event) {
    setTodo(event.target.value);
  }

  function addTodo(event) {
    event.preventDefault();
    if (todo.trim() !== "") {
      setList([...list, todo]);
      setTodo("");
    }
  }

  function editTodo(id) {
    const editedTodo = list.find((index) => index === id);
    setTodo(editedTodo);
  }

  return (
    <>
      <div className="title">
        <h1>Todo List</h1>
      </div>

      <div className="add-title">
        <h3>ADD TASK</h3>
      </div>

      <div className="todoapp">
        <form onSubmit={addTodo}>
          <input type="text" value={todo} onChange={createTodo} placeholder="New Task" />
        </form>
        <ul>
          {list.map((item, index) => (
            <li key={index}>
              {item}
              <button onClick={() => editTodo(index)}>Edit</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
export default App;

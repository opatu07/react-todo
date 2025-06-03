import { useState, useEffect } from "react";
import { INIT_TODO_LIST, INIT_UNIQUE_ID } from "./dummy/initial-data";

function App() {
  const [list, setList] = useState(INIT_TODO_LIST);
  const [originalList, setOriginalList] = useState(INIT_TODO_LIST);
  const [counter, setCounter] = useState(INIT_UNIQUE_ID);
  const [todo, setTodo] = useState({ id: counter, title: "" });
  const [searchTerm, setSearchTerm] = useState("");

  function createTodo(event) {
    setTodo({ ...todo, id: counter, title: event.target.value });
  }

  function addTodo(event) {
    event.preventDefault();
    if (todo.title.trim() !== "") {
      const newCounter = counter + 1;
      const newTodo = { ...todo, id: newCounter, isEditing: false };
      setList([...list, newTodo]);
      setOriginalList([...originalList, newTodo]);
      setCounter(newCounter);
    }
    setTodo({ id: "", title: "" });
  }

  useEffect(() => {
    console.log("Updated list:", JSON.stringify(list, null, 2));
    console.log("Updated originalList:", JSON.stringify(originalList, null, 2));
  }, [list, originalList]);

  function editTodo(id, newTitle) {
    const editedTodo = list.map((item) => {
      if (id === item.id) {
        return { ...item, title: newTitle, isEditing: false }; // 新しいタイトルと編集終了状態を保存
      }
      return item;
    });
    setList(editedTodo);
  }

  function toggleEdit(id) {
    const updatedList = list.map((item) => {
      if (id === item.id) {
        return { ...item, isEditing: !item.isEditing }; // 編集状態を切り替え
      }
      return item;
    });
    setList(updatedList);
  }

  function deleteTodo(id) {
    const remainingTasks = list.filter((item) => id !== item.id);
    setList(remainingTasks);
  }

  function searchList(searchTerm) {
    setSearchTerm(searchTerm);
    const filteredList = originalList.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setList(filteredList);
  }

  return (
    <>
      <div className="title">
        <h1>TodoList</h1>
      </div>

      <div className="todoapp">
        <form onSubmit={addTodo}>
          <input
            type="text"
            value={todo.title}
            onChange={createTodo}
            placeholder="newTask"
          />
        </form>
        <input
          type="text"
          placeholder="search"
          value={searchTerm}
          onChange={(e) => searchList(e.target.value)}
        />
        <ul>
          {list.map((item) => (
            <li key={item.id}>
              {item.isEditing ? (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    editTodo(item.id, item.title);
                  }}
                >
                  <input
                    className="edit-input"
                    type="text"
                    value={item.title}
                    onChange={(e) =>
                      setList(
                        list.map((task) =>
                          task.id === item.id
                            ? { ...task, title: e.target.value }
                            : task
                        )
                      )
                    }
                  />
                  <div className="button-wrapper">
                    <button type="submit">store</button>
                    <button onClick={() => toggleEdit(item.id)}>cancel</button>
                  </div>
                </form>
              ) : (
                <>
                  {item.title}
                  <button onClick={() => toggleEdit(item.id)}>edit</button>
                  <button onClick={() => deleteTodo(item.id)}>delete</button>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;

import { useState } from "react";
import { INIT_TODO_LIST, INIT_UNIQUE_ID } from "./dummy/initial-data.js"
import Template from "./components/Templates/template.jsx"

function App() {
  const [list, setList] = useState(INIT_TODO_LIST);
  const [originalList, setOriginalList] = useState(INIT_TODO_LIST);
  const [counter, setCounter] = useState(INIT_UNIQUE_ID);
  const [todo, setTodo] = useState({ id: counter, title: "" });
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <div className="template">
        <Template
          todo={todo}
          setTodo={setTodo}
          id={counter}
          list={list}
          setList={setList}
          originalList={originalList}
          setOriginalList={setOriginalList}
          counter={counter}
          setCounter={setCounter}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
      </div>
    </>
  )

}

export default App;

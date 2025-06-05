import Header from "../Organisms/Header.jsx";
import TodoList from "../Organisms/TodoList.jsx";

export default function Template({todo,
    setTodo, id, list, setList, originalList, setOriginalList
    , counter
    , setCounter
    , searchTerm
, setSearchTerm}) {
    return (
        <div className="todoapp">
            <Header
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
            <TodoList
                list={list}
                setList={setList}
            />
        </div>
    )
}


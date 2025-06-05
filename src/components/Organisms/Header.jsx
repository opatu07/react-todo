import AddForm from "../Molecules/AddForm";
import SearchInput from "../Atoms/SearchInput";
import Title from "../Atoms/Title";

export default function Header({ todo, setTodo, counter, list, setList, originalList, setOriginalList, setCounter, searchTerm, setSearchTerm }) {
    console.log("counter", counter)
    return (
        <div className="header">
            <Title />
            <AddForm
                todo={todo}
                setTodo={setTodo}
                counter={counter}
                setList={setList}
                setOriginalList={setOriginalList}
                setCounter={setCounter}
                originalList={originalList}
                list={list}
            />
            <SearchInput
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                originalList={originalList}
                setList={setList}
            />
        </div>
    )
}


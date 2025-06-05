import AddInput from "../Atoms/AddInput";
import { useEffect } from "react";

export default function AddForm({ counter, todo, setList, setOriginalList, setCounter, setTodo, originalList, list }) {

    function addTodo(event) {
        event.preventDefault();
        if (todo.title.trim() !== "") {
            const newCounter = counter + 1;
            console.log("counter: ", counter);
            const newTodo = { ...todo, id: newCounter, isEditing: false };
            setList([...list, newTodo]);
            setOriginalList([...originalList, newTodo]);
            setCounter(newCounter);
        }
        setTodo({ id: "", title: "" });
    }

    useEffect(() => {
        console.log("UpdatedList:", JSON.stringify(list, null, 2));
    }, [list]);

    return (
        <form onSubmit={(e) => { addTodo(e) }}>
            <AddInput
                todo={todo}
                setTodo={setTodo}
                id={counter}
            />
        </form>
    )
}


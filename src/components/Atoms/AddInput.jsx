export default function AddInput({id,todo,setTodo}) {

    function createTodo(event,todo,id) {
        setTodo({ ...todo, id: id, title: event.target.value });
    }

    return (
        <input
        type="text"
        value={todo.title}
        onChange={(e) => createTodo(e,todo,id)}
        placeholder="newTask"
      />
    )
}


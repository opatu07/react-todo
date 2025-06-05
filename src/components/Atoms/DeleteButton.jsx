export default function DeleteButton({itemId,list,setList,name}) {
    function deleteTodo({itemId}) {
        const remainingTasks = list.filter((item) => itemId !== item.id);
        setList(remainingTasks);
    }

    return (
        <button onClick={() => deleteTodo(itemId)}>{name}</button>
    )
}


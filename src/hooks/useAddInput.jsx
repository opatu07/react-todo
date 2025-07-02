export default function useAddInput({id, e, todo, setTodo}) {
    setTodo({ ...todo, id: id, title: e.target.value });
    console.log("e:",e);
}

export default function EditInput({className, type, value, list, setList, itemId}) {
    function editInput(e, list, setList, itemId) {
        const editedList = list.map((item) => {
            if (itemId === item.id) {
                return { ...item, title: e.target.value };
            }
            return item;
        })
        setList(editedList);
    }
    return (
        <input
            className={className}
            type={type}
            value={value}
            onChange={(e) => editInput(e,list,setList,itemId)}
        />
    )
}

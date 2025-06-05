export default function EditButton({itemId,list,setList}) {
    function toggleEdit(itemId) {
        const updatedList = list.map((item) => {
          console.log(item.id);
          if (itemId === item.id) {
            return { ...item, isEditing: !item.isEditing }; // 編集状態を切り替え
          }
          return item;
        });
        setList(updatedList);
    }

    return (
        <button onClick={() => toggleEdit(itemId)}>edit</button>
    )
}


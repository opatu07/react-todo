import StoreButton from "../Atoms/StoreButton";
import DeleteButton from "../Atoms/DeleteButton";
import EditInput from "../Atoms/EditInput";

export default function EditForm({ itemId, itemTitle, type, value, list, setList, name }) {

    function editTodo(itemId, newTitle) {
        const editedTodo = list.map((item) => {
            if (itemId === item.id) {
                return { ...item, title: newTitle, isEditing: false }; // 新しいタイトルと編集終了状態を保存
            }
            return item;
        });
        setList(editedTodo);
    }

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                editTodo(itemId, itemTitle);
            }}
        >
            <EditInput
                className="edit-input"
                type={type}
                value={value}
                list={list}
                setList={setList}
                itemId={itemId}
            />
            <div className="button-wrapper">
                <StoreButton />
                <DeleteButton itemId={itemId} list={list} setList={setList} name={name} />
            </div>
        </form>
    )
}


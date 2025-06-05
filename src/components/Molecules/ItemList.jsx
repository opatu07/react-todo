import EditButton from "../Atoms/EditButton";
import DeleteButton from "../Atoms/DeleteButton";

export default function ItemList({ itemId, itemTitle, list, setList, name }) {

    return (
        <div className="item-list">
            {itemTitle}
            <EditButton itemId={itemId} list={list} setList={setList} />
            <DeleteButton itemId={itemId} list={list} setList={setList} name={name} />
        </div>
    )
}


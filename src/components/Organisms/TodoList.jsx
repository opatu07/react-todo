import EditForm from "../Molecules/EditForm";
import ItemList from "../Molecules/ItemList";

export default function TodoList({list, setList}) {
    return (
        <ul>
            {list.map((item) => (
                <li key={item.id}>
                    {item.isEditing ? (
                        <EditForm
                            itemId={item.id}
                            itemTitle={item.title}
                            type="text"
                            value={item.title}
                            list={list}
                            setList={setList}
                            name="cancel"
                        />
                    ) : (
                        <>
                            <ItemList
                                itemId={item.id}
                                itemTitle={item.title}
                                list={list}
                                setList={setList}
                                name="delete"
                            />
                        </>
                    )}
                </li>
            ))}
        </ul>
    )
}


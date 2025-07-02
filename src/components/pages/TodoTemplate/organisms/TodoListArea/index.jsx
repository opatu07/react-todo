import { ActionButton } from '../../../../common/atoms/ActionButton'
import { DeleteButton } from '../../../../common/atoms/DangerButton'

export const TodoListArea = () => {
    return (
        <ul>
            {list.map((item) => (
                <li key={item.id}>
                    {item.isEditing ? (
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                editTodo(item.id, item.title);
                            }}
                        >

                            <div className="button-wrapper">
                                <ActionButton title="edit" />
                                <DeleteButton title="delete" />
                            </div>

                        </form>

                    ) : (
                        <>
                            <div className="item-list">
                                {item.title}
                                <ActionButton title="edit" />
                                <ActionButton title="cancel" />
                            </div>
                        </>
                    )}
                </li>
            ))}
        </ul>
    )
}

import { useContext, useState } from 'react'
import { ActionButton } from '../../../../common/atoms/ActionButton'
import { DangerButton } from '../../../../common/atoms/DangerButton'
import { InputForm } from '../../../../common/atoms/InputForm'
import { TodoContext } from '../../../../../contexts/TodoContext';

export const TodoListArea = () => {
    const { list, editTodo, deleteTodo, toggleEdit, cancelEdit } = useContext(TodoContext);
    const [editingValue, setEditingValue] = useState('');
    // 編集開始時に現在の値をセット
    const handleEditStart = (item) => {
        setEditingValue(item.title);
        toggleEdit(item.id);
    };

    // 編集フォーム送信時の処理
    const handleEditSubmit = (e, itemId) => {
        e.preventDefault();
        if (editingValue.trim()) {
            editTodo(itemId, editingValue.trim());
            setEditingValue('');
        }
    };

    // 編集キャンセル時の処理
    const handleCancel = (itemId) => {
        cancelEdit(itemId);
        setEditingValue('');
    };
    return (
        <ul>
            {list.map((item) => (
                <li key={item.id}>
                    {item.isEditing ? (
                        <form
                            onSubmit={(e) => handleEditSubmit(e, item.id)}
                        >
                            <InputForm
                                type="text"
                                placeholder="編集内容を入力..."
                                value={editingValue}
                                onChange={(e) => setEditingValue(e.target.value)}
                            />
                            <div className="button-wrapper">
                                <ActionButton
                                    title="保存"
                                    type="submit"
                                />
                                <DangerButton
                                    title="キャンセル"
                                    onClick={() => handleCancel(item.id)}
                                />
                            </div>
                        </form>
                    ) : (
                        <>
                            <div className="item-list">
                                <span>{item.title}</span>
                                <ActionButton
                                    title="編集"
                                    onClick={() => handleEditStart(item)}
                                />
                                <DangerButton
                                    title="削除"
                                    onClick={() => deleteTodo(item.id)}
                                />
                            </div>
                        </>
                    )}
                </li>
            ))}
        </ul>
    )
}

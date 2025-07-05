import { createContext, useContext, useState } from 'react';

// Contextの作成
export const TodoContext = createContext();

// TodoProvider コンポーネント
export const TodoProvider = ({ children }) => {
    const [originalList, setOriginalList] = useState([]); // 元のリスト
    const [list, setList] = useState([]); // 表示用のリスト
    const [searchTerm, setSearchTerm] = useState(''); // 検索キーワード

    // Todo追加
    const addTodo = (title) => {
        const newTodo = {
            id: Date.now().toString(),
            title,
            isEditing: false,
            completed: false,
        };
        setOriginalList(prev => {
            const newList = [...prev, newTodo];
            // 検索中の場合は検索結果も更新
            if (searchTerm) {
                const filteredList = newList.filter((item) =>
                    item.title.toLowerCase().includes(searchTerm.toLowerCase())
                );
                setList(filteredList);
            } else {
                setList(newList);
            }
            return newList;
        });
    };

    // Todo編集
    const editTodo = (id, newTitle) => {
        setOriginalList(prev => {
            const updatedList = prev.map(todo =>
                todo.id === id
                    ? { ...todo, title: newTitle, isEditing: false }
                    : todo
            );
            // 検索中の場合は検索結果も更新
            if (searchTerm) {
                const filteredList = updatedList.filter((item) =>
                    item.title.toLowerCase().includes(searchTerm.toLowerCase())
                );
                setList(filteredList);
            } else {
                setList(updatedList);
            }
            return updatedList;
        });
    };

    // Todo削除
    const deleteTodo = (id) => {
        setOriginalList(prev => {
            const filteredList = prev.filter(todo => todo.id !== id);
            // 検索中の場合は検索結果も更新
            if (searchTerm) {
                const searchFilteredList = filteredList.filter((item) =>
                    item.title.toLowerCase().includes(searchTerm.toLowerCase())
                );
                setList(searchFilteredList);
            } else {
                setList(filteredList);
            }
            return filteredList;
        });
    };

    // 編集モードのトグル
    const toggleEdit = (id) => {
        const updateList = (listToUpdate) => 
            listToUpdate.map(todo =>
                todo.id === id
                    ? { ...todo, isEditing: !todo.isEditing }
                    : { ...todo, isEditing: false } // 他の編集モードは解除
            );
        
        setOriginalList(prev => {
            const updated = updateList(prev);
            if (searchTerm) {
                const filteredList = updated.filter((item) =>
                    item.title.toLowerCase().includes(searchTerm.toLowerCase())
                );
                setList(filteredList);
            } else {
                setList(updated);
            }
            return updated;
        });
    };

    // 編集キャンセル
    const cancelEdit = (id) => {
        const updateList = (listToUpdate) => 
            listToUpdate.map(todo =>
                todo.id === id
                    ? { ...todo, isEditing: false }
                    : todo
            );
        
        setOriginalList(prev => {
            const updated = updateList(prev);
            if (searchTerm) {
                const filteredList = updated.filter((item) =>
                    item.title.toLowerCase().includes(searchTerm.toLowerCase())
                );
                setList(filteredList);
            } else {
                setList(updated);
            }
            return updated;
        });
    };

    // 完了状態のトグル
    const toggleComplete = (id) => {
        const updateList = (listToUpdate) => 
            listToUpdate.map(todo =>
                todo.id === id
                    ? { ...todo, completed: !todo.completed }
                    : todo
            );
        
        setOriginalList(prev => {
            const updated = updateList(prev);
            if (searchTerm) {
                const filteredList = updated.filter((item) =>
                    item.title.toLowerCase().includes(searchTerm.toLowerCase())
                );
                setList(filteredList);
            } else {
                setList(updated);
            }
            return updated;
        });
    };

    // 検索機能
    const searchList = (searchTerm) => {
        setSearchTerm(searchTerm);
        if (searchTerm.trim() === '') {
            // 検索キーワードが空の場合は全てのTodoを表示
            setList(originalList);
        } else {
            // 検索キーワードでフィルタリング
            const filteredList = originalList.filter((item) =>
                item.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setList(filteredList);
        }
    };

    const value = {
        list,
        originalList,
        searchTerm,
        addTodo,
        editTodo,
        deleteTodo,
        toggleEdit,
        cancelEdit,
        toggleComplete,
        searchList,
        setSearchTerm,
    };

    return (
        <TodoContext.Provider value={value}>
            {children}
        </TodoContext.Provider>
    );
};

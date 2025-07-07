// Context/TodoContext.js
import { createContext, useContext, useState, useEffect } from 'react'; // useEffectを追加
import { useSearchList } from '../hooks/useSearchList';

// Contextの作成
export const TodoContext = createContext();

// TodoProvider コンポーネント
export const TodoProvider = ({ children }) => {
    const [originalList, setOriginalList] = useState([]); // 元のリスト

    // useSearchListを呼び出し、originalListを渡す
    // listはfilteredListを直接使う
    const {
        searchTerm,
        filteredList, // useSearchListからfilteredListを取得
        searchList,
        setSearchTerm
    } = useSearchList(originalList); // ここでoriginalListを渡す

    // originalListが変更されたときに、検索結果に影響を与えないように
    // useSearchList内部で処理されるようにしたため、ここではlistを直接setする必要はない。
    // list = filteredListとして扱う

    // Todo追加
    const addTodo = (title) => {
        const newTodo = {
            id: Date.now().toString(),
            title,
            isEditing: false,
            completed: false,
        };
        setOriginalList(prev => [...prev, newTodo]);
        // ここでfilteredListを更新するロジックはuseSearchListのuseEffectに任せる
    };

    // Todo編集
    const editTodo = (id, newTitle) => {
        setOriginalList(prev =>
            prev.map(todo =>
                todo.id === id
                    ? { ...todo, title: newTitle, isEditing: false }
                    : todo
            )
        );
        // filteredListの更新はuseSearchListのuseEffectに任せる
    };

    // Todo削除
    const deleteTodo = (id) => {
        setOriginalList(prev => prev.filter(todo => todo.id !== id));
        // filteredListの更新はuseSearchListのuseEffectに任せる
    };

    // 編集モードのトグル
    const toggleEdit = (id) => {
        setOriginalList(prev =>
            prev.map(todo =>
                todo.id === id
                    ? { ...todo, isEditing: !todo.isEditing }
                    : { ...todo, isEditing: false } // 他の編集モードは解除
            )
        );
        // filteredListの更新はuseSearchListのuseEffectに任せる
    };

    // 編集キャンセル
    const cancelEdit = (id) => {
        setOriginalList(prev =>
            prev.map(todo =>
                todo.id === id
                    ? { ...todo, isEditing: false }
                    : todo
            )
        );
        // filteredListの更新はuseSearchListのuseEffectに任せる
    };

    // 完了状態のトグル
    const toggleComplete = (id) => {
        setOriginalList(prev =>
            prev.map(todo =>
                todo.id === id
                    ? { ...todo, completed: !todo.completed }
                    : todo
            )
        );
        // filteredListの更新はuseSearchListのuseEffectに任せる
    };

    const value = {
        list: filteredList, // ここでfilteredListを使う
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

import { useState, useContext } from 'react';
import { TodoContext } from '../../../../contexts/TodoContext';
import styles from './styles.module.css';

export const InputForm = ({ type, placeholder, value, onChange }) => {
  const { addTodo, setSearchTerm, searchList } = useContext(TodoContext);
  const [inputValue, setInputValue] = useState(value || '');

  // 内部で状態を管理する場合（value, onChangeが渡されない場合）
  const handleChange = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    
    // propsでonChangeが渡されている場合は実行
    if (onChange) {
      onChange(e);
    }
    
    // placeholderに基づいて自動的に機能を判定
    if (placeholder === 'SearchKeyword') {
      setSearchTerm(newValue);
      // 検索機能を実行
      searchList(newValue);
    }
  };

  // Enterキーでの送信処理
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && placeholder === 'NewTask') {
      handleAddTodo();
    }
  };

  // Todo追加処理
  const handleAddTodo = () => {
    const currentValue = value !== undefined ? value : inputValue;
    if (currentValue.trim()) {
      addTodo(currentValue.trim());
      // 内部状態を管理している場合はクリア
      if (value === undefined) {
        setInputValue('');
      }
    }
  };

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value !== undefined ? value : inputValue}
      onChange={handleChange}
      onKeyPress={handleKeyPress}
      className={styles.inputForm}
    />
  );
};

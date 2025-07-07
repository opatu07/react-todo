// hooks/useSearchList.js
import { useState, useCallback, useEffect } from 'react';

export const useSearchList = (originalList) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredList, setFilteredList] = useState(originalList); 

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredList(originalList); 
    } else {
      const filtered = originalList.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredList(filtered);
    }
  }, [originalList, searchTerm]);

  const searchList = useCallback((term) => {
    setSearchTerm(term);
  }, []); 

  return {
    searchTerm,
    filteredList,
    searchList,
    setSearchTerm,
  };
};

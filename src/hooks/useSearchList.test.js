// useSearchList.test.js
import { renderHook, act } from '@testing-library/react';
import { useSearchList } from './useSearchList';

describe('useSearchList', () => {
  const mockData = [
    { id: '1', title: 'Todo 1' },
    { id: '2', title: 'Todo 2' },
    { id: '3', title: 'Search Test' }
  ];

  test('should filter list based on search term', () => {
    const { result } = renderHook(() => useSearchList(mockData));
    
    act(() => {
      result.current.searchList('Search');
    });
    
    expect(result.current.filteredList).toHaveLength(1);
    expect(result.current.filteredList[0].title).toBe('Search Test');
  });
});

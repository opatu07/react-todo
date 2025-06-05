export default function SearchInput({searchTerm, setSearchTerm, originalList, setList }) {
    function searchList(searchTerm) {
        setSearchTerm(searchTerm);
        const filteredList = originalList.filter((item) =>
          item.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setList(filteredList);
    }
    return (
        <input
          type="text"
          placeholder="search"
          value={searchTerm}
          onChange={(e) => searchList(e.target.value)}
        />
    )
}

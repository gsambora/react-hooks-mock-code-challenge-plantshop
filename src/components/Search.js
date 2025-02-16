import React from "react";

function Search({handleSearch, resetPage}) {
  function onSearch(event){
    handleSearch(event.target.value);
  }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={(e) => onSearch(e)}
      />
    </div>
  );
}

export default Search;

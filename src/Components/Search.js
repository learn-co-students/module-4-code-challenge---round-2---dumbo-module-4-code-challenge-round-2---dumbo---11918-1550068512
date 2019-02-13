import React from "react";

const Search = (props) => {
  return <form className="search">
    Search Beers:{' '} <input type="text" value={props.filteredTerm} onChange={(e) => props.handleSearchChange(e) }/>
    </form>;
};

export default Search;

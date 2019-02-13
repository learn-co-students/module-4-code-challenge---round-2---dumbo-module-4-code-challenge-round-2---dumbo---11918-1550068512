import React from "react";

const Search = (props) => {
  return <form className="search">
    <input type="text" placeholder="Search Beers" value={props.searchTerm} onChange={(e)=>props.changeHandler(e)}/>
  </form>;
};

export default Search;

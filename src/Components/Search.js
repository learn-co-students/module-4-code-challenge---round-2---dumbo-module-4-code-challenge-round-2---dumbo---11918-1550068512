import React from "react";

const Search = (props) => {
  return <form className="search">{/*Build Form Here*/}
    <input type="text" onChange={props.changeHandler} value={props.searchTerm}/>
  </form>;
};

export default Search;

import React from "react";

const Search = (props) => {
  return <form className="search"> Search:
  <input onChange={(e) => props.handleChange(e)} value={props.input.value}></input>
  </form>;
};

export default Search;

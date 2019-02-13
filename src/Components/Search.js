import React from "react";

let Search = (props) => {



  return (<form className="search">
    <input type="text" value={props.searchTerm} onChange={props.handleSearchChange} />
  </form>);

};

export default Search;

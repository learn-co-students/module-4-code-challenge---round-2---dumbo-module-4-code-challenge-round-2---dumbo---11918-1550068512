import React from "react";

const Search = (props) => {
  return(
         <form className="search">
         <input type= "text" value={props.searchTerm}
         placeholder="Search Beers" onChange={props.handleSearch} />
           {/*Build Form Here*/}
          </form>
   )
};

export default Search;

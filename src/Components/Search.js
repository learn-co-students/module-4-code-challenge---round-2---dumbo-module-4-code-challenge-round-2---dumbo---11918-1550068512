import React from "react";

const Search = props => {
  return (
        <form>
          <input
          className="form"
          type="text"
          value={props.value}
          onChange={props.changeHandler}
          placeholder={"Search Beers"}
          />
        </form>
)};

export default Search;

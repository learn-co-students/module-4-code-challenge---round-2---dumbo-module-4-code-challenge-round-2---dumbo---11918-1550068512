import React from "react";

const Search = props => {
  return (
    <form className="search" onSubmit={e => e.preventDefault()}>
      <input
        type="text"
        placeholder="search beers"
        name="name"
        value={props.value}
        onChange={props.changeHandler}
      />
    </form>
  );
};

export default Search;

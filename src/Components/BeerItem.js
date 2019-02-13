import React from "react";

const BeerItem = (props) => {
  return (
    <li className="beer-item" onClick={() => props.handleBeerClick(props.beer)}>
      {props.beer.name}
    </li>
  );
};

export default BeerItem;

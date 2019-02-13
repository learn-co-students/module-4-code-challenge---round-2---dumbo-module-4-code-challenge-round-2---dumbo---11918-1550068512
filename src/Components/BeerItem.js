import React from "react";

const BeerItem = props => {
  const clickHandler = () => {
    props.clickHandler(props.obj);
  };

  return (
    <li className="beer-item" onClick={clickHandler}>
      {props.name}
    </li>
  );
};

export default BeerItem;

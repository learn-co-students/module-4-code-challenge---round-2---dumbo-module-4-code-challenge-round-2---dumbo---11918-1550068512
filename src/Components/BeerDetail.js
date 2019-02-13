import React from "react";

const BeerDetail = props => {
  console.log(props);
  return (
    <div className="beer-card">
      <img alt={props.name} src={props.image} />
      <p>{props.description}</p>
    </div>
  );
};

export default BeerDetail;

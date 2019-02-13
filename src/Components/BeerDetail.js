import React from "react";

const BeerDetail = props => {
  console.log(props);
  return (
    <div className="beer-card">
      <img alt={props.beer.name} src={props.beer.image_url} />
      <p>{props.beer.description}</p>
    </div>
  );
};

export default BeerDetail;

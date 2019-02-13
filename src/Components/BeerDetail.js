import React from "react";

const BeerDetail = (props) => {
  return (
    <div className="beer-card">
      <img alt={props.clickedBeer.name} src={props.clickedBeer.image_url} />
      <p>{props.clickedBeer.description}</p>
    </div>
  );
};

export default BeerDetail;

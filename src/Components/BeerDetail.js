import React from "react";

const BeerDetail = (props) => {
  let image_url = `${props.renderedBeer.image_url}`
  return (
    <div className="beer-card">
      <img alt="beer" src={image_url} />
      <p>{props.renderedBeer.name}</p>
      <p>{props.renderedBeer.description}</p>
    </div>
  );
};

export default BeerDetail;

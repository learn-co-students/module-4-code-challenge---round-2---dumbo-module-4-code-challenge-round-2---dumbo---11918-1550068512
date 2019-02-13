import React from "react";

const BeerDetail = (props) => {
  return (
    <div className="beer-card">
      <img alt="" src={props.currentBeer.image_url} />
      <p>{props.currentBeer.description}</p>
    </div>
  );
};


export default BeerDetail;

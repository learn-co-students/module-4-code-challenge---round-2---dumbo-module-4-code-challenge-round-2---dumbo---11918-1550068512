import React from "react";

const BeerDetail = (props) => {
  return (
    <div className="beer-card">
      <img alt="" src={props.theBeer.image_url} />
      <p>{props.theBeer.description}</p>
    </div>
  );
};

export default BeerDetail;

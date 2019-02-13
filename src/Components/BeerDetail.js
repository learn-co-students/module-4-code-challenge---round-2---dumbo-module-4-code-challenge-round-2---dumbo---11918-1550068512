import React from "react";

const BeerDetail = props => {
  console.log("beer detail is working, here are the beer detail props:", props);
  return (
    <div className="beer-card">
      <img alt="" src={props.beer.image_url} />
      <p>{props.beer.description}</p>
    </div>
  );
};

export default BeerDetail;

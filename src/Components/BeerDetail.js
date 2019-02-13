import React from "react";


const BeerDetail = (props) => {
	console.log("beerdetail props", props)
	console.log("---")
  return (
    <div className="beer-card">
      <img alt="" src={props.beerObj.image_url} />
      <p>{props.beerObj.description/*beer description goes here*/}</p>
    </div>
  );
};

export default BeerDetail;

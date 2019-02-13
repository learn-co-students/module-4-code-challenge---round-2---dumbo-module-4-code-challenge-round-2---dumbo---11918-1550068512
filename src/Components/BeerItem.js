import React from "react";


const BeerItem = (props) => {

  console.log("beerItem props", props)
	console.log("---")

	function handleClick () {
   return props.showBeerDetails(props.beer)
   }

    return (
      <li className="beer-item" onClick={handleClick}>
        {props.beer.name/* beer name goes here */}
      </li>
    );

};

export default BeerItem;

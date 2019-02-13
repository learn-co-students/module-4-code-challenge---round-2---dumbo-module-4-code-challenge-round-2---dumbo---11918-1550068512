import React, { Component } from "react";


class BeerItem extends Component {



	handleClick = () => {

   return this.props.showBeerDetails(this.props.beer)

	}

	render() {
	  console.log("beerItem props", this.props)
	  console.log("---")
    return (
      <li className="beer-item" onClick={this.handleClick}>
        {this.props.beer.name/* beer name goes here */}
      </li>
    );
  }
};

export default BeerItem;

import React, { Component } from "react";
import Search from "../Components/Search";
import BeerDetail from "../Components/BeerDetail";
import BeerItem from "../Components/BeerItem";

class BeerContainer extends Component {
  state = {
    beers: [],
    searchValue: "",
    selectedBeer: {}
  };

  clickHandler = beerObj => {
    this.setState(
      {
        selectedBeer: beerObj
      },
      () =>
        console.log(
          "length of beer object",
          Object.keys(this.state.selectedBeer).length
        )
    );
  };

  componentDidMount() {
    fetch("http://localhost:3001/beers")
      .then(res => res.json())
      .then(beers => {
        this.setState({ beers });
      });
  }

  render() {
    let beers = this.state.beers.map(beer => {
      return (
        <BeerItem
          key={beer.id}
          name={beer.name}
          obj={beer}
          clickHandler={this.clickHandler}
        />
      );
    });

    return (
      <div>
        <Search />
        <br />
        <ul className="container">
          {this.state.beers.length > 0 ? beers : <h1>Loading</h1>}
        </ul>
        {Object.keys(this.state.selectedBeer).length > 0 ? (
          <BeerDetail beer={this.state.selectedBeer} />
        ) : null}
      </div>
    );
  }
}

export default BeerContainer;

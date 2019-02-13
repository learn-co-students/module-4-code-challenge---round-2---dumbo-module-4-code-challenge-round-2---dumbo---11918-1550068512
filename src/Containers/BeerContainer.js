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

  changeHandler = e => {
    console.log(e.target.value);
    this.setState({
      searchValue: e.target.value
    });
  };

  componentDidMount() {
    fetch("http://localhost:3001/beers")
      .then(res => res.json())
      .then(beers => {
        this.setState({ beers });
      });
  }

  searchFilter = () => {
    let returnValue = [...this.state.beers].filter(beer => {
      return beer.name
        .toLowerCase()
        .startsWith(this.state.searchValue.toLowerCase());
    });
    return returnValue.map(beer => {
      return (
        <BeerItem
          key={beer.id}
          name={beer.name}
          obj={beer}
          clickHandler={this.clickHandler}
        />
      );
    });
  };

  render() {
    this.searchFilter();
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
        <Search
          value={this.state.searchValue}
          changeHandler={this.changeHandler}
        />
        <br />
        <ul className="container">
          {this.state.searchValue.length > 0 ? this.searchFilter() : beers}
        </ul>
        {Object.keys(this.state.selectedBeer).length > 0 ? (
          <BeerDetail beer={this.state.selectedBeer} />
        ) : null}
      </div>
    );
  }
}

export default BeerContainer;

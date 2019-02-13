import React, { Component } from "react";
import Search from "../Components/Search";
import BeerDetail from "../Components/BeerDetail";
import BeerItem from "../Components/BeerItem";
class BeerContainer extends Component {

  state = {
    beers: [],
    beer: [],
    input: ''
  }

  componentDidMount() {
    fetch('http://localhost:3001/beers')
    .then(r => r.json())
    .then(beers => this.setState({beers}))
  }

  beers = () => {
    const beers = this.state.beers.filter(beer => beer.name.toLowerCase().includes(this.state.input.toLowerCase()))
    .map(beer => < BeerItem beer={beer} key={beer.id} handleClick={this.showBeer}/>)
    return beers
  }
  
  showBeer = (beerObj) => {
    this.setState({
      beer: beerObj
    })
  }

  inputValue = (e) => {
    this.setState({
      input: e.target.value
    })
  }

  render() {

    return (
      <div>
        <Search input={this.state.input} inputValue={this.inputValue} />
        <br />
        <ul className="container">{this.beers()}</ul>
        <BeerDetail beer={this.state.beer} />
      </div>
    );
  }
}

export default BeerContainer;

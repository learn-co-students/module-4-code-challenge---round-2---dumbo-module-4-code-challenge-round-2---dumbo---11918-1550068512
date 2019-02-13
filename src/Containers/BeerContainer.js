import React, { Component } from "react";
import Search from "../Components/Search";
import BeerDetail from "../Components/BeerDetail";
import BeerItem from "../Components/BeerItem"

class BeerContainer extends Component {

  state = {
    beer: [],
    searchTerm: "",
    renderedBeer: {}
  }

  componentDidMount = () => {
    fetch("http://localhost:3001/beers")
    .then(res => res.json())
    .then(beer => this.setState({
      beer: beer
    }))
  }

  clickHandler = (beerObj) => {
    this.setState({
      renderedBeer: beerObj
    })
    console.log(beerObj)
  }

  changeHandler = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  filterArray = () => {
    let filterBeer =  this.state.beer.filter(beer => {
      return beer.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    })
    return filterBeer
  }

  renderBeerItems = () => {
    let beerItems = this.filterArray().map(beer => {
      return  <BeerItem key={beer.id} beer={beer} clickHandler={this.clickHandler}/>
    })
    return beerItems;
  }


  renderFilteredBeer = () => {
    this.setState({
      beer: this.filterArray()
    })
  }

  render() {
    this.filterArray();
    return (
      <div>

        <Search 
          changeHandler={this.changeHandler}
        />
        <h6> Search: {this.state.searchTerm}</h6>
        <br />

        <ul className="container">
          {this.renderBeerItems()}
        </ul>

        <BeerDetail renderedBeer={this.state.renderedBeer}/>

      </div>
    );
  }
}

export default BeerContainer;

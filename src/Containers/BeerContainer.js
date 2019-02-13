import React, { Component } from "react";
import Search from '../Components/Search'
import BeerDetail from '../Components/BeerDetail'
import BeerItem from '../Components/BeerItem'

class BeerContainer extends Component {
  state={
    beers: [],
    theBeer: {},
    searchTerm: "",
    filteredBeers: []


  }

  componentDidMount() {
    fetch("http://localhost:3001/beers")
    .then(res => res.json())
    .then(beers => this.setState({beers}))
  }

    handleBeerClick = (beer) => this.setState({theBeer: beer})

  mapBeers = () => {
    if (this.state.searchTerm) {
      return this.state.filteredBeers.map(beer => <BeerItem key={beer.id} beer={beer} handleBeerClick={this.handleBeerClick}/>)

    } else {

    let allBeers = this.state.beers
     return allBeers.map(beer => <BeerItem key={beer.id} beer={beer} handleBeerClick={this.handleBeerClick}/>)
     }
   }


  handleSearchChange = (event) => this.setState({searchTerm: event.target.value})

  filterBeerList = () => {
    let filteredBeers = [...filteredBeers]
  filteredBeers = this.state.beers.filter(beer => beer.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))

  this.setState({filteredBeers: filteredBeers})

  }



  render() {

    return (
      <div>
        <Search searchTerm={this.state.searchTerm} handleSearchChange={this.handleSearchChange}/>
        <br />
        <ul className="container">{this.mapBeers()}</ul>
        <BeerDetail theBeer={this.state.theBeer}/>
      </div>
    );
  }
}

export default BeerContainer;

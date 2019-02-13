import React, { Component } from "react";
import Search from '../Components/Search'
import BeerDetail from '../Components/BeerDetail'
import BeerItem from '../Components/BeerItem'

class BeerContainer extends Component {
  state = {
    beers: [],
    searchTerm: '',
    single: {}
  }

  componentDidMount = () => {
    fetch('http://localhost:3001/beers')
    .then(r => r.json())
    .then(beers => this.setState({
      beers: beers
    }))
  }

  mapBeers = () => {
    return this.filterArray().map(beer =>(
      <BeerItem key={beer.id} beer={beer} clickHandler={this.clickHandler}/>
    ))
  }

  clickHandler = beerObj => {
    this.renderOneBeer(beerObj)
    console.log(beerObj)
  }

  renderOneBeer = beerObj => {
   this.setState({ single: beerObj })
  }

  changeHandler = e => {
    this.setState({
        searchTerm: e.target.value
      })
    this.filterArray()
  }

  filterArray = () => {
    return this.state.beers.filter(beers =>
      beers.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
  }

  render() {
    return (
      <div>
        <Search changeHandler={this.changeHandler} value={this.state.searchTerm}/>
        <br />
        <ul className="container">{ this.mapBeers() }</ul>
        <BeerDetail beer={this.state.single}/>
      </div>
    );
  }
}

export default BeerContainer;

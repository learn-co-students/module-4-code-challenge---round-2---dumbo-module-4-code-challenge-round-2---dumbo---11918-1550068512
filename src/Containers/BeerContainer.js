import React, { Component } from "react";
import Search from '../Components/Search'
import BeerDetail from '../Components/BeerDetail'
import BeerItem from '../Components/BeerItem'

class BeerContainer extends Component {

  state={
    beers: [],
    clickedBeer: {}
  }

  componentDidMount(){
    fetch('http://localhost:3001/beers')
    .then(res => res.json())
    .then(data => this.setState({
      beers: data
    }))
  }

  clickHandler = (beer) => {
    this.setState({
      clickedBeer: beer
    })
  }

  render() {
    let beers = this.state.beers.map(beer => {
      return <BeerItem key={beer.id} beer={beer} clickHandler={this.clickHandler}/>
    })
    return (
      <div>
        <Search />
        <br />
        <ul className="container">{beers}</ul>
        <BeerDetail clickedBeer={this.state.clickedBeer}/>
      </div>
    );
  }
}

export default BeerContainer;

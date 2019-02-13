import React, { Component } from "react";
import Search from '../Components/Search'
import BeerDetail from '../Components/BeerDetail'
import BeerItem from '../Components/BeerItem'

class BeerContainer extends Component {

  state={
    beers: [],
    clickedBeer: {},
    searchTerm: ''
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

  changeHandler = (e) => {
    this.setState({
      searchTerm: e.target.value
    })
  }

  renderFilteredItems = () => {

  let filteredBeers = this.state.beers.filter(beer => {
      let term = this.state.searchTerm.toLowerCase()
      return beer.name.toLowerCase().includes(term)
    })

    return filteredBeers.map(beer => {
      return <BeerItem key={beer.id} beer={beer} clickHandler={this.clickHandler}/>
    })

    // this.setState({
    //   beers: filteredBeers
    // })
  }

  render() {
    return (
      <div>
        <Search searchTerm={this.state.searchTerm} changeHandler={this.changeHandler}/>
        <br />
        <ul className="container">{this.renderFilteredItems()}</ul>
        <BeerDetail clickedBeer={this.state.clickedBeer}/>
      </div>
    );
  }
}

export default BeerContainer;

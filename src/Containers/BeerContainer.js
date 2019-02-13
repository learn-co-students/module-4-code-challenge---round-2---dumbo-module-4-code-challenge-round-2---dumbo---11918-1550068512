import React, { Component } from "react";
import BeerItem from "../Components/BeerItem"
import Search from "../Components/Search"
import BeerDetail from "../Components/BeerDetail"

class BeerContainer extends Component {

state = {
  beers: [],
  beerObj: {},
  searchTerm: "",
  searchedBeers: [],
}


  componentDidMount=()=> {
      fetch("http://localhost:3001/beers")
      .then(resp=>resp.json())
      .then(beers => {
        this.setState ({
          beers: beers,
          searchedBeers: beers
        })
      })

    }

    showBeerDetails =(beerObj) => {
      this.setState({
        beerObj: beerObj
      })
    }
    handleSearch = (event) =>{

      let searchTerm = event.target.value

      let searchedArray = this.state.beers.filter(beer => {
        return beer.name.toLowerCase().includes(searchTerm.toLowerCase())
      })
      this.setState({
        searchTerm: searchTerm,
        searchedBeers: searchedArray,
      })
    }


  render() {
   //console.log("state is ", this.state)
   const beerList = this.state.searchedBeers.map(beer => {
      return <BeerItem key= {beer.id} beer={beer}  showBeerDetails={this.showBeerDetails}  />
   })


    return (
      <div>
        <Search searchTerm= {this.state.searchTerm} handleSearch={this.handleSearch} />
        <br />
        <ul className="container">{beerList}</ul>
        <BeerDetail beerObj={this.state.beerObj}/>
      </div>
    );
  }
}

export default BeerContainer;

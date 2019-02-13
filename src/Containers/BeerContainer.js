import React, { Component } from "react";
import Search from '../Components/Search';
import BeerDetail from '../Components/BeerDetail';
import BeerItem from '../Components/BeerItem'

class BeerContainer extends Component {
  state = {
    beers: [],
    beerDisplay:{},
    filteredTerm: ""
  }

  componentDidMount () {
    fetch('http://localhost:3001/beers')
    .then((res)=>{
      return res.json()
    })
    .then((beers)=>{
      this.setState({beers})
    })
  }

  //used initially 
  // renderBeerItems = ()=> {
  //   const beerItems = this.state.beers.map(beer => <BeerItem key={beer.id} beer={beer} onClickHandler={this.onClickHandler} />)
  //   return beerItems;
  // }

  renderBeerTypes = () =>{
    const beerItemsFil = this.state.beers.filter((beer)=>{
      return beer.name.toLowerCase().includes(this.state.filteredTerm.toLowerCase())
    }).map(beer => <BeerItem key={beer.id} beer={beer} onClickHandler={this.onClickHandler} /> )
    return beerItemsFil
  }

  onClickHandler =(beerObj)=>{
    //goal of the function to change the state of beerDisplay to the current beer clicked to be passed down as props to display
    this.setState({
      beerDisplay: beerObj
    })
    
  }

  handleSearchChange = (e) =>{
    console.log('hi', e.target.value)
    this.setState({
      filteredTerm: e.target.value
    })
  }

  render() {
    return (
      <div>
        <Search filteredTerm={this.state.filteredTerm} handleSearchChange={this.handleSearchChange}/>
        <br />
        <ul className="container">{this.renderBeerTypes()}</ul>
        <BeerDetail beers={this.state.beers} currentBeer={this.state.beerDisplay} />
      </div>
    );
  }
}

export default BeerContainer;

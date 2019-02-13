import React, { Component } from "react";
import BeerDetail from "../Components/BeerDetail";
import Search from "../Components/Search";
import BeerItem from "../Components/BeerItem";

class BeerContainer extends Component {
  state = {
      beer: [],
      searchTerm: "",
      BeerDetail: []
  };

  componentDidMount() {
    fetch("http://localhost:3001/beers")
      .then(res => res.json())
      .then(beer => this.setState({ beer }));
  }

  handleClick = e => {
      this.setState({
          BeerDetail: e.target.value
      });
  };

  handleChange = e => {
    this.setState({
      searchTerm: e.target.value
    });
  };

  // beerRender  = () => { const beers = this.state.beer.map((beer => < BeerItem key={beer.id} beer={beer} {/*clickEvent={this.clickEvent*/}}/>))
  //     return beers};
    beerDetailRender  = () => { const beers = this.state.BeerDetail.map((beer => < BeerDetail key={beer.id} beer={beer} handleClick={this.handleClick}/>))
        return beers};

  filterByInput = () => {
    const beers = this.state.beer
      .filter(beer =>
        beer.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
      )
      .map(beer => (
        <BeerItem
          beer={beer}
          key={beer.id}
          handleClick={this.handleClick}
          beerDetailRender={this.beerDetailRender}
          handleChange={this.props.handleChange}
        />
      ));
    return beers;
  };
  render() {
    return (
      <div>
        <Search
          search={this.state.searchTerm}
          handleChange={this.handleChange}
        />
        <br />
        <ul className="container">{this.filterByInput()}</ul>

      </div>
    );
  }
}

export default BeerContainer;

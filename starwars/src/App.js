import React, { Component } from 'react';
//import styled from 'styled-components';
import './App.css';

import Character from './components/character.js';
import Header from './components/header.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      page: 1
    };
  }

  componentDidMount() {
    this.getCharacters(`https://swapi.co/api/people/?page=${this.state.page}`);
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    console.log(`getting characters from: ${URL}`)
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  nextPage = (event) => {
    event.preventDefault();
    this.setState((prevState) => {return {page: prevState.page+1}});
    this.getCharacters(`https://swapi.co/api/people/?page=${this.state.page}`);
  }

  prevPage = (event) => {
    event.preventDefault();
    this.setState((prevState) => {return {page: prevState.page > 1 ? prevState.page - 1 : prevState.page }});
    this.getCharacters(`https://swapi.co/api/people/?page=${this.state.page}`);
  }

  render() {
    return (
      <div className="App">
        <Header next={this.nextPage} prev={this.prevPage}/>
        <div className="charContainer">
          {this.state.starwarsChars.map(char => <Character key={char.url} char={char}/>)}
        </div>
      </div>
    );
  }
}

export default App;

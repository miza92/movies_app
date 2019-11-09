import React from 'react';
import MovieData from './components/MovieData.js';
import './assets/css/App.css';

export default class App extends React.Component {
  constructor(){
    super();
    this.state={
        movies : []
    };
  }
  render() {
    return (
      <div className="App">
        <p>Bonjour !</p>
        <MovieData />
      </div>
    );
  }
}
import React from 'react';
import MovieCard from './components/MovieCard.js';
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
        <MovieCard />
      </div>
    );
  }
}
import React from 'react';
import './assets/css/App.css';
import CategorySelect from './components/CategorySelect.js';
import MovieCard from './components/MovieCard.js';
import DeleteMovie from './components/DeleteMovie.js';
import { BrowserRouter, Route } from 'react-router-dom';

export default class App extends React.Component {
  constructor(){
    super();
    this.state={
        movies : []
    };
  }
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <p>Bonjour !</p>
        <CategorySelect />
        <MovieCard />
        <div className="main-route-place">
          <Route exact path="/:id/delete" component={DeleteMovie} />
        </div>
      </div>
      </BrowserRouter>
    );
  }
}
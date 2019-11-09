import React from 'react';
import '../assets/css/App.css';
import movies from "../helpers/movies.js";

export default class MovieData extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <ul>
          {movies.map(movie => (<li>{movie.title}</li>))}
        </ul>
        <div class="form-group">
          <label for="categorie">Choisissez une catégorie</label>
            <select class="form-control" id="categorie"> {movies.map(movie => (
              <option>{movie.category}</option>))}
            </select>
        </div>
        {movies.map(movie => (
        <div class="card" /*style="width: 18rem;"*/>
          {/* <img src="..." class="card-img-top" alt="..." /> */}
          <div class="card-body">
            <h5 class="card-title">{movie.title}</h5>
            <p class="card-text">{movie.category}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
        ))}
      </div>
    );
  }
}
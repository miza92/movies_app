import React from 'react';
import '../assets/css/App.css';
import movies from "../helpers/movies.js";
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import Badge from '@material-ui/core/Badge';
// import MailIcon from '@material-ui/icons/Mail';
import Button from '@material-ui/core/Button';


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
            {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
            <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton color="secondary" aria-label="thumbdown">
          <ThumbDownIcon />
        </IconButton>
        <IconButton color="primary" aria-label="thumbup">
          {/* <ThumbUpIcon /> */}
          <Badge badgeContent={1000} max={999} color="primary">
          <ThumbUpIcon />
        </Badge>
        </IconButton>
        <Badge color="primary" badgeContent={4} >
        <Button variant="contained">Button</Button>
      </Badge>
        {/* <Badge badgeContent={1000} max={999} color="primary">
          <ThumbUpIcon />
        </Badge> */}
          </div>
        </div>
        ))}
         {/* <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton> */}
      </div>
    );
  }
}
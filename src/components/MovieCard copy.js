import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import DeleteIcon from '@material-ui/icons/Delete';
import Badge from '@material-ui/core/Badge';
import movies from "../helpers/movies.js";
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import { Link} from "react-router-dom";
import DeleteMovie from './DeleteMovie.js';


export default class MovieCard extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      movies,
    };
  }
 
  handleDelete = itemId => {
    const movies = this.state.movies.filter(item => item.id !== itemId);
    console.log(movies)
    this.setState({ 
      movies: movies
    });
  };
  render() {
    return (
      <div className="MovieCard">
        {/*<div>
        <FormControl>
        <InputLabel id="demo-mutiple-name-label">Choisissez une catégorie</InputLabel>
        <Select
          labelId="demo-mutiple-name-label"
          id="demo-mutiple-name"
          // multiple
          // value={personName}
          // onChange={handleChange}
          input={<Input />}
          // MenuProps={MenuProps}
        >
          {movies.map(movie => (
            <MenuItem key={movie.id} value={movie.category} >
              {movie.category}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
          </div>*/}
      {movies.map(movie => (
      <Card key={movie.id} className="Carts">
        <CardActionArea>
          {/* <CardMedia
            image="/static/images/cards/contemplative-reptile.jpg"
            title="Contemplative Reptile"
          /> */}
          <CardContent classMane="v">
            <Typography gutterBottom variant="h5" component="h2">
              Titre : {movie.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Catégorie : {movie.category}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Badge  max={999999} badgeContent={movie.likes} >
            <Button size="small">
              <ThumbUpIcon />
            </Button>
          </Badge>
          <Badge max={999999} badgeContent={movie.dislikes} >
            <Button size="small">
              <ThumbDownIcon />
            </Button>
          </Badge>
          <div>
          <DeleteMovie
            key={movie.id}
            value={movie.value}
            onDelete={this.handleDelete}
            id={movie.id}
          />
          </div>
        </CardActions>
      </Card>
      ))}
      </div>
    );
  }
}
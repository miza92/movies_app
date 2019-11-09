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
import Badge from '@material-ui/core/Badge';
import movies from "../helpers/movies.js";


export default class MovieCard extends React.Component {
  render() {
    return (
      <div className="MovieCard">
      {movies.map(movie => (
      <Card key={movie.id}>
        <CardActionArea>
          <CardMedia
            image="/static/images/cards/contemplative-reptile.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Titre : {movie.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Catégorie : {movie.category}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Badge color="primary"  max={999999} badgeContent={movie.likes} >
            <Button size="small" color="primary">
              <ThumbUpIcon />
            </Button>
          </Badge>
          <Badge color="secondary"  max={999999} badgeContent={movie.dislikes} >
            <Button size="small" color="secondary">
              <ThumbDownIcon />
            </Button>
          </Badge>
        </CardActions>
      </Card>
                      ))}
                      </div>
    );
  }
}
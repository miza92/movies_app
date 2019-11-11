import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import movies from "../helpers/movies.js";
import Badge from '@material-ui/core/Badge';
import Typography from '@material-ui/core/Typography';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import { styled } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles({
  card: {
    width: 320,
    margin: 7,
    boxShadow: '0 3px 1px 2px rgba(255, 105, 135, .3)',
  },
  movieCard: {
    display: "flex",
    flexWrap: "wrap",
  },
  movieTitle: {
    color: '#2E86C1',
  },
  icon: {
    color: '#808080',
  },
});

export default function MovieCard(props) {
  const classes = useStyles();

  const MyButton = styled(Button)({
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    color: 'white',
    height: 30,
    padding: '0 10px',
  });

  return (
    <div className={classes.movieCard}>
    {movies.map(movie => (
            <Card key={movie.id} className={classes.card}>
            <CardActionArea>
              {/* <CardMedia
                image="/static/images/cards/contemplative-reptile.jpg"
                title="Contemplative Reptile"
              /> */}
              <CardContent>
                <Typography className={classes.movieTitle} gutterBottom variant="h5" component="h2">
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
                  <ThumbUpIcon className={classes.icon}/>
                </Button>
              </Badge>
              <Badge max={999999} badgeContent={movie.dislikes} >
                <Button size="small">
                  <ThumbDownIcon className={classes.icon}/>
                </Button>
              </Badge>
              <div>
              <MyButton onClick={() => props.onDelete(movie.id)}><DeleteIcon /></MyButton>
              </div>
            </CardActions>
          </Card>
    ))}
    </div>
  );
}
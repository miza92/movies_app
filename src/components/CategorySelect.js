import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import movies from "../helpers/movies.js";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 230,
    maxWidth: 400,
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default function CategorySelect() {
  const classes = useStyles();
  const [category, setCategory] = React.useState([]);

  const handleChange = event => {
    setCategory(event.target.value);
};

return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-mutiple-name-label">Choisissez une catégorie</InputLabel>
        <Select
          labelId="demo-mutiple-name-label"
          id="demo-mutiple-name"
          value={category}
          onChange={handleChange}
          MenuProps={MenuProps}
        >
          {movies.map(movie => (
            <MenuItem key={movie.id} value={movie.category} /*style={getStyles(name, personName, theme)}*/>
              {movie.category}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

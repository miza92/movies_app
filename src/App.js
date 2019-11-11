import React, { useState } from 'react';
import './assets/css/App.css';
import CategorySelect from './components/CategorySelect.js';
import MovieCard from './components/MovieCard.js';
// import DeleteMovie from './components/DeleteMovie.js';
import movies from "./helpers/movies.js";
import TablePagination from '@material-ui/core/TablePagination';

export default function App() { 

  const [list, updateList] = useState(movies);

  const handleRemoveItem = itemId => {
     updateList(list.filter(item => item.id !== itemId));
   };
    return (
      <div className="App">
        <p>Bonjour !</p>
        <CategorySelect key={movies.id} />
        <MovieCard 
          key={movies.id}
          value={movies.value}
          onDelete={handleRemoveItem}
          id={movies.id}
        />
        <TablePagination
        rowsPerPageOptions={[4, 8, 12]}
        component="div"
        backIconButtonProps={{
          'aria-label': 'previous page',
        }}
        nextIconButtonProps={{
          'aria-label': 'next page',
        }}
      />
      </div>
    );
}
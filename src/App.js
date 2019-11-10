import React from 'react';
import './assets/css/App.css';
import CategorySelect from './components/CategorySelect.js';
import MovieCard from './components/MovieCard.js';
// import BodyData from './components/BodyData.js';

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
        <CategorySelect />
        <MovieCard />
        {/* <BodyData /> */}
      </div>
    );
  }
}
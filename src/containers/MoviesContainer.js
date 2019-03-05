import React from 'react';
// import apiConfig from '../apiKeys';
// import { Route, Switch } from "react-router-dom";
import MovieCard from '../components/MovieCard';
import Search from '../components/Search';
// import Login from '../components/Login';

// const popularMoviesURL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${apiConfig.tmdbKey}`

class MoviesContainer extends React.Component {
  formatMovieCards = () => {
    return this.props.movies.map(movie => {
      return <MovieCard movie={movie} key={movie.id} />
    })
  }

  render() {
    return (
      <div id="right-col">

        <Search />

        <div uk-grid="true" uk-height-match="true" className="uk-child-width-1-4 uk-grid-collapse">
          {this.formatMovieCards()}
        </div>
      </div>
    )
  }
}

export default MoviesContainer;

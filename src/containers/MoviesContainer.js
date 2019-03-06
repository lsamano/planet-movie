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
      return <MovieCard movie={movie} key={movie.id} showSingleMovie={this.showSingleMovie} />
    })
  }

	showSingleMovie = (e, movie, ref_code) => {

		this.setState({
			singleMovie: movie,
			moviePath: ref_code
		})
	}

  render() {

    return (
      <div id="right-col">

        <Search />

        <div uk-height-match="true" className="flexify">
          {this.formatMovieCards()}
        </div>
      </div>
    )
  }
}

export default MoviesContainer;

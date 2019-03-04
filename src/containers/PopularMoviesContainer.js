import React from 'react';
import apiConfig from '../apiKeys';
import MovieCard from '../components/MovieCard';

const popularMoviesURL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${apiConfig.tmdbKey}`
const genresURL = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiConfig.tmdbKey}`

class PopularMoviesContainer extends React.Component {
  state = {
    movies: [],
    genres: []
  }

  componentDidMount = () => {
    fetch(popularMoviesURL)
    .then(res => res.json())
    .then(data => this.setState(
      {
        movies: data.results
      }, () => console.log(data.results)
    ))

    fetch(genresURL)
    .then(res => res.json())
    .then(data => this.setState({ genres: data.genres }))
  }

  formatMovieCards = () => {
    return this.state.movies.map(movie => {
      return <MovieCard movie={movie} />
    })
  }

  formatAllGenres = () => {
    return this.state.genres.map(genre => <li>{genre.name}</li> )
  }

  render() {
    return (
      <div uk-grid="true" uk-height-match="true" className="uk-child-width-1-4 uk-grid-collapse">
        {this.formatMovieCards()}
        {this.formatAllGenres()}
      </div>
    )
  }
}

export default PopularMoviesContainer;

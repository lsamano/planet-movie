import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import MoviesContainer from './containers/MoviesContainer';

const popularMoviesURL = "http://localhost:3000/api/v1/movies/popular"
const nowPlayingMoviesURL = "http://localhost:3000/api/v1/movies/now-playing"
const topRatedMoviesURL = "http://localhost:3000/api/v1/movies/top-rated"
const upcomingMoviesURL = "http://localhost:3000/api/v1/movies/upcoming"

class App extends Component {
  state = {
    movies: [],
    genres: []
  }

  componentDidMount = () => {
    fetch(popularMoviesURL)
    .then(res => res.json())
    .then(data => this.setState(
      {
        movies: data
      }, () => console.log(this.state.movies)
    ))
  }

  nowPlayingClickHandler = () => {
    fetch(nowPlayingMoviesURL)
    .then(res => res.json())
    .then(data => this.setState({movies: data}))
  }

  mostPopularClickHandler = () => {
    fetch(popularMoviesURL)
    .then(res => res.json())
    .then(data => this.setState({movies: data}))
  }

  topRatedClickHandler = () => {
    fetch(topRatedMoviesURL)
    .then(res => res.json())
    .then(data => this.setState({movies: data}))
  }

  upcomingClickHandler = () => {
    fetch(upcomingMoviesURL)
    .then(res => res.json())
    .then(data => this.setState({movies: data}))
  }

  render() {
    return (
      <div>
          <Navbar
            nowPlayingClickHandler={this.nowPlayingClickHandler}
            mostPopularClickHandler={this.mostPopularClickHandler}
            topRatedClickHandler={this.topRatedClickHandler}
            upcomingClickHandler={this.upcomingClickHandler}
            />
          <MoviesContainer movies={this.state.movies} />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar';
import MoviesContainer from './containers/MoviesContainer';

const baseURL = "http://localhost:3000/api/v1/movies"
// const moviesURL = "http://localhost:3000/api/v1/movies"

class App extends Component {
  state = {
    movies: [],
    popularMovies: [],
    topRatedMovies: [],
    upcomingMovies: [],
    nowPlayingMovies: []
  }

  componentDidMount = () => {
    fetch(baseURL)
    .then(res => res.json())
    .then(data => {
      const popularMovies = data.filter(movie => movie.category === "popular")
      const nowPlayingMovies = data.filter(movie => movie.category === "now_playing")
      const upcomingMovies = data.filter(movie => movie.category === "upcoming")
      const topRatedMovies = data.filter(movie => movie.category === "top_rated")

      this.setState({
        movies: data,
        popularMovies,
        topRatedMovies,
        upcomingMovies,
        nowPlayingMovies
      }, () => console.log("This is the state", this.state)
      )
    })
  }

  render() {
    return (
      <div>
          <Navbar/>
					<Switch>
          	<Route path="/movies/popular" render={() => <MoviesContainer movies={this.state.popularMovies}/>} />
						<Route path="/movies/top-rated" render={() => <MoviesContainer movies={this.state.topRatedMovies}/>} />
						<Route path="/movies/now-playing" render={() => <MoviesContainer movies={this.state.nowPlayingMovies}/>} />
						<Route path="/movies/upcoming" render={() => <MoviesContainer movies={this.state.upcomingMovies}/>} />
						<Route path="/movies" render={() => <MoviesContainer movies={this.state.movies}/>} />
					</Switch>
      </div>
    );
  }
}

export default App;

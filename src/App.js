import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar';
import MoviesContainer from './containers/MoviesContainer';
import ShowContainer from './containers/ShowContainer';


const baseURL = "http://localhost:3000/api/v1/movies"

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
        nowPlayingMovies,
				singleMovie: null,
				moviePath: null
      }, () => console.log("This is the state", this.state)
      )
    })
  }
	showSingleMovie = (e, movie, ref_code) => {

		this.setState({
			singleMovie: movie,
			moviePath: ref_code
		})

	}
  render() {
		console.log("Current movie code", this.state.moviePath);
    return (
      <div>
          <Navbar/>
					<Switch>
						<Route path={`/movies/${this.state.moviePath}`} render={() => <ShowContainer movie={this.state.singleMovie}/>} />
          	<Route path="/movies/popular" render={() => <MoviesContainer movies={this.state.popularMovies} showSingleMovie={this.showSingleMovie} />} />
						<Route path="/movies/top-rated" render={() => <MoviesContainer movies={this.state.topRatedMovies} showSingleMovie={this.showSingleMovie}/>} />
						<Route path="/movies/now-playing" render={() => <MoviesContainer movies={this.state.nowPlayingMovies} showSingleMovie={this.showSingleMovie}/>} />
						<Route path="/movies/upcoming" render={() => <MoviesContainer movies={this.state.upcomingMovies} showSingleMovie={this.showSingleMovie}/>} />
						<Route path="/movies" render={() => <MoviesContainer movies={this.state.movies} showSingleMovie={this.showSingleMovie}/>} />

					</Switch>
      </div>
    );
  }
}

export default App;

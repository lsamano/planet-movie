import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar';
import MoviesContainer from './containers/MoviesContainer';

const baseURL = "http://localhost:3000/api/v1"
const popularMoviesURL = "http://localhost:3000/api/v1/movies/popular"

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

  sectionClickHandler = section => {
    fetch(`${baseURL}/${section}`)
    .then(res => res.json())
    .then(data => this.setState({movies: data}))
  }

  render() {
    return (
      <div>
          <Navbar sectionClickHandler={this.sectionClickHandler}/>
					<Switch>
          	<Route path="/movies/popular" render={() => <MoviesContainer movies={this.state.movies}/>} />
						<Route path="/movies/top-rated" render={() => <MoviesContainer movies={this.state.movies}/>} />
						<Route path="/movies/now_playing" render={() => <MoviesContainer movies={this.state.movies}/>} />
						<Route path="/movies/upcoming" render={() => <MoviesContainer movies={this.state.movies}/>} />
						<Route path="/movies" render={() => <MoviesContainer movies={this.state.movies}/>} />
					</Switch>
      </div>
    );
  }
}

export default App;

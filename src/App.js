import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import MoviesContainer from './containers/MoviesContainer';

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
    fetch(`http://localhost:3000/api/v1/movies/${section}`)
    .then(res => res.json())
    .then(data => this.setState({movies: data}))
  }

  render() {
    return (
      <div>
          <Navbar
            sectionClickHandler={this.sectionClickHandler}
            />
          <MoviesContainer movies={this.state.movies} />
      </div>
    );
  }
}

export default App;

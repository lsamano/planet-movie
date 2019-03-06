import React, { Component } from 'react';
import {Route, Switch, Redirect} from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar';
import MoviesContainer from './containers/MoviesContainer';
import Signup from "./components/Signup";
import ShowContainer from './containers/ShowContainer';

const baseURL = "http://localhost:3000/api/v1/movies"

class App extends Component {
  state = {
    movies: [],
    popularMovies: [],
    topRatedMovies: [],
    upcomingMovies: [],
    nowPlayingMovies: [],
    user: {}
  }

  componentDidMount = () => {
    let token = localStorage.token;
    fetch("http://localhost:3000/api/v1/profile", {
      method: "GET",
      headers: {
        "content-type": "application/json",
        accepts: "application/json",
        Authorization: `Bearer ${token}`
      }
    })
      .then(resp => resp.json())
      .then(user => {
        if (user.error) {
          return <Redirect to="/login" />;
        } else {
          this.setState({ user }, () => console.log("User is logged in!", user));
        }
      });

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

<<<<<<< HEAD
  signupSubmitHandler = userInfo => {
    fetch("http://localhost:3000/api/v1/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accepts: "application/json"
      },
      body: JSON.stringify({ user: userInfo })
    })
      .then(resp => resp.json())
      .then(data => {
        localStorage.setItem("token", data.jwt);
        this.setState({ user: data.user }, () => console.log(this.state));
      });
  };

  render() {
		console.log("Current movie code", this.state.moviePath);
    return (
      <div>
          <Navbar/>
					<Switch>
            <Route
            path="/signup"
            render={  () => <Signup submitHandler={this.signupSubmitHandler}/>  }/>
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

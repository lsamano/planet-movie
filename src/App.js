import React, { Component } from 'react';
import {Route, Switch, Redirect} from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar';
import MoviesContainer from './containers/MoviesContainer';
import Signup from "./components/Signup";
import Login from "./components/Login";
import ShowContainer from './containers/ShowContainer';

const baseURL = "http://localhost:3000/api/v1/movies";

class App extends Component {
  state = {
    movies: [],
    popularMovies: [],
    topRatedMovies: [],
    upcomingMovies: [],
    nowPlayingMovies: [],
    user: {},
		rentals: [],
		buys: []
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
        if (user.message) {
          return <Redirect to="/login" />;
        } else {
          this.setState({ user: user.user }, () => console.log("User is logged in from componentDidMount!", user));
        }
      });
  }

	getMovie(e, rentOrBuy, id, user) {
		console.log("user_id:", user.id);
		console.log("movie_id:", id);
		let token = localStorage.token;
		if (rentOrBuy === "rent") {
			fetch("http://localhost:3000/api/v1/rentals", {
	      method: "POST",
	      body: JSON.stringify({rental: {
					user_id: user.id,
					movie_id: id
				}}),
	      headers: {
	        "content-type": "application/json",
	        accepts: "application/json",
					Authorization: `Bearer ${token}`
	      }
	    })
	      .then(resp => resp.json())
				.then(rental => console.log("this is the rental:", rental))
		}


		if (rentOrBuy === "buy") {
			fetch("http://localhost:3000/api/v1/purchases", {
	      method: "POST",
	      body: JSON.stringify({
					user_id: user.id,
					movie_id: id
				}),
	      headers: {
	        "content-type": "application/json",
	        accepts: "application/json"
	      }
	    })
	      .then(resp => resp.json())
				.then(rental => console.log(rental))
		}


	}

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

  loginSubmitHandler = userInfo => {
    fetch("http://localhost:3000/api/v1/login", {
      method: "POST",
      body: JSON.stringify({user: userInfo}),
      headers: {
        "content-type": "application/json",
        accepts: "application/json"
      }
    })
      .then(resp => resp.json())
      .then(user => {
        if (user.message) {
          return <Redirect to="/login" />;
        } else {
          localStorage.setItem("token", user.jwt);
          this.setState({ user: user.user }, () => console.log("User is logged in from loginSubmitHandler!", user));
        }
      });
  };

	render() {
    return (
      <div>
          <Navbar user={this.state.user} />
					<Switch>
            <Route
              path="/login"
              render={() => <Login submitHandler={this.loginSubmitHandler} name="Login"/>}
              />
            <Route
            path="/signup"
            render={  () => <Login submitHandler={this.signupSubmitHandler} name="Sign Up"/>  }/>
          	<Route path="/movies/popular" render={() => <MoviesContainer movies={this.state.popularMovies} getMovie={this.getMovie} user={this.state.user}/>} />
						<Route path="/movies/top-rated" render={() => <MoviesContainer movies={this.state.topRatedMovies} getMovie={this.getMovie} user={this.state.user}/>} />
						<Route path="/movies/now-playing" render={() => <MoviesContainer movies={this.state.nowPlayingMovies} getMovie={this.getMovie} user={this.state.user}/>} />
						<Route path="/movies/upcoming" render={() => <MoviesContainer movies={this.state.upcomingMovies} getMovie={this.getMovie} user={this.state.user}/>} />
						<Route path="/movies" render={() => <MoviesContainer movies={this.state.movies} getMovie={this.getMovie} user={this.state.user}/>} />
					</Switch>
      </div>
    )
  };
}

export default App;

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
        if (user.message) {
          return <Redirect to="/login" />;
        } else {
          this.setState({ user }, () => console.log("User is logged in!", user));
        }
      });
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
          this.setState({ user }, () => console.log("User is logged in!", user));
        }
      });
  };

	render() {
    return (
      <div>
          {this.state.user.name ? <Navbar user={this.state.user} /> : null }
					<Switch>
            <Route
              path="/login"
              render={() => <Login loginSubmitHandler={this.loginSubmitHandler}/>}
              />
            <Route
            path="/signup"
            render={  () => <Signup submitHandler={this.signupSubmitHandler}/>  }
            />
          <Route path="/movies" component={MoviesContainer} />
					</Switch>
      </div>
    )
  };
}

export default App;

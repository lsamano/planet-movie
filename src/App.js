import React, { Component } from 'react';
import {Route, Switch, Redirect} from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar';
import MoviesContainer from './containers/MoviesContainer';
import Signup from "./components/Signup";

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
        if (user.error) {
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

  render() {
		console.log("Current movie code", this.state.moviePath);
    return (
      <div>
          <Navbar/>
					<Switch>
            <Route
            path="/signup"
            render={  () => <Signup submitHandler={this.signupSubmitHandler}/>  }/>
          <Route path="/movies" component={MoviesContainer} />
					</Switch>
      </div>
    );
  }
}

export default App;

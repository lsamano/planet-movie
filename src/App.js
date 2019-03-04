import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import PopularMoviesContainer from './containers/PopularMoviesContainer';

class App extends Component {
  render() {
    return (
      <div>
          <Navbar />
          <PopularMoviesContainer />
      </div>
    );
  }
}

export default App;

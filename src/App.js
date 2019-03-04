import React, { Component } from 'react';
import './App.css';
import PopularMoviesContainer from './containers/PopularMoviesContainer';

class App extends Component {
  render() {
    return (
      <div>
          <PopularMoviesContainer />
      </div>
    );
  }
}

export default App;

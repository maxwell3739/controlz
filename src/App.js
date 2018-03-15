import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Routes from './routes';
import {
	BrowserRouter as Router,
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
    <Router>
      <div className="App">
        {Routes}
      </div>
    </Router>
    );
  }
}

export default App;

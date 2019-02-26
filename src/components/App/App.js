import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import About from '../About/About'
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>React Router Practice</h1>
        
        
        <Router>
          <div>
            <ul>
              <li><Link to="/">Home</Link></li> 
              <li><Link to="/about">About</Link></li>
            </ul>
            <Route path="/about" component={About} />
          </div>
        </Router>

     
      </div>

    );
  }
}

export default App;

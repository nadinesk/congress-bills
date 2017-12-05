import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Senate from './components/Senate.js'
import House from './components/House.js'

import { BrowserRouter as Router, 
          Route, 
          Link 
        } from 'react-router-dom'
import { NavLink } from 'react-router-dom'





class App extends Component {

  render() {
    return (
      <div>
        <Router>
          <div>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/senate">Senate</Link></li>
              <li><Link to="/house">House</Link></li>
              
              
            </ul>

            <hr />

            <Route exact path="/" component={Senate}/>
            <Route exact path="/senate" component={Senate}/>
            <Route exact path="/house" component={House}/>            
            
          </div>
        </Router>
        
      </div>
    );
  }
}

export default App;

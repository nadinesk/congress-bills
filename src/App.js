import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Senate from './components/Senate.js'
import House from './components/House.js'

import { BrowserRouter as Router, 
          Route, 
          Link 
        } from 'react-router-dom'
import { Navbar, Nav, NavItem } from 'react-bootstrap'





class App extends Component {

  render() {
    return (    
      <div>  
        <Router>
          <div>
            <Navbar>
              <Navbar.Header>
                <Navbar.Brand> 
                  <a href="/">115th Congress</a> 
                </Navbar.Brand>
              </Navbar.Header>

              <Nav>                
                <NavItem><Link to="/senate">Senate</Link></NavItem>
                <NavItem><Link to="/house">House</Link></NavItem>
              </Nav>
            </Navbar>     

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

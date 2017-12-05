import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import MainBill from './components/MainBill.js'



class App extends Component {

  render() {
    return (
      <div className="App">
          <MainBill/>
      </div>
    );
  }
}

export default App;

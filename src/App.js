import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import fetch from 'isomorphic-fetch';

class App extends Component {
  
  componentDidMount() {
    	
		var apiURL = 'https://www.googleapis.com/books/v1/volumes?q=+intitle:what';
		var apiURLbills = 'https://api.propublica.org/congress/v1/bills/search.json?query=megahertz';
		var apiKey = process.env.REACT_APP_SECRET_CODE
		console.log('apiKey', apiKey)
    	
    	const test = fetch(apiURLbills, {
    		 headers: {
        		Accept: 'application/json',
        		'X-API-KEY': apiKey
      		}
      	})
		      .then(res =>  res.json())
		      .then(billsFound => {
        			return billsFound.results[0].bills                	
    			})


 }


  render() {
  
    return (
      <div className="App">
       
          <h1 className="App-title">{process.env.REACT_APP_SECRET_CODE}</h1>
          
       
      </div>
    );
  }
}

export default App;

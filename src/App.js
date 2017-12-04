import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getBills } from './actions/bills.js'



class App extends Component {
  
  componentDidMount() {
    	this.props.fetchBills()
	
 }


  render() {
  
    return (
      <div className="App">
       
          <h1 className="App-title">{process.env.REACT_APP_SECRET_CODE}</h1>
          
       
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
	return { fetchBills: bindActionCreators(getBills, dispatch)}
}




function mapDispatchToProps(dispatch){
  return {fetchBills: bindActionCreators(getBills, dispatch)}
}

function mapStateToProps(state){
  return {bills: state.bills}
}

App = connect(mapStateToProps, mapDispatchToProps)(App)

export default App;

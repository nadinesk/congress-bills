import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getBills } from './actions/bills.js'
import BillsList from './components/BillsList.js'



class App extends Component {
  
  constructor(props) {
    super(props);
    debugger
  
    
  }
  componentDidMount() {
    	this.props.fetchBills()	
    	console.log(this.props.bills)
   }


  render() {
  
    return (
      <div className="App">                 
          <BillsList bills={this.props.bills}/>          
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

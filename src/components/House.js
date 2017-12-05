import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import HouseBillsList from './HouseBillsList.js'

import { getBills } from '../actions/bills.js'





class House extends Component {
  
  constructor(props) {
    super(props);

    this.state = { 
            chamber: 'house'
            
    }            
  }

  componentDidMount() {
    	
    	this.props.fetchBills('house', 'introduced')	  
  }

   handleOnClick(event){
      
      event.preventDefault()         

      const typeClicked = event.currentTarget.textContent.toLowerCase()

      this.setState({
        clicked: typeClicked
      })


      this.props.fetchBills(this.state.chamber, typeClicked)

      

   }

   


  render() {
    return (
      <div>
      	  <h1>House </h1> 
      	  <li  style={{cursor:'pointer'}} onClick={this.handleOnClick.bind(this)}>Introduced</li>
          <li  style={{cursor:'pointer'}} onClick={this.handleOnClick.bind(this)}>Updated</li>
          <li  style={{cursor:'pointer'}} onClick={this.handleOnClick.bind(this)}>Active</li>
          <li  style={{cursor:'pointer'}} onClick={this.handleOnClick.bind(this)}>Passed</li>
          <li  style={{cursor:'pointer'}} onClick={this.handleOnClick.bind(this)}>Enacted</li>
          <li  style={{cursor:'pointer'}} onClick={this.handleOnClick.bind(this)}>Vetoed</li>          

          <h2>{this.state.clicked}</h2> 
          <HouseBillsList houseBills={this.props.bills}/>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return {fetchBills: bindActionCreators(getBills, dispatch)}
}

function mapStateToProps(state){
  
  return {bills: state.bills}
}

House = connect(mapStateToProps, mapDispatchToProps)(House)

export default House;

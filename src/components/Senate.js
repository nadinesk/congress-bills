import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import SenateBillsList from './SenateBillsList.js'

import House from './House.js'

import { getBills } from '../actions/bills.js'

import TypeLinks from './TypeLinks.js'

import { BrowserRouter as Router, 
          Route, 
          Link 
        } from 'react-router-dom'

var classNames = require('classnames');






class Senate extends Component {
  
  constructor(props) {
    super(props);
    this.state = { 
            chamber: 'senate'
            
    }            
  }

  componentDidMount() {
    	this.props.fetchBills('senate', 'introduced')	  
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
          <h1> Senate </h1> 
          <li  style={{cursor:'pointer'}} onClick={this.handleOnClick.bind(this)}>Introduced</li>
          <li  style={{cursor:'pointer'}} onClick={this.handleOnClick.bind(this)}>Updated</li>
          <li  style={{cursor:'pointer'}} onClick={this.handleOnClick.bind(this)}>Active</li>
          <li  style={{cursor:'pointer'}} onClick={this.handleOnClick.bind(this)}>Passed</li>
          <li  style={{cursor:'pointer'}} onClick={this.handleOnClick.bind(this)}>Enacted</li>
          <li  style={{cursor:'pointer'}} onClick={this.handleOnClick.bind(this)}>Vetoed</li>          

          <h2>{this.state.clicked}</h2> 
          <SenateBillsList senateBills={this.props.bills} blah='blah' />
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

Senate = connect(mapStateToProps, mapDispatchToProps)(Senate)

export default Senate;

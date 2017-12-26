import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import HouseBillsList from './HouseBillsList.js'
import TypeLinks from './TypeLinks.js'
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

  


  render() {
    return (
      <div>
      	  <h1>House </h1> 
      	  <TypeLinks chamber={this.state.chamber}/>
          

            {this.props.bills.length > 0 ? <HouseBillsList houseBills={this.props.bills}/>  : <h4>Nothing yet...</h4>}  
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

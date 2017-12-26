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

  render() {

    return (
      
      <div>
          <h1> Senate </h1> 
          <TypeLinks chamber={this.state.chamber}/>

                      {this.props.bills.length > 0 ?   <SenateBillsList senateBills={this.props.bills} blah='blah' />  : <h4>Nothing yet...</h4>}  
        
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

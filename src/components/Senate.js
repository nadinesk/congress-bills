import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import SenateBillsList from './SenateBillsList.js'

import { getBills } from '../actions/bills.js'





class Senate extends Component {
  
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    	this.props.fetchBills('senate', 'introduced')	  
  }


  render() {
    return (
      <div>
          <h1> Senate </h1> 
          <SenateBillsList senateBills={this.props.bills}/>
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

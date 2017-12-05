import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import BillsList from './BillsList.js'

import { getBills } from '../actions/bills.js'





class MainBill extends Component {
  
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    	this.props.fetchBills()	  
  }


  render() {
    return (
      <div>
          <BillsList bills={this.props.bills}/>
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

MainBill = connect(mapStateToProps, mapDispatchToProps)(MainBill)

export default MainBill;

import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import HouseBillsList from './HouseBillsList.js'
import { getBills } from '../actions/bills.js'
import { Row, DropdownButton, MenuItem, ButtonToolbar, Button, ToggleButtonGroup, ToggleButton } from 'react-bootstrap'



class TypeLinks extends Component {
  
  constructor(props) {
    super(props);

     this.state = { 
            clicked: 'introduced',
            offsetNum: '0'
    }   
    
  }


   handleOnClick(event){
      
      event.preventDefault()         

      const typeClicked = event.currentTarget.textContent.toLowerCase()

      this.setState({
        clicked: typeClicked
      })




      this.props.fetchBills(this.props.chamber, typeClicked,this.state.offsetNum)

      

   }

   handleOnNumClick(event){
      
      event.preventDefault()         

      const offsetNum = event.target.classList[0]

      this.setState({
        offsetNum: offsetNum
      })

      console.log('this.state.clicked', this.state.clicked)
      

      this.props.fetchBills(this.props.chamber, this.state.clicked,offsetNum)
     

   }

   


  render() {
    const mostRecentNum = (this.state.offsetNum == '0') ? '20 most recent' : 
                              (this.state.offsetNum == '20') ? '21-40 most recent' : 
                                (this.state.offsetNum == '40') ? '41-60 most recent' : 
                                  (this.state.offsetNum == '60') ? '61-80 most recent' : 
                                    '81-100 most recent'
    return (
      
      <Row>      	  
      <h3 className="text-center">{this.state.clicked.toUpperCase()} </h3> 
      <h4 className="text-center">{mostRecentNum} </h4>
      	  <ButtonToolbar>
          <DropdownButton title='Bill Type'>
            <MenuItem onClick={this.handleOnClick.bind(this)}>Introduced</MenuItem>
            <MenuItem onClick={this.handleOnClick.bind(this)}>Updated</MenuItem>
            <MenuItem onClick={this.handleOnClick.bind(this)}>Active</MenuItem>
            <MenuItem onClick={this.handleOnClick.bind(this)}>Passed</MenuItem>
            <MenuItem onClick={this.handleOnClick.bind(this)}>Enacted</MenuItem>
            <MenuItem onClick={this.handleOnClick.bind(this)}>Vetoed</MenuItem>          
          </DropdownButton>

       

            <Button bsStyle="primary"  className="0" onClick={this.handleOnNumClick.bind(this)}>20 most recent</Button>
            <Button bsStyle="primary"  className="20" onClick={this.handleOnNumClick.bind(this)}>21-40</Button>
            <Button bsStyle="primary" className="40" onClick={this.handleOnNumClick.bind(this)}>41-60</Button>
            <Button bsStyle="primary"    className="60" onClick={this.handleOnNumClick.bind(this)}>61-80</Button>
            <Button bsStyle="primary"    className="80" onClick={this.handleOnNumClick.bind(this)}>81-100</Button>      
          
        </ButtonToolbar>

      <br />     
      </Row>

    );
  }
}

function mapDispatchToProps(dispatch){
  return {fetchBills: bindActionCreators(getBills, dispatch)}
}

function mapStateToProps(state){
  
  return {bills: state.bills}
}

TypeLinks = connect(mapStateToProps, mapDispatchToProps)(TypeLinks)

export default TypeLinks;

import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import HouseBillsList from './HouseBillsList.js'
import { getBills } from '../actions/bills.js'
import { DropdownButton, MenuItem, ButtonToolbar, Button } from 'react-bootstrap'



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

      const offsetNum = event.target.className

      this.setState({
        offsetNum: offsetNum
      })

      console.log('this.state.clicked', this.state.clicked)



      this.props.fetchBills(this.props.chamber, this.state.clicked,offsetNum)
     

   }

   


  render() {
    const mostRecentNum = (this.state.offsetNum == '0') ? '20 most recent' : 
                              (this.state.offsetNum == '20') ? '20-40 most recent' : 
                                (this.state.offsetNum == '40') ? '40-60 most recent' : 
                                  (this.state.offsetNum == '60') ? '60-80 most recent' : 
                                    '80-100 most recent'
    return (
      <div>      	  
      	  <DropdownButton title='Bill Type'>
            <MenuItem onClick={this.handleOnClick.bind(this)}>Introduced</MenuItem>
            <MenuItem onClick={this.handleOnClick.bind(this)}>Updated</MenuItem>
            <MenuItem onClick={this.handleOnClick.bind(this)}>Active</MenuItem>
            <MenuItem onClick={this.handleOnClick.bind(this)}>Passed</MenuItem>
            <MenuItem onClick={this.handleOnClick.bind(this)}>Enacted</MenuItem>
            <MenuItem onClick={this.handleOnClick.bind(this)}>Vetoed</MenuItem>          
          </DropdownButton>

          <ButtonToolbar>

            <li  style={{cursor:'pointer'}} className="0" onClick={this.handleOnNumClick.bind(this)}>20 most recent</li>
            <li  style={{cursor:'pointer'}} className="20" onClick={this.handleOnNumClick.bind(this)}>20-40</li>
            <li  style={{cursor:'pointer'}} className="40" onClick={this.handleOnNumClick.bind(this)}>40-60</li>
            <li  style={{cursor:'pointer'}} className="60" onClick={this.handleOnNumClick.bind(this)}>60-80</li>
            <li  style={{cursor:'pointer'}} className="80" onClick={this.handleOnNumClick.bind(this)}>80-100</li>      
          </ul>


          <h2>{this.state.clicked}</h2> 
          <h2>{mostRecentNum}</h2> 
          
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

TypeLinks = connect(mapStateToProps, mapDispatchToProps)(TypeLinks)

export default TypeLinks;

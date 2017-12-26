import React, { Component } from 'react'
import { Row, ListGroup, ListGroupItem } from 'react-bootstrap'

class HouseBillsList extends Component {

	constructor(props) {
		super(props)
	}

	componentDidMount() {

	}

	render() {
		const bills_map = this.props.houseBills.map((bill) => (
				<ul className='bill-details'>
				<li key={bill.id} className="bill-id">
	            	{bill.bill_id.toUpperCase()} -  {bill.title}
	            </li>
	            
	            <li key={bill.id} >
	            	<span className="bill-detail-title">Date Introduced:</span> {bill.introduced_date}
	            </li>
	            <li key={bill.id} >
	            	<span className="bill-detail-title">Sponsor:</span> {bill.sponsor_title} {bill.sponsor_name},  {bill.sponsor_state}
	            </li>
	            <li key={bill.id} >
	            	<span className="bill-detail-title">Sponsor Party:</span> {bill.sponsor_party == 'D' ? 'Democrat' : bill.sponsor_party == 'R' ? 'Republican' : bill.sponsor_party == 'I' ? 'Independent' : 'Other'}
	            </li>
	            <li key={bill.id} >
	            	<span className="bill-detail-title">Active:</span> {bill.active == true ? 'True' : 'False'} * 
	            	<span className="bill-detail-title">House Passage:</span> {bill.house_passage == null ? 'NA': bill.house_passage} * 
	            	<span className="bill-detail-title">Senate Passage</span> * {bill.senate_passage == null ? 'NA' : bill.house_passage}
	            </li>
	            <li key={bill.id} >
	            	<span className="bill-detail-title">Summary:</span>{bill.summary == "" ? 'NA' : bill.summary} 
	            </li>
	            <li key={bill.id} >
	            	<span className="bill-detail-title">Primary Subject:</span> {bill.primary_subject == "" ? 'NA' : bill.primary_subject} 
	            </li>
	            <li key={bill.id} >
	            	<span className="bill-detail-title">Latest Major Action:</span> {bill.latest_major_action_date}, {bill.latest_major_action} 
	            </li>
	            
	        </ul>
	))

	return (
		<Row>
			{bills_map}
		</Row>
	)
	}
}

export default HouseBillsList
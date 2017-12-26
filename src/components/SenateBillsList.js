import React, { Component } from 'react'

class SenateBillsList extends Component {

	constructor(props) {
		super(props)


	}

	componentDidMount() {
		console.log('this.props.blah', this.props.blah)
	}

	render() {
		const bills_map = this.props.senateBills.map((bill) => (
			<ul>
				<li key={bill.id} >
	            	ID: {bill.bill_id}
	            </li>
	            <li key={bill.id} >
	            	Title: {bill.title}
	            </li>
	            <li key={bill.id} >
	            	Date Introduced: {bill.introduced_date}
	            </li>
	            <li key={bill.id} >
	            	Sponsor: {bill.sponsor_title} {bill.sponsor_name},  {bill.sponsor_state}
	            </li>
	            <li key={bill.id} >
	            	Sponsor Party: {bill.sponsor_party == 'D' ? 'Democrat' : bill.sponsor_party == 'R' ? 'Republican' : bill.sponsor_party == 'I' ? 'Independent' : 'Other'}
	            </li>
	            <li key={bill.id} >
	            	Active: {bill.active == true ? 'True' : 'False'} | House Passage: {bill.house_passage == null ? 'NA': bill.house_passage} | Senate Passage | {bill.senate_passage == null ? 'NA' : bill.house_passage}
	            </li>
	            <li key={bill.id} >
	            	Summary: {bill.summary == "" ? 'NA' : bill.summary} 
	            </li>
	            <li key={bill.id} >
	            	Primary Subject: {bill.primary_subject == "" ? 'NA' : bill.primary_subject} 
	            </li>
	            <li key={bill.id} >
	            	Latest Major Action: {bill.latest_major_action_date}, {bill.latest_major_action} 
	            </li>
	        </ul>
	))

	return (
		<div>
			{bills_map}
		</div>
	)
	}
}

export default SenateBillsList
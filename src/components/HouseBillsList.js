import React, { Component } from 'react'

class HouseBillsList extends Component {

	constructor(props) {
		super(props)
	}

	componentDidMount() {

	}

	render() {
		const bills_map = this.props.houseBills.map((bill) => (
			<ul>
				<li key={bill.id} >
	            	{bill.bill_id}
	            </li>
	            <li key={bill.id} >
	            	{bill.title}
	            </li>
	            <li key={bill.id} >
	            	{bill.introduced_date}
	            </li>
	            <li key={bill.id} >
	            	{bill.senate_passage}
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

export default HouseBillsList
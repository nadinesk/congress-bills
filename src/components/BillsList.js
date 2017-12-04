import React, { Component } from 'react'

class BillsList extends Component {

	constructor(props) {
		super(props)
	}

	componentDidMount() {

	}


	render() {
		const bills_map = this.props.bills.map((bill) => (
			<li key={bill.id} >                         
            	{bill.bill_id}              
            </li>   

	))

	return (
		<div>
			{bills_map}
		</div>
	)	

	}

}

export default BillsList
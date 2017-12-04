import fetch from 'isomorphic-fetch';

var apiKey = process.env.REACT_APP_SECRET_CODE

const receivedBills = bills => {
  
  return {
    type: 'RECEIVED_BILLS',
    bills
  }
}


export function getBills() {      
  return function(dispatch){                    
    return fetch('https://api.propublica.org/congress/v1/bills/search.json?query=megahertz', {
    		 headers: {
        		Accept: 'application/json',
        		'X-API-KEY': apiKey
      		 }
      		 })     
	 .then(res =>  res.json())
	 .then(billsFound => {     	     	
     	dispatch(receivedBills(billsFound.results[0].bills))
     	console.log((receivedBills(billsFound.results[0].bills)))
	  })   
  }
}




		
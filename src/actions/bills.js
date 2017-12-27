import fetch from 'isomorphic-fetch';

var apiKey = process.env.REACT_APP_SECRET_CODE

const receivedBills = bills => {
  
  return {
    type: 'RECEIVED_BILLS',
    bills
  }
}


export function getBills(chamber, type,offset) {      
  return function(dispatch){                    
    return fetch(`https://api.propublica.org/congress/v1/115/${chamber}/bills/${type}.json?offset=${offset}`, 
    {
    		 headers: {
        		Accept: 'application/json',            
        		'X-API-KEY': apiKey, 
             "Access-Control-Allow-Origin": "*",
      		 }
    })
	 .then(res =>  res.json())
	 .then(billsFound => {     	     	
     	dispatch(receivedBills(billsFound.results[0].bills))
     	console.log((receivedBills(billsFound.results[0].bills)))
	  })   
  }
}




		
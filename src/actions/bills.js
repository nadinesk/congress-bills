import fetch from 'isomorphic-fetch';

var apiKey = process.env.REACT_APP_SECRET_CODE

let header = new Headers({
        
         
          'X-API-KEY': apiKey,   
          'Content-Type': 'authorization'
});

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
         headers: header
    },{mode: 'no-cors'})
	 .then(res =>  res.json())
	 .then(billsFound => {     	     	
     	dispatch(receivedBills(billsFound.results[0].bills))
     	console.log((receivedBills(billsFound.results[0].bills)))
	  })   
  }
}




		
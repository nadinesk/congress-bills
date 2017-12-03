import fetch from 'isomorphic-fetch';

var apiKey = process.env.REACT_APP_SECRET_CODE

export function getBills(bill) {  
  return function(dispatch){        
    fetch('https://api.propublica.org/congress/v1/bills/search.json?query=megahertz', {
    		 headers: {
        		Accept: 'application/json',
        		'X-API-KEY': apiKey
      		}
      	})
	 .then(res =>  res.json())
		      .then(billsFound => {
        			console.log(billsFound.results[0].bills)                	
    			})   
  }
}


		
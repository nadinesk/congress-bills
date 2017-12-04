

export default function billReducer(state = [], action) {
  
  switch(action.type) {
  	case 'RECEIVED_BILLS':    
      return action.bills          
    default:       
      return state;
  }  
}





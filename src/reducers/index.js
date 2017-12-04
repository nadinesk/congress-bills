import { combineReducers } from 'redux';
import billsReducer from './bills_reducer';

const rootReducer =  combineReducers({    
  bills: billsReducer
  
});


export default rootReducer;
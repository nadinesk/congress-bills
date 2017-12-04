import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import {createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';


require('dotenv').config()


const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

ReactDOM.render(
	<Provider store={store} >
		<App /> 
	</Provider>, 
	document.getElementById('root')
);
registerServiceWorker();

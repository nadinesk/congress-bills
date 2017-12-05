It can take me a while to just get set up with building a new app, so I'm outlining some of the steps that will likely routinely have to be made when developing a new React and Redux app that makes calls to an external API that requires an API key. 


[Create React App] makes it really easy to start on a React app, with no-build configuration. 

From their documentation: 

```

npm install -g create-react-app

create-react-app my-app
cd my-app/
npm start

```

The next step I stake is to set up a .env and .gitignore file to hide your API. This documentation gives a good overview of how to do this step: 

https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-custom-environment-variables

Create your .env file with your API key: 

```
REACT_APP_SECRET_CODE=your_api_key

```

Create your .gitignore file to ignore the .env file in the Github repository you create: 

Here is the relevant portion: 

```
# misc
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local
.env

```

Within your index.js file, include

```

require('dotenv').config()

```

You can access your API Key with this code: 

```

{process.env.REACT_APP_SECRET_CODE}

```

Now that this is set up, I move on to including [isomorphic fetch](npm install --save isomorphic-fetch es6-promise), [Redux](https://redux.js.org/) and [React-Redux](https://github.com/reactjs/react-redux), and [Redux-Thunk](https://github.com/gaearon/redux-thunk): 

```
npm install --save isomorphic-fetch es6-promise
npm install --save redux
npm install --save react-redux
npm install --save-dev redux-devtools
npm install --save redux-thunk

```

That is the general set-up for creating a React app wthat makes external API calls with a secrete API key. 

# Next Steps

I plan on including further steps that include how to use the installed tools. 





getting set up

create-react-app

.gitignore
.env
require('dotenv').config()

{process.env.REACT_APP_SECRET_CODE}

https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-custom-environment-variables

redux
react-redux

thunk

actions - isomorphic-fetch 
https://github.com/matthew-andrews/isomorphic-fetch

fetch within App.js
	console.logging info

move to actions


```
	var apiURL = 'https://www.googleapis.com/books/v1/volumes?q=+intitle:what';
		var apiURLbills = 'https://api.propublica.org/congress/v1/bills/search.json?query=megahertz';
		var apiKey = process.env.REACT_APP_SECRET_CODE
		console.log('apiKey', apiKey)
    	
    	const test = fetch(apiURLbills, {
    		 headers: {
        		Accept: 'application/json',
        		'X-API-KEY': apiKey
      		}
      	})
		      .then(res =>  res.json())
		      .then(billsFound => {
        			return billsFound.results[0].bills                	
    			})


```

move to its own component

react-router-dom








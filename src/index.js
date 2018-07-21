import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './App'
import reducers from './reducers/index'

var store = createStore(
   reducers,
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
   <Provider store={store}>
      <App/>
   </Provider>, 
   document.getElementById('root')
)

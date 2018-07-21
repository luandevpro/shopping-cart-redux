import { combineReducers } from 'redux'
import products from './products'
import cart from './cart'
import message from './message'

var reducers = combineReducers({
   products,
   cart,
   message
})

export default reducers
import * as types from './../constant/ActionTypes'
import * as Message from './../constant/Message'

var initialState = Message.MSG_WELLCOME_TO_SHOPPING_ONLINE

var appReducers = (state = initialState , action ) => {
   switch(action.type) {
      case types.CHANGE_MESSAGE:
         return action.message
      default:
         return state
   }
}

export default appReducers
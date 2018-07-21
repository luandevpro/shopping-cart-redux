import * as types from './../constant/ActionTypes'

var data = JSON.parse(localStorage.getItem('cart'))
var initialState = data ? data : []

var findIndex = (cart, id) => {
   var result = -1
   cart.forEach((cart,index) => {
      if(cart.product.id === id){
         return result=index
      }
   })
   return result
}
var appReducers = (state = initialState , action) => {
   var { product , quantity } = action
   var index = -1
   switch(action.type){
      case types.ADD_TO_CART:
         index = findIndex(state,product.id)
         if(index !== -1){
            state[index].quantity +=1
         }else{
            state.push({product,quantity})
         }
         localStorage.setItem('cart',JSON.stringify(state))
         return [...state]
      case types.DECRE_TO_CART:
         index = findIndex(state,product.id)
         if(index !== -1 && quantity > 1){
            state[index].quantity -= 1
         }
         localStorage.setItem('cart',JSON.stringify(state)) 
         return [...state]     
      case types.INCRE_TO_CART:
         index = findIndex(state,product.id)
         if(index !== -1){
            state[index].quantity += 1
         }
         localStorage.setItem('cart',JSON.stringify(state))    
         return [...state]
      case types.REMOVE_TO_CART:
         index = findIndex(state,product.id)
         if(index !== -1){
            state.splice(index,1)
         }
         localStorage.setItem('cart',JSON.stringify(state))
         return [...state]   
      default:
         return [...state]   
   }
}

export default appReducers
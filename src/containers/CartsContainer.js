import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import * as actions from './../actions/index'
import CartItem from './../components/CartItem'
import Cart from './../components/Cart'
import CartResult from '../components/CartResult';

class CartsContainer extends Component {
   showCartItem(cart){
      var result = null
      if(cart.length > 0){
         result = cart.map((cart,index) => {
            return <CartItem 
                        key={index} 
                        cart={cart} 
                        increToCart={this.props.increToCart} 
                        decreToCart={this.props.decreToCart} 
                        removeToCart={this.props.removeToCart}
                        changeMessage={this.props.changeMessage}
                        />
         })
      }
      return result
   }
   showCartResult(cart){
      if(cart.length > 0) {
         return <CartResult cart={cart}/>
      }
   }
   render() {
      var { cart } = this.props
      return (
         <Cart cart={cart}>
            { this.showCartItem(cart) }
            { this.showCartResult(cart) }
         </Cart>
      );
   }
}

CartsContainer.propTypes = {
   cart: PropTypes.arrayOf(
      PropTypes.shape({
         product: PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            inventory: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired
         }).isRequired,
         quantity: PropTypes.number.isRequired
      })
   ).isRequired
}

var mapStateToProps = state => {
   return {
      cart: state.cart
   }
}
var mapDispatchToProps = dispatch => {
   return {
      addToCart: (product,quantity) => {
         dispatch(actions.addToCart(product,quantity))
      },
      increToCart: (product,quantity) => {
         dispatch(actions.increToCart(product,quantity))
      },
      decreToCart: (product,quantity) => {
         dispatch(actions.decreToCart(product,quantity))
      },
      removeToCart: (product) => {
         dispatch(actions.removeToCart(product))
      },
      changeMessage: (message) => {
         dispatch(actions.changeMessage(message))
      }
   }
}
export default connect(mapStateToProps,mapDispatchToProps)(CartsContainer)
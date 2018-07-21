import React, { Component } from 'react'
import * as Message from './../constant/Message'

class CartItem extends Component {
   increToCart = (product,quantity) => {
      this.props.increToCart(
         this.props.cart.product,
         this.props.cart.quantity
      );
      this.props.changeMessage(Message.MSG_UPDATE_TO_CART_SUCCESS)
   }
   decreToCart = (product,quantity) => {
      this.props.decreToCart(
         this.props.cart.product,
         this.props.cart.quantity
      );
      this.props.changeMessage(Message.MSG_UPDATE_TO_CART_SUCCESS)
   }
   removeToCart = (product) => {
      this.props.removeToCart(this.props.cart.product);
      this.props.changeMessage(Message.MSG_DELETE_TO_CART_SUCCESS)
   }
   render() {
      var { cart } = this.props
      var { product , quantity } = cart
      return (
         <tr>
            <th scope="row">
               <img src={product.image} alt={product.name} className="img-fluid z-depth-0" />
            </th>
            <td>
               <h5>
                  <strong>{ product.name }</strong>
               </h5>
            </td>
            <td>{ product.price }$</td>
            <td className="center-on-small-only">
               <span className="qty">{ quantity }</span>
               <div className="btn-group radio-group" data-toggle="buttons">
                  <label className="btn btn-sm btn-primary
                        btn-rounded waves-effect waves-light"
                        onClick={() => this.decreToCart(product,quantity)} >
                        <a>—</a>
                  </label>
                  <label className="btn btn-sm btn-primary
                        btn-rounded waves-effect waves-light"
                        onClick={() => this.increToCart(product,quantity)} >
                        <a>+</a>
                  </label>
               </div>
            </td>
            <td>{ product.price * quantity }$</td>
            <td>
               <button type="button" className="btn btn-sm btn-primary waves-effect waves-light" data-toggle="tooltip" data-placement="top"
                  title="" data-original-title="Remove item"
                  onClick={() => this.removeToCart(product)} >
                  X
               </button>
            </td>
         </tr>
      )
   }
}

export default CartItem
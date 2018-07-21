import React, { Component } from 'react'

export default class CartResult extends Component {
  showTotalCart(cart){
     let total = cart.reduce((total,num) => {
        return total += num.product.price*num.quantity
     },0)
     return total
  } 
  render() {
    var { cart } = this.props 
    return (
      <tr>
         <td colSpan="3"></td>
         <td>
            <h4>
               <strong>Tổng Tiền</strong>
            </h4>
         </td>
         <td>
            <h4>
               <strong>{ this.showTotalCart(cart) }$</strong>
            </h4>
         </td>
         <td colSpan="3">
            <button type="button" className="btn btn-primary waves-effect waves-light">Complete purchase
               <i className="fa fa-angle-right right"></i>
            </button>
         </td>
      </tr>
    )
  }
}

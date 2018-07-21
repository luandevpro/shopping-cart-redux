import React, { Component } from 'react';
import Rating from './Rating';
import * as Message from './../constant/Message'

export default class Product extends Component {
   addToCart = (product) => {
      this.props.addToCart(this.props.product);
      this.props.changeMessage(Message.MSG_ADD_TO_CART_SUCCESS)
   }
   render() {
      var { product } = this.props
      return (
            <div className="col-lg-4 col-md-6 mb-r">
               <div className="card text-center card-cascade narrower">
               <div className="view overlay hm-white-slight z-depth-1">
                  <img src={product.image} className="img-fluid" alt={ product.name } />
                  <a>
                     <div className="mask waves-light waves-effect waves-light"></div>
                  </a>
               </div>
               <div className="card-body">

                  <h4 className="card-title">
                     <strong>
                     <a>{ product.name }</a>
                     </strong>
                  </h4>

                  <Rating product={product}/> 
                  
                  <p className="card-text">
                     {product.description}
                  </p>
                  
                  <div className="card-footer">
                     <span className="left">{ product.price }$</span>
                     <span className="right">
                     <a className="btn-floating blue-gradient" data-toggle="tooltip" data-placement="top" title="" data-original-title="Add to Cart">
                        <i className="fa fa-shopping-cart" onClick={product => this.addToCart(product)}></i>
                     </a>
                     </span>
                  </div>
               
                  </div>
               </div>
            </div>
      );
   }
}

import React, { Component } from 'react';

class Rating extends Component {
   showRating(product){
      var result = []
      for(var i=1; i <= product.rating ; i++){
         result.push(<i key={i} className="fa fa-star"></i>)
      }
      for(var j=1; j <= (5 - product.rating) ; j++){
         result.push(<i key={i} className="fa fa-star-o"></i>)
      }
      return result   
   }
   render() {
      var { product } = this.props
      return (
         <ul className="rating">
            <li>
               { this.showRating(product) }
            </li>
         </ul>
      )
   }
}

export default Rating;
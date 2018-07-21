import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from './../actions/index'
import PropTypes from 'prop-types'
import Products from './../components/Products'
import Product from './../components/Product'

class ProductsContainer extends Component {
   showProducts(products){
      var result = null
      if(products.length > 0){
         result = products.map((product,index) => {
            return <Product 
                        key={index} 
                        product={product} 
                        addToCart={ this.props.addToCart }
                        changeMessage={this.props.changeMessage}
                        />
         })
      }
      return result
   }
   render() {
      var { products } = this.props
      return (
        <Products>
         { this.showProducts(products) }
        </Products>
      )
   }
}
ProductsContainer.propTypes = {
   products: PropTypes.arrayOf(
      PropTypes.shape({
         id: PropTypes.number.isRequired,
         name: PropTypes.string.isRequired,
         description: PropTypes.string.isRequired,
         price: PropTypes.number.isRequired,
         inventory: PropTypes.number.isRequired,
         rating: PropTypes.number.isRequired
      })
   ).isRequired,
   changeMessage: PropTypes.func.isRequired
}
var mapStateToProps = state => {
   return {
      products: state.products
   }
}
var mapDispatchToProps = dispatch => {
   return {
      addToCart: (product) => {
         dispatch(actions.addToCart(product,1))
      },
      changeMessage: (message) => {
         dispatch(actions.changeMessage(message))
      }
   }
}
export default connect(mapStateToProps,mapDispatchToProps)(ProductsContainer)
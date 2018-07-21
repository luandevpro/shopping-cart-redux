import React, { Component } from 'react'
import { connect } from 'react-redux'
import Message from './../components/Message'

class MessagesContainer extends Component {
   render() {
      var { message } = this.props
      return (
         <Message message={message}/>
      );
   }
}
var mapStateToProps = state => {
   return {
      message: state.message
   }
}
export default connect(mapStateToProps,null)(MessagesContainer)
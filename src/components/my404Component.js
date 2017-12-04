import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

class my404Component extends Component {
  render() {
    return <Redirect push to="/" />;
  }
}

export default my404Component;

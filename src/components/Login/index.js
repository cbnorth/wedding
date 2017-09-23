import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import loginTitle from './login-title.png';
import AnimatedWrapper from "../AnimatedWrapper";

import './login.css';

class LoginComponent extends Component {
  state = {
    passwordValue: ""
  }

  _passwordChange = (e) => {
    this.setState({
      passwordValue: e.target.value
    })
  }

  _checkPassword = () => {
    console.log(this.state.passwordValue);
  }


  render() {
    return (
      <div className="LoginPage">
        <h1 className="LoginPage__Title"><img src={loginTitle} alt="Logo" /></h1>
        <div className="LoginPage_LoginForm">
          <label className="LoginPage_PasswordLabel" htmlFor="password">
            <span className="p">P</span>
            <span className="a">a</span>
            <span className="s">s</span>
            <span className="s2">s</span>
            <span className="w">w</span>
            <span className="o">o</span>
            <span className="r">r</span>
            <span className="d">d</span>
          </label>
          <input id="password" type="password" className="LoginPage__Password" onChange={(e) =>this._passwordChange(e)} value={this.state.passwordValue} />
          {/* ToDo: enter for submit */}
          <button onClick={() => this._checkPassword()}>Okay</button>
        </div>
        <Link to='/save_the_date'>Home</Link>
      </div>
    );
  }

  static propTypes = {

  }
}

const Login = AnimatedWrapper(LoginComponent);
export default Login;

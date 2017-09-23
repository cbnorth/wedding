import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import loginTitle from './login-title.png';


import './login.css';

class Login extends Component {
  state = {
    passwordValue: "",
    passwordError: null
  }

  _passwordChange = (e) => {
    this.setState({
      passwordValue: e.target.value,
      passwordError: false
    })
  }

  _handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      console.log('do validate');
    }
  }

  _checkPassword = (e) => {
    if (this.state.passwordValue !== "password") {
      e.preventDefault()
      this.setState({
        passwordError: true
      })
    } else {
      this.setState({
        passwordError: false
      })
    }
  }


  render() {
    let inputClass = classNames({
      LoginPage__Password: true,
      'LoginPage__Password--error': this.state.passwordError
    });

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
          <input
            id="password"
            type="password"
            className={inputClass}
            onChange={(e) =>this._passwordChange(e)}
            onKeyPress={this._handleKeyPress}
            value={this.state.passwordValue} />
          {/* ToDo: enter for submit */}
          {this.state.passwordValue.length > 0 &&
            <button >
              <Link to='/save_the_date' onClick={this._checkPassword}>Home</Link>
            </button>
          }

          {this.state.passwordError &&
            <p>Incorrect Password</p>
          }
        </div>
      </div>
    );
  }

  static propTypes = {

  }
}

export default Login;

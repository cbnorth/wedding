import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import loginTitle from './login-title.png';


import './login.css';

class Login extends Component {
  state = {
    passwordValue: "",
    passwordError: null,
    passwordErrorMessage: null,
    showPassword: false
  }

  _passwordChange = (e) => {
    this.setState({
      passwordValue: e.target.value,
      passwordError: false
    })
  }

  _handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this._checkPassword(e);
    }
  }

  _toggleShowPassword = () => {
    this.setState({
      showPassword: !this.state.showPassword
    })
  }

  _checkPassword = (e) => {
    console.log(this.state.passwordValue);
    if (this.state.passwordValue !== "password") {
      e.preventDefault()
      this.setState({
        passwordError: true
      })
    } else {
      this.setState({
        passwordError: false,
        redirect: true
      })
    }
  }


  render() {
    let inputClass = classNames({
      LoginPage__Password: true,
      'LoginPage__Password--error': this.state.passwordError
    });

    if (this.state.redirect) {
      return <Redirect push to="/save_the_date" />;
    }

    return (
      <div className="LoginPage">
        {/* <img src={loginTitle} alt="Logo" /> */}
        <h1 className="LoginPage__Title"><span>E</span><span>&</span><span>C</span></h1>
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
          <div>
            <input
              id="password"
              type={this.state.showPassword ? "text" : "password"}
              className={inputClass}
              onChange={(e) =>this._passwordChange(e)}
              onKeyPress={this._handleKeyPress}
              value={this.state.passwordValue}
            />
              {this.state.passwordError &&
                <p className="ErrorMessage">Nope</p>
              }
              <span className="ShowPassword" onClick={this._toggleShowPassword}>{this.state.showPassword ? "hide" : "show"}</span>
            {this.state.passwordValue.length > 0 &&
              <div className="LoginPage__ButtonContainer">
                <button className="Btn">
                  <Link to='/save_the_date' onClick={this._checkPassword}>Enter</Link>
                </button>
              </div>
            }
          </div>
        </div>
      </div>
    );
  }

  static propTypes = {

  }
}

export default Login;

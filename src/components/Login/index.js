import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import classNames from 'classnames'
import passwordHash from 'password-hash';
import Cookie from "js.cookie";


import './login.css';

class Login extends Component {
  state = {
    passwordValue: "",
    passwordError: null,
    passwordErrorMessage: null,
    showPassword: false,
    redirect: false
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

  _setCookie = () => {
    console.log('cookie setting')
    Cookie.set(
      "auth",
      "true",
      {
          domain:  "comeandpartywithus.com",
          expires: "Sept, 29 Jan 2018 03:14:07 GMT",
          live:    90
      }
    );
  }

  _checkPassword = (e) => {
    if (passwordHash.verify(this.state.passwordValue.toUpperCase(), 'sha1$a443347b$1$002aa4d1d8c66ad438a21eb804b31e7dd7616566')) {
      this.setState({
        passwordError: false,
        redirect: true
      })
      this._setCookie()
    } else {
      e.preventDefault()
      this.setState({
        passwordError: true
      })
    }
  }


  render() {
    let inputClass = classNames({
      LoginPage__Password: true,
      'LoginPage__Password--error': this.state.passwordError
    });

    if (this.state.redirect || Cookie.get( "auth" )) {
      return <Redirect push to="/invitation" />;
    }

    return (
      <div className="LoginPage">
        {this.state.passwordError &&
          <div className="ErrorMessage">Wrong password, try again</div>
        }
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
}

export default Login;

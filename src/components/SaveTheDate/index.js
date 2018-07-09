import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import Cookie from "js.cookie";

import './savethedate.css'
import './savethedate.css'

class SaveTheDate extends Component {
	state = {
		emailValue: '',
    nameValue: '',
		formSubmitted: false
	}

	componentDidMount() {
		if (localStorage.submitted === "true") {
			this.setState({
				submitted: true
			})
		}
	}

	_emailChange = e => {
		this.setState({
			emailValue: e.target.value
		})
	}

  _nameChange = e => {
		this.setState({
			nameValue: e.target.value
		})
	}

	_handleFormSubmit = e => {
		this.setState({
			formSubmitted: true
		})

		localStorage.setItem("name", this.state.nameValue);
		localStorage.setItem("email", this.state.emailValue);
		localStorage.setItem("submitted", true);
	}

	render() {
      return (
				<Redirect push to="/intivation" />
			)
	}

	static propTypes = {}
}

export default SaveTheDate

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import mapImage from './map.jpg'
import classNames from 'classnames'

import './savethedate.css'
import './savethedate.css'

class SaveTheDate extends Component {
	state = {
		emailValue: '',
    nameValue: '',
		formSubmitted: false
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
		//e.preventDefault()
		this.setState({
			formSubmitted: true
		})
	}

	render() {
		return (
			<div className="LockUp">
				<div className="LockUp__Content">
					<h1>
						<span className="word save">
							<span className="s">S</span>
							<span className="a">a</span>
							<span className="v">v</span>
							<span className="e">e</span>
						</span>
						<span className="word the">
							<span className="t">t</span>
							<span className="h">h</span>
							<span className="e">e</span>
						</span>
						<span className="word date">
							<span className="d">d</span>
							<span className="a">a</span>
							<span className="t">t</span>
							<span className="e">e</span>
							<span className="exp">!</span>
						</span>
					</h1>
					<h2>Sept. 29, 2018</h2>
					<p>
						We're getting married! <br /> Come over and celebrate with us at{' '}
						<a href="https://thefieldsatwilliegreens.com/" target="_blank">
							The Fields at Willie’s Greens
						</a>{' '}
						in Monroe, Washington on September 29, 2018. Please provide your
						email address to receive your formal invitation.
					</p>
					<div>
						<iframe
							id="iframe_txlbrchf"
							name="iframe_txlbrchf"
							style={{ display: 'none' }}
						/>
						<form
							id="ss-form"
							action="https://docs.google.com/forms/d/1qXZsxrL_2r3k8ZxMGKnJoD-dGNE0zih0lEl9X_22Ycw/formResponse"
							method="POST"
							target="iframe_txlbrchf"
							onSubmit={this._handleFormSubmit}
							className={this.state.formSubmitted && 'submitted'}>
							<div className={'ss-form-question'}>
								<input
									id="entry_1069655472"
									type="text"
									name="entry.1069655472"
									dir="auto"
									aria-label="Name  "
									aria-required="true"
									required
									placeholder="Name"
									className="ss-q-short"
                  onChange={(e) => this._nameChange(e)}
                  value={this.state.nameValue}
								/>
								<input
									id="entry_1879453804"
									type="email"
									name="entry.1879453804"
									placeholder="Email"
									aria-required="true"
									dir="auto"
									required
									aria-label="Email (for verification and updates)  Must be a valid email address"
									title="Must be a valid email address"
									className="ss-q-short"
									ref="emailInput"
                  onChange={(e) => this._emailChange(e)}
                  value={this.state.emailValue}
								/>
								<input
									type="hidden"
									name="draftResponse"
									defaultValue="[,,&quot;1258204824982472417&quot;]    "
								/>
								<input type="hidden" name="pageHistory" defaultValue={0} />
								<input
									type="hidden"
									name="fbzx"
									defaultValue={1258204824982472417}
								/>
								<div className="submit_container">
									<input
										id="ss-submit"
										type="submit"
										name="submit"
										defaultValue="Send me an invite"
										className="jfk-button jfk-button-action"
									/>
								</div>
							</div>
							<p className="success_message">
								Thanks {this.state.nameValue}! You'll get an invite at <span>{this.state.emailValue}</span> soon!
							</p>
						</form>
					</div>
				</div>
			</div>
		)
	}

	static propTypes = {}
}

export default SaveTheDate

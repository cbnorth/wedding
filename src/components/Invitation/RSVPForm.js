import React, { Component } from 'react'

import './invitation.css'

class RSVPForm extends Component {
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
		this.setState({
			formSubmitted: true
		})

		localStorage.setItem("name", this.state.nameValue);
		localStorage.setItem("email", this.state.emailValue);
		localStorage.setItem("submitted", true);
	}

	render() {

		return (
			<div className={this.props.className}>
					<h1>RSVP</h1>
					<button className="Exit" onClick={this.props.handleRVSPExit}>exit</button>
					<iframe
					id="iframe_txlbrchf"
					name="iframe_txlbrchf"
					style={{ display: 'none' }}
					title="googleforms"
					/>
					<form
						id="ss-form"
						action="https://docs.google.com/forms/d/1qXZsxrL_2r3k8ZxMGKnJoD-dGNE0zih0lEl9X_22Ycw/formResponse"
						method="POST"
						target="iframe_txlbrchf"
						onSubmit={this._handleFormSubmit}>
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
								type="text"
								name="entry.1595218418"
								defaultValue className="ss-q-short valid"
								id="entry_1595218418"
								dir="auto"
								aria-label="Your plus one's name"
								title
							/>
							<input
								type="text"
								name="entry.1876395364"
								defaultValue
								className="ss-q-short"
								id="entry_1876395364"
								dir="auto"
								aria-label="Their email address"
								title
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
								/>
							</div>
							<ul
								className="ss-choices"
								role="radiogroup"
								aria-label="Will you be there?">
								<li className="ss-choice-item">
  								<label>
										<span className="ss-choice-item-control goog-inline-block">
											<input
												type="radio"
												name="entry.1348458845"
												defaultValue="Yep, I'll be there!"
												id="group_1348458845_1"
												role="radio" className="ss-q-radio"
												aria-label="Yep, I'll be there!"
												required aria-required="true" />
										</span>
    								<span className="ss-choice-label">Yep, I'll be there!</span>
  								</label>
								</li>
								<li className="ss-choice-item">
  								<label>
										<span className="ss-choice-item-control goog-inline-block">
											<input
												type="radio"
												name="entry.1348458845"
												defaultValue="Nope, can't make it"
												id="group_1348458845_2"
												role="radio" className="ss-q-radio"
												aria-label="Nope, can't make it"
												required aria-required="true" />
										</span>
    								<span className="ss-choice-label">Nope, can't make it</span>
  								</label>
								</li>
							</ul>
							<textarea
								name="entry.1429154593"
								rows={8}
								cols={0}
								className="ss-q-long valid"
								id="entry_1429154593"
								dir="auto"
								aria-label="Write us a message"
								defaultValue={""}
							/>
						</div>
						<p className="success_message">
							Thanks {this.state.nameValue}! You will get an invite at <span>{this.state.emailValue}</span> soon!
						</p>
				</form>
			</div>
		)
	}
}

export default RSVPForm

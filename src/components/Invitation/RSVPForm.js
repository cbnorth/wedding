import React, { Component } from 'react';
import classNames from 'classnames';
import MediaQuery from 'react-responsive';

import './invitation.css'

class RSVPForm extends Component {
	state = {
    guestName: '',
		plusOneName: '',
		shuttleInterest: false,
		attending: 'Yes',
		attendingBool: true,
		formSubmitted: false
	}

	_nameChange = e => {
		this.setState({
			nameValue: e.target.value
		})
	}

	_plusOneNameChange = e => {
		this.setState({
			plusOneName: e.target.value
		})
	}

	_attendingChange = e => {
		if (e.target.value === this.state.attending) {
			return false
		} else {
			this.setState({
				attending: e.target.value
			})
		}

		if (e.target.value === 'Yes') {
			this.setState({
				attendingBool: true
			})
		} else if (e.target.value === 'No') {
			this.setState({
				attendingBool: false,
				numberOfGuests: 0,
				plusOneName: '',
			})
		}
	}

	_shuttleInterestChange = () => {
		this.setState({
			shuttleInterest: !this.state.shuttleInterest
		})
	}

	_handleFormSubmit = e => {
		this.setState({
			formSubmitted: true
		})

		localStorage.setItem("name", this.state.nameValue);
		localStorage.setItem("submitted", true);
	}

	render() {
		const { attendingBool } = this.state
		var InputClass = classNames({
      isHidden: !this.state.attendingBool,
			selectContainer: true
    });

		return (
			<div className={this.props.className}>
				<h3>RSVP</h3>
				<button className="Exit" onClick={this.props.handleRSVPExit} />
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
						onSubmit={this._handleFormSubmit}
						>
						<div className="FlexContainer">
							<div className="left">
								<input
									id="entry_1069655472"
									type="text"
									name="entry.1069655472"
									dir="auto"
									aria-label="Your Name"
									aria-required="true"
									required
									placeholder="Your Name"
									className="ss-q-short"
									onChange={(e) => this._nameChange(e)}
									value={this.state.nameValue}
								/>
								<input
									type="text"
									name="entry.1595218418"
									id="entry_1595218418"
									dir="auto"
									aria-label="Your guest's name"
									placeholder="Your guest's name"
									title
									className={InputClass}
									onChange={(e) => this._plusOneNameChange(e)}
									value={this.state.plusOneName}
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
								<div className="FlexContainer">
									<div
										role="radiogroup"
										aria-label="Will you be there?"
										htmlFor="entry_445787275"
										onChange={this._attendingChange}>
										<div className="RadioGroup">
											<input
												type="radio"
												name="entry.1348458845"
												defaultValue="Yes"
												id="group_1348458845_1"
												role="radio"
												className="radio--yes"
												aria-label="Yes"
												checked={this.state.attending === 'Yes'}
											/>
											<label htmlFor="group_1348458845_1" className="radioLabel">
												Yep, I'll be there!
											</label>
										</div>
										<div className="RadioGroup">
											<input
												type="radio"
												name="entry.1348458845"
												defaultValue="No"
												id="group_1348458845_2"
												role="radio"
												className="radio--no"
												aria-label="No"
												checked={this.state.attending === 'No'}
											/>
											<label htmlFor="group_1348458845_2" className="radioLabel">
												Nope, can't make it
											</label>
										</div>
									</div>
								</div>
								<div className={`${InputClass} checkBoxContainer`} onChange={this._shuttleInterestChange}>
									<label className="ss-q-item-label" htmlFor="entry_1673189721">Are you interested in the shuttle service from Downtown?</label>
									<div className="FlexContainer FlexContainer--alignLeft">
										<input className="checkbox" type="checkbox" name="entry.227942666" defaultValue="Yes" id="group_227942666_1" role="checkbox" />
										<label className="radioLabel">Yes</label>
									</div>
								</div>
								<MediaQuery query="(max-width: 1023px)">
									<textarea
										name="entry.1429154593"
										rows={8}
										cols={0}
										className="ss-q-long valid"
										id="entry_1429154593"
										dir="auto"
										aria-label="Write us a message"
										placeholder="Write us a message"
										defaultValue={''}
									/>
								</MediaQuery>
							</div>
							<MediaQuery query="(min-width: 1024px)">
								<div className="right">
									<textarea
										name="entry.1429154593"
										rows={8}
										cols={0}
										className="ss-q-long valid"
										id="entry_1429154593"
										dir="auto"
										aria-label="Write us a message"
										placeholder="Write us a message"
										defaultValue={''}
									/>
								</div>
							</MediaQuery>
						</div>
						<div className="submit_container">
							<input
								id="ss-submit"
								type="submit"
								name="submit"
								defaultValue="Submit RSVP"
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

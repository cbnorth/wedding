import React, { Component } from 'react';
import ReactDOM, {findDOMNode} from 'react-dom';
import classNames from 'classnames';
import MediaQuery from 'react-responsive';
import Moment from 'moment'
import AddToCalendar from 'react-add-to-calendar';

import './invitation.css'

class RSVPForm extends Component {
	state = {
		nameValue: '',
		plusOneName: '',
		shuttleInterest: false,
		attending: 'Yes',
		attendingBool: true,
		event: {
      title: "Emma and Chris' wedding" ,
      location: "The Field's at Williw Green's, 19501 Tualco Road, Monrow, WA 98272",
			description: 'Ceremony starts prompty at 3:00pm, please allow extra time for traffic and plan to arrive bu 2:30pm.',
      startTime: '2018-09-29T15:00:00-07:00',
      endTime: '2018-09-29T22:30:00-07:00',
    },
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

	attachNode(node) {
    this._form = findDOMNode(node);
  }

  handleClick() {
    this._form.submit();
  }

	_handleFormSubmit = () => {
		this.props.handleFormSubmit();
		this._form.submit();
		localStorage.setItem("name", this.state.nameValue);
		localStorage.setItem("plusone", this.state.plusOneName);
		localStorage.setItem("attending", this.state.attendingBool);
	}

	render() {
		const { attendingBool } = this.state
		let InputClass = classNames({
      isHidden: !this.state.attendingBool,
			selectContainer: true
    });

		let FormClass = classNames({
      isHidden: this.props.formSubmitted,
    });

		let icon = { textOnly: 'none' };
		let items = [
			{ outlook: 'Outlook' },
			{ outlookcom: 'Outlook.com' },
			{ apple: 'Apple Calendar' },
			{ google: 'Google' },
		];

		return (
			<div className={this.props.className}>
				<h3>RSVP</h3>
				<button className="Exit" onClick={this.props.handleRSVPExit} />
				<div>
					<iframe
						id="iframe_txlbrchf"
						name="iframe_txlbrchf"
						style={{ display: 'none' }}
						title="googleforms"
					/>
					<form
					  action="https://docs.google.com/forms/d/e/1FAIpQLSf6hwXSSO_DRtClpvG6VMg4nUZV7eZGXMsPsEtD0yyFINjtOQ/formResponse"
					  method="POST"
					  id="ss-form"
					  target="iframe_txlbrchf"
					  autocomplete="on"
						className={`${FormClass}`}
						ref={this.attachNode.bind(this)}
					>
					  <div className="FlexContainer">
					    <div className="left">
					      <input type="text" name="entry.1069655472" value="" className="ss-q-short required" id="entry_1069655472" dir="auto" aria-label="Name  " aria-required="true" required="" title="" onChange={(e) => this._nameChange(e)} value={this.state.nameValue}/>
					      <input type="text" name="entry.1595218418" value="" className="ss-q-short valid" id="entry_1595218418" dir="auto" aria-label="Your plus one's name  " title="" onChange={(e) => this._plusOneNameChange(e)} value={this.state.plusOneName}/>
								<div className="FlexContainer">
									<div
										role="radiogroup"
										aria-label="Will you be there?"
										htmlFor="entry_445787275"
										onChange={this._attendingChange}>
										<div className="RadioGroup">
				        			<input type="radio" name="entry.1348458845" value="Yes" className="radio--yes" id="group_1348458845_1" role="radio" aria-label="Yes" required="" aria-required="true" checked={this.state.attending === 'Yes'}/>
											<label htmlFor="group_1348458845_1" className="radioLabel">
					              Yep, I'll be there!
					            </label>
					          </div>
										<div className="RadioGroup">
				        			<input type="radio" name="entry.1348458845" value="No" id="group_1348458845_2" className="radio--no" role="radio" aria-label="No" required="" aria-required="true" checked={this.state.attending === 'No'}/>
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
									<textarea name="entry.1429154593" rows="8" cols="0" className="ss-q-long" id="entry_1429154593" dir="auto" aria-label="Write us a message" placeholder="Write us a message" />
								</MediaQuery>
					    </div>
							<MediaQuery query="(min-width: 1024px)">
					      <div className="right">
					    		<textarea name="entry.1429154593" rows="8" cols="0" className="ss-q-long" id="entry_1429154593" dir="auto" aria-label="Write us a message" placeholder="Write us a message" />
								</div>
							</MediaQuery>
					  </div>
					  <input type="hidden" name="draftResponse" value="[null,null,&quot;6219015714501313108&quot;]" />
					  <input type="hidden" name="pageHistory" value="0" />
						<input type="hidden" name="fbzx" value="6219015714501313108" />
					</form>
					<div className={`${FormClass} submit_container`}>
				    <input
				      id="ss-submit"
				      type="submit"
				      name="submit"
				      defaultValue="Submit RSVP"
							onClick={this._handleFormSubmit}
				    />
				  </div>
				</div>
				{this.props.formSubmitted
						&& <div>
							{(localStorage.attending === 'true')
								? <div className="success_message--reload">
										<p> Thanks for RSVP'ing {localStorage.name}. We are so excited to share this day with you{localStorage.plusone !== '' && ` and ${localStorage.plusone}`}! We'll see you on Sept 29th, 2018!</p>
										<AddToCalendar
											event={this.state.event}
											buttonTemplate={icon}
											listItems={items}
										/>
									</div>
								: <div className="success_message--reload">
										<p> We're so bummed you can't attend, {localStorage.name}.</p>
										<p>If your situation changes or you change your mind we'd still love to see you on Sept 29th, 2018.</p>
									</div>
							}
						</div>
				}
			</div>
		)
	}
}

export default RSVPForm

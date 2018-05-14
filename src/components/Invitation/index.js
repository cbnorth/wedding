import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import Cookie from "js.cookie";
import MediaQuery from 'react-responsive';
import classNames from 'classnames';

import newZealand from './newzealand.jpg'

import RSVPForm from './RSVPForm'

import './invitation.css'

const Menu = ({items, onClick}) => (
	<div className="mobileMenu__items">
		{items.map((item, i) => <a href={`#${item}`} key={i} onClick={onClick}>{item}</a>)}
	</div>
)

class Invitation extends Component {
	state = {
		emailValue: '',
    nameValue: '',
		formSubmitted: false,
		mobileMenuOpen: false,
		mobileRVSP: false
	}

	componentDidMount() {
		if (localStorage.submitted === "true") {
			this.setState({
				submitted: true
			})
		}
	}

	_handleMenuButtonClick = e => {
		this.setState({
			mobileMenuOpen: !this.state.mobileMenuOpen
		})
	}

	_handleMobileRVSP(e) {
		e.preventDefault();
		this.setState({
			mobileRVSP: true
		})
	}

	_handleRVSPExit = () => {
		this.setState({
			mobileRVSP: false
		})
	}

	_handleMenuClick = () => {
		this.setState({
			mobileMenuOpen: false
		})
	}

	render() {
		if (!Cookie.get( "auth" )) {
      return <Redirect push to="/" />;
    }
		let mobileMenuHandler= classNames({
      'mobileMenu__open': this.state.mobileMenuOpen,
    });

		return (
			<div className={mobileMenuHandler}>
				{this.state.mobileRVSP && <RSVPForm className="MobileRVSPForm" handleRVSPExit={this._handleRVSPExit}/>}
				<MediaQuery query="(max-width: 1023px)">
					<div className='mobileMenu'>
						<button className="mobileMenu__Button" onClick={this._handleMenuButtonClick}><span /></button>
						<Menu items={["schedule", "location", "RSVP", "FAQ", "Registry", "Contact"]} onClick={this._handleMenuClick}/>
					</div>
				</MediaQuery>
				<section className="Invitation__LockUp">
					<div className="LockUp__Content">
						<h1>
							<span className="word Emma">
								<span className="e">E</span>
								<span className="m">M</span>
								<span className="m2">M</span>
								<span className="a">A</span>
							</span>
							<span className="word and">
								<span className="white">+</span>
							</span>
							<span className="word Chris">
								<span className="c">C</span>
								<span className="h">H</span>
								<span className="r">R</span>
								<span className="i">I</span>
								<span className="s">S</span>
							</span>
						</h1>
						<h2 className="Date">09.29.2018</h2>
						<MediaQuery query="(min-width: 1024px)">
							<Menu items={["schedule", "location", "RSVP", "FAQ", "Registry", "Contact"]} />
						</MediaQuery>
					</div>
				</section>
				<section className="SectionWhite">
					<div className="">
						<p>In the summer of 2014 Chris and Emma  met at Artusi, on Capitol Hill. Since that day they've been traveling the same path in life and have a built a strong and unbreakable partnership that has empowered them to travel the world, to buy a home, to lean on each other in goods times and bad and now to get married.</p>
						<p>We invite you, our family and dearest friends, to join us on September 29th, 2018 at the celebration of our partnership.</p>
						<MediaQuery query="(max-width: 1023px)">
							<button className="Button Button__RSVP" onClick={(e) => this._handleMobileRVSP(e)}>SEND YOUR RSVP</button>
						</MediaQuery>
					</div>
				</section>
				<section className="SectionDark" id="schedule">
					<div className="">
						<h3>Schedule</h3>
						<div className="Block">
							<h4>Ceremony</h4>
							<p>Starts prompty at 3:00pm, please allow extra time for traffic and plan to arrive 30 minutes early.</p>
						</div>
						<div className="Block">
							<h4>Reception</h4>
							<ul>
								<li>3:30 Drinks & lawn games</li>
								<li>5:30 Dinner & cake</li>
								<li>7:00 Dancing & mashmallow roasting</li>
							</ul>
						</div>
					</div>
				</section>
				<section className="SectionWhite" id="location">
						<h3>Location</h3>
						<a href="https://thefieldsatwilliegreens.com/" target="_blank" rel="noopener noreferrer">The Field's at Williw Green's</a>
						<p>19501 Tualco Road <br /> Monrow, WA 98272</p>
						<p>The venue is outdoors but covered, please dress accordingly - the party will continue rain or shine! Free parking is provided.</p>
						<iframe title="RVSP Form" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2678.9527079092018!2d-121.9866846843621!3d47.82113397919959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549aa737f6b2134d%3A0x81ec1304c29a76e6!2sThe+Fields+at+Willie+Green&#39;s!5e0!3m2!1sen!2sus!4v1526266233941" width="600" height="450" frameBorder="0" allowFullscreen></iframe>
				</section>
				<section className="SectionDark">
						<h3>Nearby Accommodations</h3>
				</section>
				<MediaQuery query="(min-width: 1024px)">
					<section className="SectionDark" id="RSVP">
							<RSVPForm className="RVSPForm" handleRVSPExit={this._handleRVSPExit}/>
					</section>
				</MediaQuery>
				<section className="SectionWhite" id="FAQ">
						<h3>FAQ</h3>
						<ul className="FAQ">
							<li>Do you have a registry? Can we bring a gift?
								<span>
									We’d be delighted if you helped us fund our post wedding trip! Visit our registry for more information.</span>
								<span> If you’d rather not show up empty handed, we ask that in lieu of gifts you bring your favorite 6 pack or bottle wine to help fill out the bar.</span>
							</li>
							<li>What will you be serving?
								<span>The menu is middle eastern and will include vegetarian, vegan, and gluen free options.</span>
								<span>Drinks are complimentary, but our bartenders welcome cash tips.</span>
							</li>
							<li>Can I bring a date?
								<span>Of course! If you’ve received a solo invitation but would like to bring a +1 please include their name when you RSVP.</span>
							</li>
							<li>Can I bring my kids?
								<span>The reception has been planned for guests 21 and older so please leave the kids (fur babies included) at home.</span>
							</li>
							<li>What should I wear?
								<span>Dress up fancy with us! We’d love to see your fun, semi-formal look (think suit or cocktail dress, not tux or gown). Please dress appropriately for the outdoors, i.e. lower temperature at night, potential rain, and grass/gravel paths.</span>
							</li>
							<li>Can I take pictures?
								<span>We'd prefer if you didn't take photos during the ceremony, but feel free to snap away at any other time.</span>
								<span>If you're feeling social, share via the hashtag #loremipsum on your preferred social network. All professional photos will be available for you to view online once they've been processed by our photographer.</span>
							</li>
							<li>Anything else I should know?
								<span>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor.</span>
							</li>
						</ul>
				</section>
				<section className="SectionDark" id="Registry">
						<h3>Registry</h3>
						<div className="ImageBlock">
							<p>Help us fund our post wedding trip to New Zealand! Contribute online through Blueprint Registries.</p>
							<div className="ImageContainer">
								<img  src={newZealand} alt="A road in New Zealand, water to the right, mountains in the distance"/>
							</div>
						</div>
						<a href="" target="_blank" rel="noopener noreferrer" className="Button">View Registry</a>
				</section>
			</div>
		)
	}

	static propTypes = {}
}

export default Invitation

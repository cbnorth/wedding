import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import Cookie from "js.cookie";
import MediaQuery from 'react-responsive';
import classNames from 'classnames';
import AnchorLink from 'react-anchor-link-smooth-scroll'

import thailand from './thailand.jpg'
import us from './chris_emma.png'

import RSVPForm from './RSVPForm'

import './invitation.css'

const Menu = ({items, className, onClick}) => (
	<div className={className}>
		{items.map((item, i) => <AnchorLink href={`#${item}`} key={i} onClick={onClick} offset='127'>{item}</AnchorLink>)}
	</div>
)

class Invitation extends Component {
	state = {
		emailValue: '',
    nameValue: '',
		formSubmitted: false,
		mobileMenuOpen: false,
		mobileRSVP: false
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

	_handleMobileRSVP(e) {
		e.preventDefault();
		this.setState({
			mobileRSVP: true
		})
	}

	_handleRSVPExit = () => {
		this.setState({
			mobileRSVP: false
		})
	}

	_handleMenuClick = () => {
		this.setState({
			mobileMenuOpen: false
		})
	}

	render() {
		//there is a bug here - I don't think the cookie is being set properly
		// if (!Cookie.get( "auth" )) {
    //   return <Redirect push to="/" />;
    // }
		let mobileMenuHandler= classNames({
      'MobileMenu__open': this.state.mobileMenuOpen,
			invitationPage: true
    });

		return (
			<div className={mobileMenuHandler}>
				{this.state.mobileRSVP && <RSVPForm className="MobileRSVPForm" handleRSVPExit={this._handleRSVPExit}/>}
				<MediaQuery query="(max-width: 1023px)">
					<div className='MobileMenu'>
						<button className="MobileMenu__Button" onClick={this._handleMenuButtonClick}><span /></button>
						<Menu items={["schedule", "location", "RSVP", "FAQ", "Registry", "Contact"]} className="MobileMenu__items" onClick={this._handleMenuClick}/>
					</div>
				</MediaQuery>
				<section className="Invitation__LockUp">
					<div className="LockUp__Content">
						<div className="LockUp__Title"><h1>Emma + Chris</h1></div>
						<h2 className="Date">09.29.18</h2>
						<MediaQuery query="(min-width: 1024px)">
								<Menu items={["schedule", "location", "RSVP", "FAQ", "Registry", "Contact"]} className="Menu__items" onClick={this._handleMenuClick}/>
						</MediaQuery>
					</div>
				</section>
				<section className="SectionWhite overflowImage">
					<div className="AboutUs SectionInner">
						<div className="AboutUs__Copy">
							<p>In the summer of 2014 Chris and Emma met on Capitol Hill. They had their first date at Le Zinc (later Naka and then Adana). They thought it was kind of horrible and decided to jump out the window and run down the street to start their date over at what is still one of their favorite spots in the city, Artusi. </p>
							<p>Since that day they've been traveling the same path in life and have a built a strong and unbreakable partnership that has empowered them to travel the world, to buy a home, to lean on each other in goods times and bad and now to get married.</p>
							<p>We invite you, our family and dearest friends, to join us on September 29th, 2018 at the celebration of our partnership.</p>
						</div>
						<MediaQuery query="(min-width: 1024px)">
								<img  src={us} alt="A road in New Zealand, water to the right, mountains in the distance" className="AboutUs__Photo"/>
						</MediaQuery>
						<MediaQuery query="(max-width: 1023px)">
							<button  id="RSVP" className="Button Button__RSVP" onClick={(e) => this._handleMobileRSVP(e)}>SEND YOUR RSVP</button>
						</MediaQuery>
					</div>
				</section>
				<section className="SectionDark" id="schedule">
					<div className="SectionInner">
						<h3>Schedule</h3>
						<div className="DetailsContainer">
							<div className="DetailsContainer__Copy">
								<h4>Ceremony</h4>
								<p>Starts prompty at 3:00pm, please allow extra time for traffic and plan to arrive 30 minutes early.</p>
							</div>
							<div className="DetailsContainer__Copy">
								<h4>Reception</h4>
								<ul>
									<li>3:30 Drinks & lawn games</li>
									<li>5:30 Dinner & cake</li>
									<li>7:00 Dancing & mashmallow roasting</li>
								</ul>
							</div>
						</div>
					</div>
				</section>
				<section className="SectionWhite" id="location">
					<div className="LocationContainer SectionInner">
						<div className="LocationContainer__Copy">
							<h3>Location</h3>
							<a href="https://thefieldsatwilliegreens.com/" target="_blank" rel="noopener noreferrer">The Field's at Williw Green's</a>
							<p>19501 Tualco Road <br /> Monrow, WA 98272</p>
							<p>The venue is outdoors but covered, please dress accordingly - the party will continue rain or shine! Free parking is provided.</p>
						</div>
						<iframe title="RSVP Form" className="GoogleMap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21431.648289923385!2d-122.00195332489723!3d47.821069481027855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549aa737f6b2134d%3A0x62fc280347b37d6a!2sWillie+Green&#39;s+Organic+Farm!5e0!3m2!1sen!2sus!4v1526742805583" width="600" height="450" frameBorder="0" allowFullScreen></iframe>
					</div>
				</section>
				<section className="SectionDark">
					<div className="SectionInner">
						<h3>Shuttle Service</h3>
						<p>The venue is about a 45 minute drive outside of Seattle. We want everyone to have fun and let loose, but also be safe. We've priced out Uber rides to and from the venue, they are about $60 each way from downtown Seattle, which is a bit pricey. If there is enough interest we're going to arrange a shuttle service from downtown to the venue and back again. If you're interested in the service please submit your email here and number of seats required here.</p>
					</div>
				</section>
				<MediaQuery query="(min-width: 1024px)">
					<section className="SectionDark SectionDark--darker" id="RSVP">
						<div className="SectionInner">
							<RSVPForm className="RSVPForm" handleRSVPExit={this._handleRSVPExit}/>
						</div>
					</section>
				</MediaQuery>
				<section className="SectionWhite" id="FAQ">
					<div className="SectionInner">
						<h3>FAQ</h3>
						<div className="FAQContainer">
							<ul className="FAQs">
								<li><h4>Do you have a registry?</h4>
									<p>
										Gifts are great, but we don't want or need for much and it's most important to us that we share this day with you! That being said, we're not made of money and we’d be delighted if you helped us fund our post wedding trip! Visit <a  href="" target="_blank" rel="noopener noreferrer">our registry</a> for more information.</p>
									<p> If you’d rather not show up empty handed, we ask that in lieu of gifts you bring your favorite 6 pack or bottle wine to help fill out the bar.</p>
								</li>
								<li><h4>Are you changing your names?</h4>
									<p>
										Yes! But probably not what you were thinking. Chris and Emma will both be changing their names and we'll share that with you on the day.
									</p>
								</li>
								<li><h4>What will you be serving?</h4>
									<p>The menu is middle eastern and will include vegetarian, vegan, and gluen free options.</p>
									<p>Drinks are complimentary, but our bartenders welcome cash tips.</p>
								</li>
								<li><h4>Can I bring a date?</h4>
									<p>Of course! If you’ve received a solo invitation but would like to bring a +1 please include their name when you RSVP.</p>
								</li>
								<li><h4>Can I bring my kids?</h4>
									<p>The reception has been planned for guests 21 and older so please leave the kids (fur babies included) at home.</p>
								</li>
								<li><h4>What should I wear?</h4>
									<p>Dress up fancy with us! We’d love to see your fun, semi-formal look (think suit or cocktail dress, not tux or gown). Please dress appropriately for the outdoors, i.e. lower temperature at night, potential rain, and grass/gravel paths.</p>
								</li>
								<li><h4>Can I take pictures?</h4>
									<p>We'd prefer if you didn't take photos during the ceremony, but feel free to snap away at any other time.</p>
									<p>If you're feeling social, share via the hashtag #loremipsum on your preferred social network. All professional photos will be available for you to view online once they've been processed by our photographer.</p>
								</li>
							</ul>
						</div>
					</div>
				</section>
				<section className="SectionDark SectionDark--darker Registry" id="Registry">
					<div className="SectionInner">
						<h3>Registry</h3>
						<div className="Registry__Content">
							<p>We were hoping to take the road trip of a lifetime through New Zealand, then we bought a house so we've scalled back a bit and are going back to SE Asia! Contribute online through Blueprint Registries to help us get out of town!
								<MediaQuery query="(min-width: 1024px)">
									<a href="https://www.blueprintregistry.com/registry/jamesburke" target="_blank" rel="noopener noreferrer" className="Button">View Registry</a>
								</MediaQuery>
							</p>
							<div className="ImageContainer">
								<img  src={thailand} alt="A road in New Zealand, water to the right, mountains in the distance"/>
							</div>
						</div>
						<MediaQuery query="(max-width: 1023px)">
								<a href="https://www.blueprintregistry.com/registry/jamesburke" target="_blank" rel="noopener noreferrer" className="Button">View Registry</a>
						</MediaQuery>
					</div>
				</section>
				<section className="SectionDark Footer" id="Questions">
					<div className="SectionInner">
						<h3>Questions?</h3>
						<p>Text or email us before the wedding if you have any questions, we assume if you're invited that you know how to get ahold of us :)</p>
					</div>
				</section>
			</div>
		)
	}

	static propTypes = {}
}

export default Invitation

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import mapImage from './map.jpg';

import './savethedate.css';
import './savethedate.css';


const LockUp = () => (
  <div className="LockUp">
    <h1>09.29.18</h1>
    <p>We're getting married and we want you to come to our wedding! Please come and help us laugh, dance, eat, drink and celebrate our love. The date is September 29, 2018, so please save the date and send us your email address below so you can get the proper invite when the time comes. </p>
  </div>
)

class SaveTheDate extends Component {

  render() {
    return (
      <div className="SaveTheDate">
        <LockUp />
        <section className="Container Container--light">
          <a href="https://goo.gl/maps/WEnG2koKFyE2" className="MapLink" target="blank"></a>
          <h1>Location</h1>
          <h2>The Field’s at Willie Green’s
            <span>19501 Tualco Road
                  Monroe, WA 98272</span>
          </h2>
          <p>The venue is outdoors but covered, please dress accordingly - the party will continue rain or shine! Free parking is provided.</p>
        </section>
      </div>
    );
  }

  static propTypes = {

  }
}

export default SaveTheDate;

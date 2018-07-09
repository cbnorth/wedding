import React, { Component } from "react";
import Slider from 'react-slick'

import fancy from '../photos/fancy.png'
import jump from '../photos/jump.png'
import old from '../photos/old.png'
import peru from '../photos/peru.png'
import plane from '../photos/plane.png'
import sanjuans from '../photos/sanjuans.png'
import sounders from '../photos/sounders.png'

export default class Slideshow extends Component {
  render() {
    var settings = {
      className: "slider variable-width",
      variableWidth: true,
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div>
        <h2> Responsive </h2>
        <Slider {...settings}>
          <div>
            <h3>
              <img  src={old} alt="A road in New Zealand, water to the right, mountains in the distance" className="AboutUs__Photo"/>
            </h3>
          </div>
          <div>
            <h3>
              <img  src={jump} alt="A road in New Zealand, water to the right, mountains in the distance" className="AboutUs__Photo"/>
            </h3>
          </div>
          <div>
            <h3>
              <img  src={sanjuans} alt="A road in New Zealand, water to the right, mountains in the distance" className="AboutUs__Photo"/>
            </h3>
          </div>
          <div>
            <h3>
              <img  src={fancy} alt="A road in New Zealand, water to the right, mountains in the distance" className="AboutUs__Photo"/>
            </h3>
          </div>
          <div>
            <h3>
              <img  src={plane} alt="A road in New Zealand, water to the right, mountains in the distance" className="AboutUs__Photo"/>
            </h3>
          </div>
          <div>
            <h3>
              <img  src={peru} alt="A road in New Zealand, water to the right, mountains in the distance" className="AboutUs__Photo"/>
            </h3>
          </div>
          <div>
            <h3>
              <img  src={sounders} alt="A road in New Zealand, water to the right, mountains in the distance" className="AboutUs__Photo"/>
            </h3>
          </div>
        </Slider>
      </div>
    );
  }
}

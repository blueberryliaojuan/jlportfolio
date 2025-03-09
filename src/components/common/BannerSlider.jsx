import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export class BannerSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <Slider {...settings}>
        <div>
          <h3>slide 1</h3>
        </div>
        <div>
          <h3>slide 2</h3>
        </div>
        <div>
          <h3>slide 3</h3>
        </div>
        <div>
          <h3>slide 4</h3>
        </div>
      </Slider>
    );
  }
}

export default BannerSlider;

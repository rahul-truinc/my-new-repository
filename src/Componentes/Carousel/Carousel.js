import React, { Fragment } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Carousel.css'

const Carousel = ({ Carouselvalue }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };
  return (
    <div>
      <Slider {...settings}>

        {Carouselvalue.homeCarousel.map((item) =>
          <img src={item.image} />
        )}
      </Slider>
    </div>
  )
}

export default Carousel

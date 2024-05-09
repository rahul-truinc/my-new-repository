import React, { Fragment } from 'react'
import Carousel from '../Componentes/Carousel/Carousel'
import Container from '../Componentes/Container/Container'
import Card from '../Componentes/Card/Card'
import homePageData from '../API/HomeData.json'
import MultiCarousel from '../Componentes/MultiCarousel/MultiCarousel'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 

const Home = () => {
  const settings3 = {
    prevArrow: false,
    nextArrow: false,
    dots: true,
    autoplay: false,
    slidesToShow: 1,
  };
  return (
    <Fragment>
      <Container value='main-container'>
        <Carousel Carouselvalue={homePageData} />
        <div className='cardHeading'>
          <h2>{homePageData.cardHeading}</h2>
        </div>
        {homePageData.cardImage.map((imgkey, imgvalue) =>
          <Card key={imgvalue} values={imgkey} />
        )}
      </Container>
      <Container value='main-container lite-yellow-bg'>
        <div className='FeaturedHeading'>
          <h2>{homePageData.FeaturedHeading}</h2>
          <p>{homePageData.Featuredpera}</p>
        </div>
        <div className='d-flex d-Carousel'>
          {homePageData.MultiCarousel.map((Multivalue, Multikey) =>
            <MultiCarousel key={Multikey} value={Multivalue} />
          )}
        </div>
        <div className='m-Carousel'>
          <Slider {...settings3}>
            {homePageData.MultiCarousel.map((Multivalue, Multikey) => 
              <MultiCarousel key={Multikey} value={Multivalue} />
            )}
          </Slider>
        </div>
      </Container>
      <Container value='main-container Ourstores-container'>
        <div className='OurstoresdHeading'>
          <h2>{homePageData.OurstoresdHeading}</h2>
        </div>
        <div className='d-flex d-Carousel'>
          {homePageData.Ourstores.map((Multivalue, Multikey) =>
            <MultiCarousel key={Multikey} value={Multivalue} />
          )}
        </div>
      </Container>
    </Fragment>
  )
}

export default Home

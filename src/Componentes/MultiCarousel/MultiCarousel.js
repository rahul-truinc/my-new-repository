import React, { Fragment } from 'react'
import  './MultiCarousel.css'
import { Link } from 'react-router-dom'

const MultiCarousel = ({ value }) => {
    return (
        <Fragment>
            <div className='carouselCard'>
                <div className='carouselCard-img'>
                    <img src={value.image} />
                </div>
                <div className="carouse-card-title">
                    <h3>
                        <Link to='#'>{value.ctaText}</Link>
                    </h3>
                </div>

            </div>
        </Fragment>
    )
}

export default MultiCarousel

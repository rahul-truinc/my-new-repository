import React, { Fragment } from 'react'
import './Card.css'


const Card = ({values, imagedata}) => {
    return (
        <Fragment>
            <div className='d-flex card-box'>
                <div className='imgCard col-left'>
                    <img src={values.cardImageLeft} alt=''/>
                </div>
                <div className='imgCard col-mid'>
                    <img src={values.cardImageMidUp} alt=''/>
                    <img src={values.cardImagemiddw} alt=''/>
                </div>
                <div className='imgCard col-right'>
                    <img src={values.cardImageRightup} alt=''/>
                    <img src={values.cardImageRightdw} alt=''/>
                </div>
            </div>
        </Fragment>
    )
}

export default Card

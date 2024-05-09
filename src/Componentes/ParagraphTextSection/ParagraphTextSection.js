import React, { Fragment } from 'react'
import './ParagraphTextSection.css'

const ParagraphTextSection = ({ value }) => {
    return (
        <Fragment>
            <div className='paragraphTextsectionwrap'>
                <h2 className='paragraphTextheading'>{value?.paragraphTextheading}</h2>
                <p className='paragraphTextcontent'>{value.paragraphTextcontent}</p>
            </div>
        </Fragment>
    )
}

export default ParagraphTextSection
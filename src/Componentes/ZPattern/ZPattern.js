import React from 'react'
import './ZPattern.css'

const ZPattern = ({value}) => {
    return (
        <div className='zPatternWrap d-flex'>
            <div className='zPatternleft'><h1>{value.ZPatterntext}</h1></div>
            <div className='zPatternright'><img src={value.ZPatternimg}/></div>
        </div>
    )
}

export default ZPattern

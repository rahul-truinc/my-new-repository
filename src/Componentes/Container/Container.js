import React, { Fragment } from 'react'
import './Container.css'

const Container = ({
    value,
    children
}) => {
    return (
        <Fragment>
            <div className={value}>
                <div className='container'>
                    {children}
                </div>
            </div>
        </Fragment>
    )
}

export default Container

import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import './Breadcrumb.css'

const Breadcrumb = () => {
    return (
        <Fragment>
            <div className='siteBreadcrumb'>
                <ul className='siteBreadcrumbWrap d-flex'>
                    <li>
                        <Link to="/Home">Home</Link>
                    </li>
                    <li>
                    <Link to="/AboutUs">About</Link>
                    </li>
                </ul>
            </div>
        </Fragment>
    )
}

export default Breadcrumb

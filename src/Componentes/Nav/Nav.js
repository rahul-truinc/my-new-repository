import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Container from '../Container/Container'
import './Nav.css'

const Nav = () => {
    return (
        <Fragment>
            <Container value='main-container'>
                <div className="collapse navbar-collapse collapse navbar-collapse">
                    <ul className='main-nav'>
                        <li className='main-nav-list'>
                            <Link to='Home' className='link-menu'>About Us</Link>
                            <div className='child-nav'>
                                <ul className='main-nav-child'>
                                    <li className='main-nav-list-child'>
                                        <Link to='AboutUs' className='link-menu-child'>Our story</Link>
                                    </li>
                                    <li className='main-nav-list-child'>
                                        <Link to='our-partners' className='link-menu-child'>Our partners</Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className='main-nav-list'>
                            <Link to='Recipes' className='link-menu'>Recipes</Link>
                            <div className='child-nav'>
                                <ul className='main-nav-child'>
                                    <li className='main-nav-list-child'>
                                        <Link to='AboutUs' className='link-menu-child'>All recipes</Link>
                                    </li>
                                    <li className='main-nav-list-child'>
                                        <Link to='Recipes' className='link-menu-child'>By country</Link>
                                    </li>
                                    <li className='main-nav-list-child'>
                                        <Link to='Recipes' className='link-menu-child'>By category</Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className='main-nav-list'>
                            <Link to='Specialties' className='link-menu'>Specialties</Link>
                        </li>
                        <li className='main-nav-list'>
                            <Link to='PrivateBrand' className='link-menu'>Private Brand</Link>
                        </li>
                        <li className='main-nav-list'>
                            <Link to='ContactUs' className='link-menu'>Contact Us</Link>
                        </li>
                        <li className='main-nav-list'>
                            <Link to='Careers' className='link-menu'>Careers</Link>
                        </li>
                    </ul>
                </div>
            </Container>
        </Fragment>
    )
}

export default Nav

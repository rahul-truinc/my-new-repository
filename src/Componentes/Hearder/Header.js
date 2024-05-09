import React, { Fragment } from 'react'
import Container from '../Container/Container'
import './Header.css'
import headerData from '../../API/Header.json';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Fragment>
            <Container value='main-container  bg-black'>
                <div className='d-flex align-items-center white-color top-nav'>
                    <div className='top-header-left'>
                        <i className="icon-top-nav-store-location"></i>
                        <a href="https://www.kimphat.com/en/stores/kim-phat-jarry/" >
                            <span >Kim Phat Jarry</span>
                            <span >09:00 - 19:00</span>
                        </a>
                    </div>
                    <div className="top-header-button-left">
                        <a href="/en/store-locator/" role="button">
                            <span className="button-text">Find a store</span>
                        </a>
                    </div>
                    <div className="top-header-menu-right">
                        <ul className="menu-horizontal">
                            <li className="lang-item list-en">
                                <a href="https://www.kimphat.com/en/" className="nav-link">EN</a>
                            </li>
                            <li className="lang-item list-fr">
                                <a href="https://www.kimphat.com/fr/" className="nav-link" hreflang="fr-CA" lang="fr-CA">FR</a>
                            </li>
                            <li className="menu-item list-button">
                                <a target="_blank" href="https://voila.ca/products?source=toptabs&amp;sublocationId=3a3d2da1-aef1-4eb9-b725-a7665ac5077f" className="nav-link">Voilà par IGA</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </Container>
            <Container value='main-container'>
                <div className='d-flex logo-search-section'>
                    <div className='logo'>
                    <Link to="Home"><img src={headerData.logo} /></Link>
                        
                    </div>
                    <div className='seachBar'>
                        <div className='d-flex flex-wrap'>
                            <div className="campaigns-search">
                                <form className='search-form'>
                                    <input className="campaigns-search-input" aria-label="Search" placeholder='Enter search keywords or phrase' type="search" name="search" />
                                    <button className="campaigns-search-btn" aria-label="Search Article">
                                        <span className="icon-search"></span>
                                    </button>

                                </form>
                            </div>
                            <div className="quicklinks-inner d-flex">
                                <span className="quicklinks-label">Trending Now —</span>
                                <ul className='d-flex'>
                                    <li>
                                        <a href="/en/recipes/" target="_self">Recipes</a>
                                    </li>
                                    <li>
                                        <a href="/en/flyer/" target="_self">Flyer</a>
                                    </li>
                                    <li>
                                        <a href="/en/store-locator/" target="_self">Store Links</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </Fragment>
    )
}

export default Header


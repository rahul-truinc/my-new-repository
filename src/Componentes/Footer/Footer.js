import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
import Container from '../Container/Container'
import footerData from '../../API/Footer.json'
import Newsletter from '../Newsletter/Newsletter'

const Footer = () => {
    return (
        <Fragment>
        <Container value='main-container yelow-bg'>
      {footerData.NewsletterData.map((Multivalue, Multikey) =>
            <Newsletter kye={Multikey} value={Multivalue}/>
          )}
      </Container>
            <Container value='main-container red-bg'>
                <div className='d-flex'>
                    <div className='footer-Logo'>
                        <img src={footerData.footerLogo}/>
                    </div>
                    <div className='footerMenu-col-1'>
                        <p className="menuHeading">{footerData.footercol1heading}</p>
                        <ul className="menuFooterOne">
                            <li className="menuFooterOne-list">
                                <Link to="" className='menuFooterOne-list-CTA'>{footerData.footerlinkcol1text1}</Link>
                            </li>
                            <li className="menuFooterOne-list">
                                <Link to="" className='menuFooterOne-list-CTA'>{footerData.footerlinkcol1text2}</Link>
                            </li>
                            <li className="menuFooterOne-list">
                                <Link to="" className='menuFooterOne-list-CTA'>{footerData.footerlinkcol1text3}</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='footerMenu-col-2'>
                        <p className="menuHeading">{footerData.footercol2heading}</p>
                        <ul className="menuFooterOne">
                            <li className="menuFooterOne-list">
                                <Link to="" className='menuFooterOne-list-CTA'>{footerData.footerlinkcol2text1}</Link>
                            </li>
                            <li className="menuFooterOne-list">
                                <Link to="" className='menuFooterOne-list-CTA'>{footerData.footerlinkcol2text2}</Link>
                            </li>
                            <li className="menuFooterOne-list">
                                <Link to="" className='menuFooterOne-list-CTA'>{footerData.footerlinkcol2text3}</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='footerMenu-col-3'>
                        <p className="menuHeading">{footerData.footercol3heading}</p>
                        <ul className="menuFooterOne">
                            <li className="menuFooterOne-list">
                                <Link to="" className='menuFooterOne-list-CTA'>{footerData.footerlinkcol3text1}</Link>
                            </li>
                            <li className="menuFooterOne-list">
                                <Link to="" className='menuFooterOne-list-CTA'>{footerData.footerlinkcol3text2}</Link>
                            </li>
                            <li className="menuFooterOne-list">
                                <Link to="" className='menuFooterOne-list-CTA'>{footerData.footerlinkcol3text3}</Link>
                            </li>
                            <li className="menuFooterOne-list">
                                <Link to="" className='menuFooterOne-list-CTA'>{footerData.footerlinkcol3text4}</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='FooterMedia-col-3'>
                        <p className="menuHeading">Quick Links</p>
                    </div>
                </div>
                <div className='footerOtherinfo'>
                    <ul className='footerInfo d-flex'>
                        <li><Link to="">© Kim Phat Inc. 2024</Link></li>
                        <li><Link to="">Privacy Policy</Link></li>
                        <li><Link to="">Terms & Conditions</Link></li>
                    </ul>
                </div>
            </Container>
        </Fragment>
    )
}

export default Footer

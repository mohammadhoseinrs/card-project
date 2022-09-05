import React from 'react'
import './Footer.css'
import logo from './../assets/logo.svg'
import instagram from './../assets/instagram.svg'
import linkedin from './../assets/linkedin.svg'
import facebook from './../assets/facebook.svg'
import twitter from './../assets/twitter.svg'

export default function Footer() {
  return (
    <div className='footer'>
        <div className="footer__top">
            <div className="footer__top__left">
                <div className="footer__top__left__logo">
                    <img src={logo} alt="" />
                </div>
                <p>
                A new way to make the payments easy, reliable and secure.
                </p>
            </div>
            <div className="footer__top__right">
                <ul>
                    <h3>Usefull Links</h3>
                    <li>Content</li>
                    <li>How it Works</li>
                    <li>Create</li>
                    <li>Explore</li>
                    <li>Terms & Services</li>
                </ul>
                <ul>
                    <h3>Community</h3>
                    <li>Help Center</li>
                    <li>Partners</li>
                    <li>Suggestions</li>
                    <li>Blog</li>
                    <li>Newsletters</li>
                </ul>
                <ul>
                    <h3>Partner</h3>
                    <li>Our Partner</li>
                    <li>Become a Partner</li>
                </ul>
            </div>
        </div>
        <div className="footer__bottom">
            <div className="footer__bottom__left">
                <p>Copyright</p>
                <p>2021 HooBank. All Rights Reserved.</p>
            </div>
            <ul className="footer__bottom__right">

                    <li><img src={instagram} alt="" /></li>
                    <li><img src={linkedin} alt="" /></li>
                    <li><img src={facebook} alt="" /></li>
                    <li><img src={twitter} alt="" /></li>

                </ul>
        </div>
    </div>
  )
}

import React, { useState } from 'react'
import './Header.css'
import logo from './../assets/logo.svg'
import {GiHamburgerMenu} from 'react-icons/gi'
import HamburgeMenu from './HamburgeMenu'
export default function Header({setShowHam}) {
  const clickhandler=()=>{
    console.log('hiii');
    setShowHam(true)
  }
  return (
    <>
    <div className='header__navbar'>
        <div className="header__navbar__left">
            <img src={logo} alt="" />
        </div>
        <div className="header__navbar__left">
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>features</li>
                <li>solution</li>
            </ul>
        </div>
        <div className="header__navbar__hamburger__menu">
          <GiHamburgerMenu  onClick={clickhandler} />
        </div>
    </div>
  </>
  )
}

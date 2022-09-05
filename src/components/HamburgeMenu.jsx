import React from 'react'
import './HamburgerMenu.css'
import {CgClose} from 'react-icons/cg'
export default function HamburgeMenu({setShowHam}) {
  return (
    <div className='hamburgermenu'>
        <div className="hamburgermenu__left">
            <div className="hamburgermenu__left__top">
                <CgClose color='#ffffff' onClick={()=>setShowHam(false)} />
            </div>
            <div className="hamburgermenu__left__bottom">
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>features</li>
                <li>solution</li>
            </ul>
            </div>
        </div>
        <div className="hamburgermenu__right">
            
        </div>
    </div>
  )
}

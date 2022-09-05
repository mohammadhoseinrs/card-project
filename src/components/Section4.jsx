import React from 'react'
import './Section4.css'
import bill from './../assets/bill.png'
import google from './../assets/google.svg'
import apple from './../assets/apple.svg'

export default function Section4() {
  return (
    <div className='section4'>
    <div className="section4__left">
        <div className="section4__left__blur">
            sacascasc
        </div>
    <img src={bill} alt="" />
    </div>
    <div className="section4__right">
        <div className="section4__right__title">
        Easily control your billing & invoicing.
        </div>
        <p className='section4__right__text'>
        Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
        </p>
        <div className="section4__right__bottom">
            <img src={google} alt="" />
            <img src={apple} alt="" />
        </div>
        </div>
    </div>
  )
}

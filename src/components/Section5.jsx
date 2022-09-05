import React from 'react'
import './Section5.css'
import card from './../assets/card.png'
export default function Section5() {
  return (
    <div className='section5'>
        <div className="section5__left">
            <img src={card} alt="" />
        </div>
        <div className="section5__right">
            <div className="section5__right__title">
            Find a better card deal in few easy steps.
            </div>
            <p className='section5__right__text'>
            Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
            </p>
            <button className='section3__left__btn'>
                Get Started
            </button>
            </div>
    </div>
  )
}

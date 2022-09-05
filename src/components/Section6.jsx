import React from 'react'
import './Section6.css'
import qo from './../assets/quotes.svg'
import people1 from './../assets/people01.png'
import people2 from './../assets/people02.png'
import people3 from './../assets/people03.png'


export default function Section6() {
  return (
    <div className='section6'>
        <div className="section6__top">
            <div className="section6__top__left">
            What people are saying about us
            </div>
            <div className="section6__top__right">
            Everything you need to accept card payments and grow your business anywhere on the planet.
            </div>
        </div>
        <div className="section6__bottom">
            <ul>
                <li className='section6__bottom__selected'>
                    <div className='section6__bottom__qo'>
                        <img src={qo} />
                    </div>
                    <p className='section6__bottom__text'>
                    Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.
                    </p>
                    <div className='section6__bottom__bottom'>
                        <div className='section6__bottom__bottom__left'>
                            <img src={people1} alt="" />
                        </div>
                        <div className='section6__bottom__bottom__right'>
                            <p>Herman Jensen</p>
                            <span>Founder & Leader</span>
                        </div>
                    </div>
                </li>
                <li>
                    <div className='section6__bottom__qo'>
                        <img src={qo} />
                    </div>
                    <p className='section6__bottom__text'>
                    Money makes your life easier. If you're lucky to have it, you're lucky.
                    </p>
                    <div className='section6__bottom__bottom'>
                        <div className='section6__bottom__bottom__left'>
                            <img src={people2} alt="" />
                        </div>
                        <div className='section6__bottom__bottom__right'>
                            <p>Steve Mark</p>
                            <span>Founder & Leader</span>
                        </div>
                    </div>
                </li>
                <li>
                    <div className='section6__bottom__qo'>
                        <img src={qo} />
                    </div>
                    <p className='section6__bottom__text'>
                    It is usually people in the money business, finance, and international trade that are really rich.
                    </p>
                    <div className='section6__bottom__bottom'>
                        <div className='section6__bottom__bottom__left'>
                            <img src={people3} alt="" />
                        </div>
                        <div className='section6__bottom__bottom__right'>
                            <p>Kenn Gallagher</p>
                            <span>Founder & Leader</span>
                        </div>
                    </div>
                </li>

            </ul>
        </div>
    </div>
  )
}

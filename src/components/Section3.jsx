import React from 'react'
import './Section3.css'
import star from './../assets/Star.svg'
import shield from './../assets/Shield.svg'
import send from './../assets/Send.svg'
export default function Section3() {
  return (
    <div className='section3'>
        <div className="section3__left">
            <div className="section3__left__title">
            You do the business, we’ll handle the money.
            </div>
            <p className='section3__left__text'>
            With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.
            </p>
            <button className='section3__left__btn'>Get Started</button>
        </div>
        <div className="section3__right">
            <ul>
                <li>
                    <img src={star} />
                    <div>
                        <p>Rewards</p>
                        <span>
                        The best credit cards offer some tantalizing combinations of promotions and prizes
                        </span>
                    </div>
                </li>
                <li className='section3__right__selected'>
                    <img src={shield} />
                    <div>
                        <p>100% Secured</p>
                        <span>
                        We take proactive steps make sure your information and transactions are secure.
                        </span>
                    </div>
                </li>
                <li>
                    <img src={send} />
                    <div>
                        <p>Balance Transfer</p>
                        <span>A balance transfer credit card can save you a lot of money in interest charges.</span>
                    </div>
                </li>
            </ul>
            </div>
    </div>
  )
}

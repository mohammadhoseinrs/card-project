import React from "react";
import "./Section7.css";
import dropbox from "./../assets/dropbox.png";
import binance from "./../assets/binance.png";
import airbnb from "./../assets/airbnb.png";
import coinbase from "./../assets/coinbase.png";
export default function Section7() {
  return (
    <div className="section7">
      <ul className="section7__top">
        <li>
          <img src={dropbox} alt="" />
        </li>
        <li>
          <img src={binance} alt="" />
        </li>
        <li>
          <img src={airbnb} alt="" />
        </li>
        <li>
          <img src={coinbase} alt="" />
        </li>
      </ul>
      <div className="section7__bottom">
        <div className="section7__bottom__left">
            <h3>Let’s try our service now!</h3>
            <p>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
        </div>
        <div className="section7__bottom__right">
            <button className="section3__left__btn">Get Started</button>
         </div>
      </div>
    </div>
  );
}

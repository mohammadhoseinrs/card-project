import React from "react";
import "./Section1.css";
import robot from "./../assets/robot.png";
import discount from "./../assets/Discount.svg";
import arrow from "./../assets/arrow-up.svg";

export default function Section1() {
  return (
    <div className="section1__container">
      <div className="section1__left">
        <div className="section1__left__item">
            <div className="section1__left__blur"></div>
        </div>
        <div className="section1__empty__space">
          <div className="section1__left__top">
            <img src={discount} alt="" />
            20% <p>DISCOUNT FOR</p> 1 MONTH
            <p> ACCOUNT</p>
          </div>
          <div className="section1__left__middle">
            The Next
            <p>Generation</p>
            Payment Method.
            <div className="section1__left__middle__circel">Get
            <img src={arrow} alt="" />
             Started</div>
          </div>
          <div className="section1__left__bottom">
            Our team of experts uses a methodology to identify the credit cards
            most likely to fit your needs. We examine annual percentage rates,
            annual fees.
          </div>
        </div>
      </div>
      <div className="section1__right">
        <div className="background__blur">
            sacasc
        </div>
        <img src={robot} alt="" />
      </div>
    </div>
  );
}

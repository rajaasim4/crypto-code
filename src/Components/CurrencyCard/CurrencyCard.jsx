import React from "react";
import "./CurrencyCard.css";

const CurrencyCard = (props) => {
  return (
    <div className="CurrencyCard d-flex flex-column align-items-center justify-content-evenly py-5">
      <div className="Currency-icon d-flex justify-content-center align-items-center fs-1">
        <span>{props.currencyIcon}</span>
      </div>
      <h2 className="text-light">{props.title}</h2>
      <h3 className="fs-3 font-inter ">{props.price}$</h3>
      <button className="Main-btn">BUY IT NOW</button>
    </div>
  );
};

export default CurrencyCard;

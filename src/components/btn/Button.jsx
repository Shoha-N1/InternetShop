import React from "react";
import "./Button.scss";
import ShopIcon from "./../../../public/shop_1.svg";

const Button = ({ num, click }) => {
  return (
    <>
      <button className="ui-change-btn" onClick={() => click(true)}>
      <div className="cart_div">
          Cart
          <img style={{ width: "20px", height: "20px" }} src={ShopIcon} />
        </div>
        <span>{num}</span>
      </button>
    </>
  );
};

export default Button;

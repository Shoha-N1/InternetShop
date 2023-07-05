import NavLink from "../nav-link/NavLink";
import "./Header.scss";
import ShopIcon from "./../../../public/shop_1.svg";
import Button from "../btn/Button";
import { useState } from "react";

export default function Header() {
 

  const cart = (
    <span className="span_sec">
      <NavLink to={"/card"}>
        <div className="cart_div">
          Cart
          <img style={{ width: "20px", height: "20px" }} src={ShopIcon} />
        </div>
      </NavLink>
    </span>
  );

  return (
    <>
      <header className="main-header">
        <div className="container">
          <div className="main_header-inner">
            <h1 className="heading">
              <a href="/">
                Internet <span>Shop</span>
              </a>
            </h1>

            <nav className="navbar">
              <ul>
                <li>
                  <NavLink to={"/"}>Home</NavLink>
                </li>
                <li>
                  <NavLink to={"/contact"}>Contact</NavLink>
                </li>
              </ul>

              <div className="header_div">
                <span className="span_first">
                  <NavLink to={"/login"}>Login</NavLink>
                  <NavLink to={"/register"}>Register</NavLink>
                </span>
              {cart}
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}

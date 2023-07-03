import NavLink from "../nav-link/NavLink";
import "./Header.scss";
import ShopIcon from "./../../../public/shop_1.svg";
import MenuIcon from "./../../../public/hamburger_2.svg";

export default function Header() {

  const cart = (
    <span className="span_sec">
    <NavLink to={"/card"}>
   <div className="cart_div">
   Cart
   <img
        style={{ width: "20px", height: "20px" }}
        src={ShopIcon}
      />
      <p>0</p>
   </div>
    </NavLink>
  </span>
  )

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
                  <NavLink to={"/order-history"}>My Orders</NavLink>
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

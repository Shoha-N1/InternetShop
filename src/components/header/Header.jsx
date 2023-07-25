// import NavLink from "../nav-link/NavLink";
import "./Header.scss";

export default function Header() {

  return (
    <>
     <header>
        <div className="container">
          <div className="header-logo">
            <h1 >
            <a style={{color: "white"}} href="/">
            Internet <span style={{color: "#ffd482"}}>Shop</span>
            </a>
            </h1>
            <div className="header-box">
              <a href='/cart'>
                <img src="https://sbk-crud-ecommerce.netlify.app/assets/cart-e473b193.svg" alt="shop svg" />
              </a>
              <a href='/profile'>
                <img src="https://sbk-crud-ecommerce.netlify.app/assets/user-868faee1.svg" alt="user svg" />
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

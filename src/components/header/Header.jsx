import "./Header.scss";
import cart from "./../../assets/icons8-cart-60.png"
import user from "./../../assets/icons8-user-96.png"

export default function Header() {

  return (
    <>
     <header>
        <div className="container">
          <div className="header-logo">
            <h1>
            <a style={{color: "white"}} href="/">
            Internet <span style={{color: "#ffd482"}}>Shop</span>
            </a>
            </h1>
            <div className="header-box">
              <a href='/cart'>
                <img src={cart} alt="cart info" />
              </a>
              <a href='/profile'>
                <img src={user} alt="user info" />
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

import NavLink from "../nav-link/NavLink";
import "./Header.scss";

export default function Header() {

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

              <div className="header_div">
                <span className="span_first">
                </span>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}

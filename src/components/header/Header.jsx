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
              <ul>
                <li>
                  <NavLink to={"/"}>Home</NavLink>
                </li>

                <li>
                  <NavLink to={"/contact"}>Contact</NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}

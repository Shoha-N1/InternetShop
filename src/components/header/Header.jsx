import NavLink from "../nav-link/NavLink";
import "./Header.scss";
import ShopIcon from "./../../../public/shop_1.svg";
import { useEffect, useState } from "react";
import Button from "../btn/Button";
import Search from "../search/Search";
import AddProducts from "../addProducts/AddProducts";

export default function Header() {
  const [items, setItem] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [addedItems, setAddedItem] = useState([]);
  const [showAddProducts, setShowAddProducts] = useState(false);

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

  function changingSearchData(e) {
    setSearchValue(e.target.value);
  }

  // console.log(addedItems);
  function removeItem(item) {
    const newItems = addedItems.filter((addedItem) => addedItem.id !== item.id);
    setAddedItem(newItems);
    // console.log(addedItems);
  }

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

                <div className="nav-right">
                  <Search
                    products={items}
                    value={searchValue}
                    onChangeData={changingSearchData}
                  />
                </div>
                
                {showAddProducts && (
                  <AddProducts
                    click={setShowAddProducts}
                    items={addedItems}
                    removeItem={removeItem}
                    setAddedItem={setAddedItem}
                  />
                )}
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}

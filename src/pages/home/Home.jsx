// import { useEffect, useState } from "react";
// import "./index.css";
// import Header from "../../components/header/Header";
// import Search from "../../components/search/Search";
// import Button from "../../components/btn/Button";
// import AddProducts from "../../components/addProducts/AddProducts";
// import CardBody from "../../components/cards/CardBody";

import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Search from "../../components/search/Search";
import Button from "../../components/btn/Button";
import AddProducts from "../../components/addProducts/AddProducts";
import CardBody from "../../components/cards/CardBody";

export default function Home() {
  const [items, setItem] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [addedItems, setAddedItem] = useState([]);
  const [showAddProducts, setShowAddProducts] = useState(false);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, []);
  function changingSrarchData(e) {
    setSearchValue(e.target.value);
  }
  const itmesFilter = items.filter((item) =>
    item.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  function addItem(item) {
    item.addNumber = 1;
    const itemArr = addedItems;
    setAddedItem([...itemArr, item]);
  }
  // console.log(addedItems);
  function removeItem(item) {
    const newItems = addedItems.filter((addedItem) => addedItem.id !== item.id);
    setAddedItem(newItems);
    // console.log(addedItems);
  }
  return (
    <div>
      <div className="body__container">
        <div className="nav">
          <Header />
          <div className="nav-right">
            <Search
              products={items}
              value={searchValue}
              onChangeData={changingSrarchData}
            />
          </div>
        </div>
        <Button num={addedItems.length} click={setShowAddProducts} />
        {showAddProducts && (
          <AddProducts
            click={setShowAddProducts}
            items={addedItems}
            removeItem={removeItem}
            setAddedItem={setAddedItem}
          />
        )}
        <CardBody
          products={itmesFilter}
          addItem={addItem}
          removeItem={removeItem}
          addedItems={addedItems}
        />
      </div>
    </div>
  );
}


// import Header from "./components/header/Header";
// import "./index.css";
// import { Outlet } from "react-router-dom";
// import Footer from "./components/footer/Footer";
// export default function App() {
//   return (
//     <>
//       <div className="header_app">
//         <Header />
//       </div>
//       <Outlet />
//       <div className="footer_app">
//         <Footer />
//       </div>
//     </>
//   );
// }


import { useEffect, useState } from "react";
import CardBody from "../../components/cards/CardBody";
import "./Home.scss";

  export default function Home() {
    const [items, setItem] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const [addedItems, setAddedItem] = useState([]);
  

    useEffect(() => {
      fetch("https://fakestoreapi.com/products/")
        .then((res) => res.json())
        .then((data) => setItem(data));
    }, []);

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
    <>
         <CardBody
          products={itmesFilter}
          addItem={addItem}
          removeItem={removeItem}
          addedItems={addedItems}
        />
    </>
  );
}

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import ItemList from "../ItemList/ItemList";
import PropagateLoader from "react-spinners/PropagateLoader";

import { db } from "../../firebaseConfig";

import { collection, getDocs, query, where } from "firebase/firestore";


const ItemListContainer = () => {
  const {categoryName} = useParams();
  console.log("categoryName: "+categoryName)

  const [items, setItems] = useState([]);


  useEffect(() => {
    const itemCollection = collection(db, "products");

    let consulta = undefined;

    if (categoryName) {
      const q = query(itemCollection, where("category", "==", categoryName));
      consulta = getDocs(q);
    } else {
      consulta = getDocs(itemCollection);
    }

    consulta.then((res) => {
      let products = res.docs.map((product) => {
        return {
          ...product.data(),
          id: product.id,
        };
      });

      setItems(products);
    });
  }, [categoryName]);

  if (items.length === 0) {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <PropagateLoader
          color={"#7F669D"}
          // loading={loading}
          size={50}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );
  }

  return (
    <div>
      {/* {
        items.length > 0 && <ItemList items={items} />
      } */}

      <ItemList items={items} />
      {/* <h1 style={{ color: items.length > 0 ? "red" : "blue" }}>
        Cambio de color
      </h1> */}

      {/* <input type={ showPassword ? "text" : "password"} /> */}
    </div>
  );
};


export default ItemListContainer;

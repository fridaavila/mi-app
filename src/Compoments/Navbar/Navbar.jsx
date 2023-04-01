//ESTILOS EN LINEA
//ESTILOS CSS
// import "./Navbar.css"
//MODULOS DE CSS
import styles from "./Navbar.module.css";
import CartWidget from "../CartWidget/CartWidget";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { db } from "../../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

export const Navbar = () => {
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    const itemsCollection = collection(db, "categories");
    getDocs(itemsCollection).then((res) => {
      let arrayCategories = res.docs.map((category) => {
        return {
          ...category.data(),
          id: category.id,
        };
      });
      setCategoryList(arrayCategories);
    });
  }, []);


  return (
    <div className={styles.containerNavbar}>
      <Link to="/">
        <img
          src="https://res.cloudinary.com/dkyr4y8ho/image/upload/v1677126357/IMG_6115_lncrab.jpg"
          alt=""
          style={{ width: "50%", objectFit: "cover" }}
        />
      </Link>
      <ul className={styles.containerList}>
        {/* <Link to="/" className={styles.navbarItem}> All Products </Link>
        <Link to="/category/foundations" className={styles.navbarItem}> Foundations </Link>
        <Link to="/category/tools" className={styles.navbarItem}> Tools </Link> */}
        {categoryList.map((category) => {
          return (
            <Link
              key={category.id}
              to={category.path}
              className={styles.navbarItem}
            >
              {category.title}
            </Link>
          );
        })}
      </ul>
      <CartWidget />
    </div>
  );
};

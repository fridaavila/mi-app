import React, { useState, useEffect } from "react";
import axios from "axios";
import { textAlign, width } from "@mui/system";

const ProductsBack = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // LA SOLICITUD A LA API\
    const data = axios.get("http://localhost:5000/products");
    data.then((res) => setProducts(res.data));
  }, []);

  const newProduct = {
    title: "Match stix trio",
    img: "https://www.google.com/search?q=fenty&rlz=1C1CHBF_enMX863MX863&sxsrf=AJOqlzVfgJD6eSDRnfQxP8JIpTmBO70Dvg:1678857174348&source=lnms&tbm=isch&sa=X&ved=2ahUKEwihuIWslt39AhWCh-4BHcYQCZUQ_AUoAXoECAEQAw&biw=1536&bih=713&dpr=2.5#imgrc=FL0gNKmKrJowmM",
  };

  const addProduct = (product) => {
    axios.post("http://localhost:5000/products", newProduct);
  };

  const updateProduct = (id) => {
    const update = axios.patch(`http://localhost:5000/products/${id}`, {
      title: "makeup",
    });
  };

  /*const deleteProduct = () => {
    const del = axios.delete(`http://localhost:5000/products/${id}`);
  };*/

  return (
    <div>
      <h1>Productos desde el backend</h1>

      <div
        style={{
          width: "100%",
          display: "flex",
          gap: "30px",
          justifyContent: "space-around",
          alignItems: "center",
          minHeight: "90vh",
        }}
      >
        {products.map((e, i) => {
          return (
            <div
              style={{
                with: "300px",
                height: "300px",
                textAlign: "center",
              }}
              key={e.id}
            >
              <h2>{e.title}</h2>
              <img
                src={e.img}
                alt=""
                style={{ width: "40%", objectFit: "cover" }}
              />
            </div>
          );
        })}
      </div>

      {/* VAMOS A APREGAR UN PRODUCTO */}
      {/*<div style={{backgroundColor:"blue", width: "100%", height: "400px"}}>
        <form style={{width: "70%", display:"flex", flexDirection: "column", height: "400px", justifyContent: "space-evenly", alignItems: "center"}}>
          <input
            type="text"
            name="title"
            placeholder="ingresa el nombre del producto"
            style={{width:" 100%", height: "40px"}}
          />
          <input
            type="text"
            name="imagen"
            placeholder="ingresa la url de la imagen"
            style={{width:" 100%", height: "40px"}}
          />
          <button style={{width:" 100%", height: "40px"}}>Crear Producto</button>
        </form>
      </div> */}
      <button onClick={addProduct}>Crear producto</button>

      {/* VAMOS A MODIFICAR UN PRODUCTO */}
      <button onClick={() => updateProduct("2")}>Modificar producto</button>

      {/* VAMOS A ELIMINAR UN PRODUCTO */}
      {/*<button onClick={() => deleteProduct("2")}>Eliminar producto</button> */}
    </div>
  );
};

export default ProductsBack;

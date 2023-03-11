import Footer from "./Compoments/Footer/Footer.jsx";
import ItemListContainer from "./Compoments/ItemListContainer/ItemListContainer.jsx";
import { Navbar } from "./Compoments/Navbar/Navbar.jsx";
import ProductCard from "./Compoments/ProductCard/ProductCard.jsx";
import ItemCount from "./Compoments/ItemCount/ItemCount.jsx";
import ConsumiendoApis from "./Compoments/ConsumiendoApis/ConsumiendoApis.jsx";
import Cart from "./Compoments/Cart/Cart.jsx";
import Login from "./Compoments/Login/Login.jsx";

import { BrowserRouter, Routes, Route } from "react-router-dom"
import ItemDeatilContainer from "./Compoments/ItemDetailContainer/ItemDeatilContainer.jsx";

function App() {

  const onAdd = ( cantidad ) => {
    console.log( `se agrego al carrito ${cantidad} elementos `)
  }
  let stock = 5
  let initial = 1

  return (
      <BrowserRouter>

      <Navbar />

        <Routes> 
          <Route path="/" element={ <ItemListContainer /> } />
          <Route path="/category/:id" element={ <ItemListContainer /> } />

          <Route path="/cart" element={ <Cart /> } />
          <Route path="/item/:id" element={ <ItemDeatilContainer /> } />
          <Route path="/login" element={ < Login /> } />

          <Route path="*" element={<h1>error 404: Not Found</h1>} />

        </Routes>

      </BrowserRouter>
      
  );
}

export default App;

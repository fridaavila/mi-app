import Footer from "./Compoments/Footer/Footer.jsx";
import ItemListContainer from "./Compoments/ItemListContainer/ItemListContainer.jsx";
import { Navbar } from "./Compoments/Navbar/Navbar.jsx";
import Cart from "./Compoments/Cart/Cart.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ItemDeatilContainer from "./Compoments/ItemDetailContainer/ItemDeatilContainer.jsx";
import Form from "./Compoments/Form/Form.jsx";
import CartContextProvider from "./context/CartContext.jsx";

function App() {

  const onAdd = ( cantidad ) => {
    console.log( `se agrego al carrito ${cantidad} elementos `)
  }
  let stock = 5
  let initial = 1

  return (
      <BrowserRouter>
      <CartContextProvider>

      <Navbar />

      <Routes> 
        <Route path="/" element={ <ItemListContainer /> } />
        <Route path="/category/:categoryName" element={ <ItemListContainer /> } />

        <Route path="/cart" element={ <Cart /> } />
        <Route path="/item/:id" element={ <ItemDeatilContainer /> } />
        <Route path="/formulario" element={ < Form /> } />

        <Route path="*" element={<h1>error 404: Not Found</h1>} />

      </Routes>
      <Footer />

      </CartContextProvider>
      </BrowserRouter>
      
  );
}

export default App;

import Footer from "./Compoments/Footer/Footer.jsx";
import ItemListContainer from "./Compoments/ItemListContainer/ItemListContainer.jsx";
import { Navbar } from "./Compoments/Navbar/Navbar.jsx";
import ProductCard from "./Compoments/ProductCard/ProductCard.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting="Welcome"/>
      {/* <ProductCard title="Producto 1" price={200} isRed ={false}/>
      <ProductCard title="Producto 2" price={300} isRed ={true} />
  <ProductCard title="Producto 3" price={400} isRed ={true}/> */}
      <Footer />
    </div>
  );
}

export default App;

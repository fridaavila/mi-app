import "./ProductCard.css"

const ProductCard = ({title, price, isRed}) => {

  const login = ()=>{
    console.log("ya ingrese")
  }

  return (
    <div>
      <h1 className = {isRed ? "red" : "blue" }> {title} </h1>
      <h2> {price} </h2>
      <button onClick={login}>Login</button>
    </div>
  );
};

export default ProductCard;

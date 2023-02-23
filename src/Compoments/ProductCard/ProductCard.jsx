import "./ProductCard.css"

const ProductCard = ({title, price, isRed}) => {

  return (
    <div>
      <h1 className = {isRed ? "red" : "blue" }> {title} </h1>
      <h2> {price} </h2>
    </div>
  );
};

export default ProductCard;

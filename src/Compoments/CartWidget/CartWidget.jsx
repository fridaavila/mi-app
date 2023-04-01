import {AiOutlineShoppingCart} from "react-icons/ai"
import { Link } from "react-router-dom"

import {useContext} from "react"
import { CartContext } from "../../context/CartContext"

const CartWidget = () => {

  const { getTotalQuantity } = useContext(CartContext)
  const total = getTotalQuantity()


  return (
    <Link to="/cart">
      <div>
        <AiOutlineShoppingCart size={32} color="white" />
        <div className="bubble-counter">
          <span>{total}</span>
        </div>
      </div>
    </Link>

  )
}

export default CartWidget
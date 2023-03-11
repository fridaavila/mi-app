import {AiOutlineShoppingCart} from "react-icons/ai"
import { Link } from "react-router-dom"

const CartWidget = () => {
  return (
    <Link to="/cart">
      <div>
        <AiOutlineShoppingCart size={32} color="white" />
      </div>
    </Link>

  )
}

export default CartWidget
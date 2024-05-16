import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  handleClearCart = () => {
    dispatch(clearCart());
  }

  return (
    <div className="text-center">
      <h1>Cart</h1>
      <div className="w-6/12 mx-auto">
        <button onClick={handleClearCart} className="p-2 m-2 bg-black text-white border rounded-lg">Clear Cart</button>
        {cartItems.length === 0 ? <h1>Your cart is Empty !!</h1> : ""}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;

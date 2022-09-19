import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CgClose } from "react-icons/cg";

import { CartContext } from "../../context/cart.context";
import { UserContext } from "../../context/user.context";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
  const { cartItems, isCartOpen, setIsCartOpen } = useContext(CartContext);
  const { currentUser } = useContext(UserContext);
  const navigate = useNavigate()

  const goToCheckout = () => navigate('/checkout')
  const handleClose = () => setIsCartOpen(!isCartOpen)

  return (
    <div className="cart-dropdown-container">
      <button onClick={handleClose} className="cart-dropdown-close"><CgClose /></button>
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      {currentUser && (<Button text="Go to checkout" buttonType="inverted" onClick={goToCheckout} />)}
    </div>
  );
};

export default CartDropdown;

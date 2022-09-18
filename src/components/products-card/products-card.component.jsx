import { useContext } from "react";
import { CartContext } from '../../context/cart.context'
import "./products-card.styles.scss";
import Button from "../button/button.component";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart} = useContext(CartContext)

  const addProtductToCart = () => addItemToCart(product)
  
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <Button text="Add to cart" buttonType="inverted" onClick={addProtductToCart} />
    </div>
  );
};

export default ProductCard;

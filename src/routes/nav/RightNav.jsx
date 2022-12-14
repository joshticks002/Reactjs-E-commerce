import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import styled from "styled-components";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import { UserContext } from "../../context/user.context";
import { CartContext } from "../../context/cart.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 18px 10px;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #fff;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    min-height: 109vh;
    width: 170px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    z-index: 1;

    li {
      color: #000;
      cursor: pointer;
    }
  }
`;

const RightNav = ({ open }) => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
  const navigate = useNavigate()

  const handleSignOut = () => {
    signOutUser()
    navigate("/category")
  }

  return (
    <>
      <Ul open={open}>
        <Link className="nav-link" to="/category">
          <li>Category</li>
        </Link>
        {currentUser && (
        <Link className="nav-link" to="/category/shop">
          <li>Market</li>
        </Link>
        )}

        <Link className="nav-link" to="/contact">
          <li>Contact</li>
        </Link>
        {currentUser ? (
          <li className="nav-link" onClick={handleSignOut}>
            Sign Out
          </li>
        ) : (
          <Link className="nav-link" to="/auth">
            <li>Sign In</li>
          </Link>
        )}
        <CartIcon />
      </Ul>
      {isCartOpen && <CartDropdown />}
    </>
  );
};

export default RightNav;

import { Link } from "react-router-dom";
import React from "react";
import styled from "styled-components";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 18px 10px;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #faf8f5;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 200px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    li {
      color: #000;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <Link className="nav-link" to="/shop">
        <li>Market</li>
      </Link>
      <Link className="nav-link" to="/contact">
        <li>Contact</li>
      </Link>
      <Link className="nav-link" to="/auth">
        <li>Sign In</li>
      </Link>
    </Ul>
  );
};

export default RightNav;

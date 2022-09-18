import { Outlet, Link } from "react-router-dom";
import React, { Fragment } from "react";
import Footer from "../footer/footer.component"
// import { ReactComponent as MyLogo } from "../../assets/crown.svg";
import styled from "styled-components";
import Burger from "./Burger";

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  border-bottom: 2px solid #fff;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;

  .logo {
    padding: 0px 0;
    .logo-img {
      width: 60px;
      heigth: 60px;
      margin-left: -30%;
    }
  }
`;

const Navibar = () => {
  return (
    <Fragment>
      <Nav>
        <Link to="/">
          <div className="logo">
          <img src="https://png.pngtree.com/png-vector/20190303/ourmid/pngtree-modern-abstract-3d-logo-png-image_771012.jpg" alt="sneakers" className='logo-img'/>
          </div>
        </Link>
        <Burger />
      </Nav>
      <Outlet />
      <Footer />
    </Fragment>
  );
};

export default Navibar;

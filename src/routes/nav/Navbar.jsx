import { Outlet, Link } from "react-router-dom";
import React, { Fragment } from "react";
import { ReactComponent as MyLogo } from "../../assets/crown.svg";
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
    padding: 15px 0;
  }
`;

const Navibar = () => {
  return (
    <Fragment>
      <Nav>
        <Link to="/">
          <div className="logo">
            <MyLogo />
          </div>
        </Link>
        <Burger />
      </Nav>
      <Outlet />
    </Fragment>
  );
};

export default Navibar;
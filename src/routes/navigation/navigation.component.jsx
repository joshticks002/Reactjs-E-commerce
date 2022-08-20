import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import { ReactComponent as MyLogo } from "../../assets/crown.svg";
import "./navigation.styles.scss";

const NavBar = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <MyLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/sign-in">
            Market
          </Link>
          <Link className="nav-link" to="/sign-in">
            Contact
          </Link>
          <Link className="nav-link" to="/sign-in">
            Login
          </Link>
          <Link className="nav-link" to="/sign-in">
            Logout
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default NavBar;

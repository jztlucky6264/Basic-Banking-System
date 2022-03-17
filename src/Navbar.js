import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      {/* <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto"> */}
      <nav className="navbar   mb-3 navbar-expand-lg navbar-light ">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            SPARK BANK
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="true"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
              <li className="nav-item mr-5 active">
                <NavLink
                  activeClassName="menu_active"
                  className="nav-link"
                  to="/customer"
                >
                  Customer List
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  activeClassName="menu_active"
                  className="nav-link"
                  to="/contact"
                >
                  Contact Technical Team
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/*   </div>
        </div>
      </div> */}
    </>
  );
};

export default Navbar;

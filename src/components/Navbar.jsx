import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle, faShoppingBasket, faShoePrints, faTruck } from '@fortawesome/free-solid-svg-icons'
import { NavLink} from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <div className="navbar_container">
      <div className="navbar_wrapper">
        <div className="navbar_center">
        <div className="navbar_logo">
          <NavLink to="/" exact>
            GOLDEN SHOE <FontAwesomeIcon icon={faShoePrints} />
          </NavLink>
          </div>
        </div>
        <div className="navbar_right">
        <div className="navbar_menuItems">
            <NavLink to="/track">
              <FontAwesomeIcon icon={faTruck} />
            </NavLink>
          </div>
          <div className="navbar_menuItems">
            <NavLink to="/login">
              <FontAwesomeIcon icon={faUserCircle} />
            </NavLink>
          </div>
          <div className="navbar_menuItems">
            <NavLink to="/cart">
              <FontAwesomeIcon icon={faShoppingBasket} />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

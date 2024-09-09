import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Link, useNavigate } from "react-router-dom";
import Cart from "../screens/Cart";
import Modal from "../Modal";
import Modal2 from "../Modal2";
import { useCart } from "./ContextReducer";
import logo from "../imag/l1.jpg";
import MyOdresData from "../screens/MyOdresData";

function Navbar() {
  const state = useCart();
  const navigate = useNavigate();

  const [displayOrder, setDisplayOrder] = useState(false);
  const [cart, setCart] = useState(false);

  function removeToken() {
    localStorage.removeItem("token");
    navigate("/login");
  }

  const [initalStat, setState] = useState(true);
  const [menu, setmenu] = useState(true);

  function handleClick() {
    setState(!initalStat);
    setmenu(!menu);
  }

  return (
    <div>
      <section id="header">
        <nav className="NavItems">
          <Link to="/" className="Navbar-logo">
            <img src={logo} alt="ZearLogo" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={state ? "fas fa-bars" : "fas fa-times"}></i>
          </div>
          <ul className={menu ? "Nav-menu" : "Nav-menu active"}>
            <li>
              <Link className="nav-links" to="/">
                Home
              </Link>
            </li>
            <li className="">
              <Link className="nav-links" to="/contactus">
                Contact Us
              </Link>
            </li>
            {localStorage.getItem("token") ? (
              <>
                <li className="">
                  <Link
                    className="nav-links"
                    to="/"
                    onClick={() => setDisplayOrder(true)}
                  >
                    My Orders
                  </Link>
                </li>
                {displayOrder ? (
                  <Modal2 Close={() => setDisplayOrder(false)}>
                    <MyOdresData />
                  </Modal2>
                ) : null}
              </>
            ) : (
              ""
            )}
            {!localStorage.getItem("token") ? (
              <div className="options">
                <li className="">
                  <Link className="nav-links" to="/login">
                    Login
                  </Link>
                </li>
                <li className="">
                  <Link className="nav-links" to="/createuser">
                    SignUp
                  </Link>
                </li>
              </div>
            ) : (
              <div className="options">
                <li className="">
                  <Link
                    onClick={() => setCart(true)}
                    className="nav-links position-relative"
                    to="/"
                  >
                    My Cart
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-info">
                      {state.length}
                      <span className="visually-hidden">unread messages</span>
                    </span>
                  </Link>
                </li>
                {cart ? (
                  <Modal onClose={() => setCart(false)}>
                    <Cart />
                  </Modal>
                ) : null}
                <li className="">
                  <Link className="nav-links" to="/login" onClick={removeToken}>
                    SignOut
                  </Link>
                </li>
              </div>
            )}
          </ul>
        </nav>
      </section>
    </div>
  );
}

export default Navbar;

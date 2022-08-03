import React, { useState, useContext } from "react";
import navLinks from "../data/navlinks.js";
import { CartQtyContext } from "../context/CartQtyContext";
import { motion } from "framer-motion";
import WindowResize from "./WindowResize.js";
import MobileDropDown from "./MobileDropDown.js";

function Nav() {
  const [
    cartQty,
    imageCounter,
    quantityCounter,
    image,
    checkCounter,
    handleNext,
    handlePrevious,
    checkQuantityCounter,
    handleMinus,
    handlePlus,
    handleAddtoCart,
    imageNumber,
    cartTester,
    successTester,
    viewCheckoutPage,
    checkoutPage,
    product,
  ] = useContext(CartQtyContext);

  const [mobileNav, setMobileNav] = useState(false);

  const windowResize = WindowResize();
  const windowSize = windowResize.props.children;

  return (
    <nav className={`nav ${mobileNav ? "darkenbg" : ""}`}>
      <div className="nav-container">
        <div className="links--logo">
          {windowSize < 959 && (
            <div
              className="menu--links"
              onClick={() => setMobileNav(!mobileNav)}
            >
              <img src="/images/icon-menu.svg" alt="" />

              {mobileNav && <MobileDropDown mobileNav={mobileNav} />}
            </div>
          )}

          <div className="logo">
            <a href="">
              <img src="/images/logo.svg" alt="logo" />
            </a>
          </div>

          {windowSize > 959 && (
            <ul className="nav--links">
              {navLinks.map((link, index) => {
                const { name, address } = link;
                return (
                  <li className="nav--link" key={index}>
                    <a href={address}>{name}</a>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        <div className="cart--profile">
          <div className="cart" onClick={viewCheckoutPage}>
            <svg
              width="22"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
              className="cart-svg"
            >
              <path
                d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                fill="#69707D"
                fill-rule="nonzero"
                className="cart-svg"
              />
            </svg>
            <span>
              <p>{cartQty}</p>
            </span>
          </div>

          <div className="profile--img">
            <img src="/images/image-avatar.png" alt="avatar" />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;

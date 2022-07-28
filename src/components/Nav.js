import React, { useState, useContext } from "react";
import navLinks from "../data/navlinks.js";
import { CartQtyContext } from "../context/CartQtyContext";
import { motion } from "framer-motion";

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
  ] = useContext(CartQtyContext);

  const [mobileNav, setMobileNav] = useState(false);

  const variants = {
    open: { x: 0 },
    close: { x: "-100vw" },
  };

  return (
    <nav className={`nav ${mobileNav ? "darkenbg" : ""}`}>
      <div className="nav-container">
        <div className="links--logo">
          <div className="menu--links" onClick={() => setMobileNav(!mobileNav)}>
            <img src="/images/icon-menu.svg" alt="" />
            {mobileNav && (
              <motion.div
                initial={{ x: "-100vw" }}
                animate={mobileNav ? "open" : "close"}
                exit={{
                  x: "close",
                  transition: { delay: 0.7, duration: 5 },
                }}
                variants={variants}
                transition={{ type: "just", stiffness: 30 }}
                className="nav-sidebar"
              >
                <img
                  src="/images/icon-close.svg"
                  alt=""
                  onClick={() => setMobileNav(!mobileNav)}
                />

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
              </motion.div>
            )}
          </div>

          <div className="logo">
            <img src="/images/logo.svg" alt="logo" />
          </div>
        </div>

        <div className="cart--profile">
          <div className="cart" onClick={viewCheckoutPage}>
            <img src="/images/icon-cart.svg" alt="cart" />
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

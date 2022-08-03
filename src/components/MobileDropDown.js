import React from "react";
import navLinks from "../data/navlinks.js";
import { motion } from "framer-motion";
import { CartQtyContext } from "../context/CartQtyContext";

function MobileDropDown({ mobileNav }) {
  const variants = {
    open: { x: 0 },
    close: { x: "-100vw" },
  };
  return (
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
      <img src="/images/icon-close.svg" alt="" onClick={() => !mobileNav} />

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
  );
}

export default MobileDropDown;

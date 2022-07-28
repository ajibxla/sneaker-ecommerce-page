import React, { useState, useContext } from "react";
import { CartQtyContext } from "../context/CartQtyContext";
import { AiFillDelete } from "react-icons/ai";
import { nanoid } from "nanoid";

function CheckOutPage() {
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
    checkOutDeets,
    handleDelete,
  ] = useContext(CartQtyContext);

  // console.log(checkOutDeets[0].qty, cartQty);
  const newItems = checkOutDeets.map((item) => {
    const { image, unitPrice, qty, total, title, id } = item;

    return (
      <div className="checkoutItem" key={nanoid}>
        <div className="checkout-info">
          <div className="checkout-img-container">
            <img src={image} alt="" />
          </div>
          <div className="product-details">
            <div className="product-detail-title">
              <p>{title}</p>
            </div>
            <div className="product-detail-price">
              <p className="unitPrice">{`$${unitPrice} x ${qty}`}</p>
              <p className="item-total">{`$${total}`}</p>
            </div>
          </div>
          <span onClick={() => handleDelete(id)}>
            <AiFillDelete style={{ fill: "hsl(220, 14%, 75%)" }} />
          </span>
        </div>
      </div>
    );
  });

  return (
    <section className="checkout-page">
      <div className="checkout-page-container">
        <div className="checkout-title">
          <p>Cart</p>
        </div>
        <div className="line"></div>

        <div className="check-out-holder">
          {checkOutDeets.length === 0 ? (
            <p className="message">Your cart is empty</p>
          ) : (
            <div className="check-out-holder">
              <div className="checkoutItems">{newItems}</div>
              <button>Checkout</button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default CheckOutPage;

import React, { useContext, useState } from "react";
import { CartQtyContext } from "../context/CartQtyContext";
import productInfo from "../data/productInfo";
import { nanoid } from "nanoid";
import { TiTick } from "react-icons/ti";

function Modal({ handleChangeImage, closeModal, testImage, keyState }) {
  const [
    cartQty,
    // imageCounter,
    quantityCounter,
    image,
    checkCounter,
    // handleNext,
    // handlePrevious,
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

  const handleNext = () => {};

  const handlePrevious = () => {};

  return (
    <section className="modal">
      <div className="modal--container">
        <svg
          width="14"
          height="15"
          xmlns="http://www.w3.org/2000/svg"
          className="modal-close-btn"
          onClick={closeModal}
        >
          <path
            d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
            fill="#69707D"
            fill-rule="evenodd"
            className="modal-close-btn-exact"
          />
        </svg>

        <article className="modal-product-image-container">
          <div className="modal-product-image">
            {/* <div className="prev--next">
              <span onClick={handlePrevious}>
                <img src="/images/icon-previous.svg" alt="previous" />
              </span>
              <span onClick={handleNext}>
                <img src="/images/icon-next.svg" alt="next" />
              </span>
            </div> */}
            <img src={testImage} alt={imageNumber} className="product-img" />
          </div>

          {/* <div className="modal-image-thumbnail-holder">
            {productInfo[0].fallCollection.productImg.map((img, index) => {
              const { thumbnail } = img;
              return (
                <div key={nanoid()} className={`modal-image-thumbnail `}>
                  <div className="thumbnail modal-thumbnail">
                    <img src={thumbnail} alt="" />
                  </div>
                </div>
              );
            })} 
        </div>*/}
        </article>
      </div>
    </section>
  );
}

export default Modal;

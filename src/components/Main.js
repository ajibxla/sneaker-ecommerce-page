import React, { useState, useContext } from "react";
import { CartQtyContext } from "../context/CartQtyContext";
import { MdWarningAmber } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import CheckOutPage from "./CheckOutPage";

function Main() {
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

  const discountedPrice = parseFloat(
    product.fallCollection.discount1 * product.fallCollection.fullPrice,
  );

  return (
    <main id="main">
      {checkoutPage && <CheckOutPage />}
      <article className="product-image-container">
        <div className="product-image">
          <img src={image} alt={imageNumber} />
        </div>

        <div className="prev--next">
          <span onClick={handlePrevious}>
            <img src="/images/icon-previous.svg" alt="previous" />
          </span>
          <span onClick={handleNext}>
            <img src="/images/icon-next.svg" alt="next" />
          </span>
        </div>
      </article>

      <article className="product-info-container">
        <div className="product-full-info">
          <p className="company-name">Sneaker Company</p>

          <h3 className="product-title">
            {product.fallCollection.productTitle}
          </h3>

          <p className="product-info">{product.fallCollection.productInfo}</p>
        </div>
        <div className="pricing">
          <div className="price--discount">
            <p className="price">{`$${discountedPrice}`}</p>
            <p className="discount">{product.fallCollection.discount}</p>
          </div>
          <div className="full-price">{`$${product.fallCollection.fullPrice}`}</div>
        </div>

        <div className="quantity-counter">
          <div className="quantity-counter-container">
            <span onClick={handleMinus}>
              <img src="/images/icon-minus.svg" alt="minus" />
            </span>
            <p>{quantityCounter}</p>
            <span onClick={handlePlus}>
              <img src="/images/icon-plus.svg" alt="plus" />
            </span>
          </div>
        </div>

        {!cartTester && quantityCounter === 0 && (
          <div className="warning">
            <MdWarningAmber style={{ fill: "red" }} />
            <p className="cartTest">Please select more than one item</p>
          </div>
        )}

        {successTester && quantityCounter > 0 && (
          <div className="warning">
            <TiTick style={{ fill: "green" }} />
            <p className="success">
              {" "}
              {quantityCounter === 1
                ? "Success! Item successfully added to cart"
                : "Success! Items successfully added to cart"}
            </p>
          </div>
        )}

        <div className="add-to-cart-container" onClick={handleAddtoCart}>
          <div className="add-to-cart">
            <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                fill="white"
              />
            </svg>

            <p>Add to cart</p>
          </div>
        </div>
      </article>
    </main>
  );
}

export default Main;

//   const [imageCounter, setImageCounter] = useState(1);
//   const [quantityCounter, setQuantityCounter] = useState(0);
//   const { image, imageNumber } = productImg[imageCounter];

//   const checkCounter = (number) => {
//     if (number > productImg.length - 1) {
//       return 0;
//     }

//     if (number < 0) {
//       return productImg.length - 1;
//     }
//     return number;
//   };

//   const handleNext = () => {
//     setImageCounter((counter) => {
//       let newIndex = counter + 1;
//       return checkCounter(newIndex);
//     });
//   };

//   const handlePrevious = () => {
//     setImageCounter((counter) => {
//       let newIndex = counter - 1;
//       return checkCounter(newIndex);
//     });
//   };

//   const checkQuantityCounter = (number) => {
//     if (number < 0) {
//       return 0;
//     }
//     return number;
//   };
//   const handleMinus = () => {
//     setQuantityCounter((qtyCounter) => {
//       let index = qtyCounter - 1;
//       return checkQuantityCounter(index);
//     });
//   };

//   const handlePlus = () => {
//     setQuantityCounter(quantityCounter + 1);
//   };

//   const handleAddtoCart = () => {
//     console.log("add");
//   };

import React, { useState, useContext } from "react";
import { CartQtyContext } from "../context/CartQtyContext";
import { MdWarningAmber } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import CheckOutPage from "./CheckOutPage";
import WindowResize from "./WindowResize";
import productInfo from "../data/productInfo";
import { nanoid } from "nanoid";
import Modal from "./Modal";

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

  const discountedPrice = Math.round(
    parseFloat(
      product.fallCollection.discount1 * product.fallCollection.fullPrice,
    ),
  ).toFixed(2);

  const fullPrice = Math.round(product.fallCollection.fullPrice).toFixed(2);

  const [keyState, setKeyState] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  // console.log(productInfo[0].fallCollection.productImg);

  const testImage = productInfo[0].fallCollection.productImg[keyState].image;

  const windowResize = WindowResize();
  const windowSize = windowResize.props.children;

  const handleChangeImage = (event, index) => {
    setKeyState(index);
    setOpenModal(!openModal);
  };

  const closeModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <main id="main">
      {openModal && windowSize > 959 && (
        <Modal
          closeModal={closeModal}
          handleChangeImage={handleChangeImage}
          testImage={testImage}
        />
      )}
      {checkoutPage && <CheckOutPage />}
      <article className="product-image-container">
        <div className="product-image">
          <img src={windowSize < 600 ? image : testImage} alt={imageNumber} />
        </div>

        {windowSize < 600 ? (
          <div className="prev--next">
            <span onClick={handlePrevious}>
              <img src="/images/icon-previous.svg" alt="previous" />
            </span>
            <span onClick={handleNext}>
              <img src="/images/icon-next.svg" alt="next" />
            </span>
          </div>
        ) : (
          <div className="image-thumbnail-holder">
            {productInfo[0].fallCollection.productImg.map((img, index) => {
              const { thumbnail } = img;
              return (
                <div
                  key={nanoid()}
                  onClick={(event) => handleChangeImage(event, index)}
                  className={`image-thumbnail `}
                >
                  <div className="thumbnail">
                    <img src={thumbnail} alt="" />
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </article>

      <article className="product-info-container">
        <div className="product-full-info">
          <p className="company-name">Sneaker Company </p>

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
          <div className="full-price">{`$${fullPrice}`}</div>
        </div>

        <div className="counter--cart">
          <div className="quantity-counter">
            <div className="quantity-counter-container">
              <span onClick={handleMinus}>
                <svg
                  width="12"
                  height="4"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <defs>
                    <path
                      d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z"
                      id="a"
                    />
                  </defs>
                  <use
                    fill="#FF7E1B"
                    fill-rule="nonzero"
                    xlinkHref="#a"
                    className="icon"
                  />
                </svg>
              </span>
              <p>{quantityCounter}</p>
              <span onClick={handlePlus}>
                <svg
                  width="12"
                  height="12"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  className="icon"
                >
                  <defs>
                    <path
                      d="M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z"
                      id="b"
                    />
                  </defs>
                  <use
                    fill="#FF7E1B"
                    fill-rule="nonzero"
                    xlinkHref="#b"
                    className="icon"
                  />
                </svg>
              </span>
            </div>
          </div>

          <div className="warning-signals">
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
                  {quantityCounter === 1
                    ? "Success! Item successfully added to cart"
                    : "Success! Items successfully added to cart"}
                </p>
              </div>
            )}
          </div>
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

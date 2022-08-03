import React, { createContext, useState, useEffect } from "react";
import { nanoid } from "nanoid";

import productInfo from "../data/productInfo";

export const CartQtyContext = createContext();

export const CartProvider = ({ children }) => {
  const [imageCounter, setImageCounter] = useState(0);
  const [quantityCounter, setQuantityCounter] = useState(0);
  const [cartTester, setCardTester] = useState(true);
  const [successTester, setSuccessTester] = useState(false);
  const [checkoutPage, setCheckoutPage] = useState(false);
  const [product, setProduct] = useState(productInfo[0]);
  const [checkOutDeets, setCheckOutDeets] = useState([]);
  const { image, imageNumber } =
    product.fallCollection.productImg[imageCounter];
  const [checkoutQty, setCheckoutQty] = useState([]);
  const cartQty = checkoutQty.length;

  const viewCheckoutPage = () => {
    setCheckoutPage(!checkoutPage);
  };

  const discountedPrice = parseFloat(
    product.fallCollection.discount1 * product.fallCollection.fullPrice,
  );

  //handle showing the checkout page

  const checkCounter = (number) => {
    if (number > product.fallCollection.productImg.length - 1) {
      return 0;
    }

    if (number < 0) {
      return product.fallCollection.productImg.length - 1;
    }
    return number;
  };

  const handleNext = () => {
    setImageCounter((counter) => {
      let newIndex = counter + 1;
      return checkCounter(newIndex);
    });

    console.log("yes");
  };

  const handlePrevious = () => {
    setImageCounter((counter) => {
      let newIndex = counter - 1;
      return checkCounter(newIndex);
    });
  };

  const checkQuantityCounter = (number) => {
    if (number < 0) {
      return 0;
    }
    return number;
  };

  const handleMinus = () => {
    setQuantityCounter((qtyCounter) => {
      let index = qtyCounter - 1;
      return checkQuantityCounter(index);
    });
  };
  const handlePlus = () => {
    setQuantityCounter(quantityCounter + 1);
  };

  const addCheckOutItem = (item) => {
    if (quantityCounter <= 0) {
      return;
    } else {
      setCheckOutDeets([...checkOutDeets, item]);
      setCheckoutQty([...checkOutDeets, item]);
    }
  };

  // Handle add to cart
  const handleAddtoCart = () => {
    let checkOutInfo = {
      id: nanoid(),
      title: product.fallCollection.productTitle,
      unitPrice: discountedPrice,
      qty: quantityCounter,
      image: image,
      total: discountedPrice * quantityCounter,
    };

    if (quantityCounter < 1) {
      setCardTester(false);
    }

    addCheckOutItem(checkOutInfo);

    if (quantityCounter > 0) {
      setSuccessTester(true);
    }

    setTimeout(() => {
      setCardTester(true);
      setSuccessTester(false);

      if (!successTester) {
        return null;
      }

      // setSuccessTester(false);
    }, 4000);
  };

  // Handle delete

  const handleDelete = (id) => {
    const newCheckOutItems = checkOutDeets.filter((item) => {
      return id !== item.id;
    });
    setCheckOutDeets(newCheckOutItems);
    setCheckoutQty(newCheckOutItems);
  };

  return (
    <CartQtyContext.Provider
      value={[
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
      ]}
    >
      {children}
    </CartQtyContext.Provider>
  );
};

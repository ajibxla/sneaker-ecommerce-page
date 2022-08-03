let css = `*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 16px;
  height: 100%;
}

body {
  width: 100vw;
  height: 100%;
  font-family: "Kumbh Sans", sans-serif;
  position: relative;
}

:root {
  /* Primary */
  --Orange: hsl(26, 100%, 55%);
  --Pale-orange: hsl(25, 100%, 94%);

  /* Neutral */
  --Very-dark-blue: hsl(220, 13%, 13%);
  --Darkgrayish-blue: hsl(219, 9%, 45%);
  --Grayish-blue: hsl(220, 14%, 75%);
  --Light-grayish-blue: hsl(223, 64%, 98%);
  --White: hsl(0, 0%, 100%);
  --Black-for-lightbox: hsl(0, 0%, 0%);
  --Font-size-paragraph: 1rem;
  --F400-weight: 400;
  --F700-weight: 700;
  --Kumbh: "Kumbh Sans", sans-serif;
}

/* nav */

nav {
  width: 90%;
  margin: auto;
  height: 4.1875rem;
  /* border-bottom: solid 3px; */
}

.nav-container {
  height: inherit;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.menu--links {
  height: 0.9375rem;
}
.menu--links img {
  cursor: pointer;
}
.links--logo {
  display: flex;
  align-items: center;
  gap: 0.875rem;
}

.cart--profile {
  display: flex;
  align-items: center;
  gap: 1.5625rem;
}

.cart {
  display: flex;
  position: relative;
  cursor: pointer;
}

.cart-svg:hover {
  fill: black;
  background-image: black;
  transition: all 0.2s ease;
}

.cart span {
  position: absolute;
  top: -0.4375rem;
  left: 0.8125rem;
  background-color: var(--Orange);
  width: 1.25rem;
  height: 0.9375rem;
  font-size: 0.625rem;
  color: white;
  border-radius: 0.75rem;
  font-weight: var(--F700-weight);
  text-align: center;
}

.profile--img {
  height: 1.875rem;
  width: 1.875rem;
  cursor: pointer;
}

.profile--img img {
  height: 100%;
  width: 100%;
}

.profile--img img:hover {
  border: 1px solid hsl(26, 100%, 55%);
  border-radius: 100%;
  /* transition: all 0.2s ease; */
}
.icon:hover {
  opacity: 0.7;
  transition: all 0.2s ease;
}

/* mobile slide out nav */
.nav-sidebar {
  position: fixed;
  background-color: white;
  width: 75%;
  height: 120vh;
  top: 0;
  left: 0;
  padding-top: 1.5rem;
  z-index: 100;
  padding-left: 1.5625rem;
}

.nav-sidebar img {
  margin-bottom: 3.3125rem;
  cursor: pointer;
}

.nav--links li {
  list-style: none;
  margin-bottom: 1.875rem;
}

.nav--links > li > a {
  text-decoration: none;
  text-transform: capitalize;
  color: black;
  font-weight: 700;
  font-size: 1rem;
}

/* main */

main {
  min-height: 100%;
  width: 100vw;
  padding-bottom: 6.25rem;
}

/* styling the images */

.product-image-container {
  position: relative;
}

.product-image {
  width: 100%;
}

.product-image img {
  width: inherit;
  height: inherit;
  object-fit: cover;
}

.image-thumbnail-holder {
  display: flex;
  margin-top: 21px;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  width: 90%;
  margin: 21px auto 0 auto;
}

.thumbnail > img {
  height: 100%;
  width: 100%;
  border-radius: 5%;
  cursor: pointer;
}

.thumbnail img:hover {
  opacity: 0.6;
  transition: all 0.2s ease;
}

/* styling the arrow */
.prev--next {
  width: 95%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  position: absolute;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.prev--next span {
  height: 3.125rem;
  width: 3.125rem;
  background-color: white;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.product-info-container {
  width: 90%;
  margin: auto;
  padding-top: 1.375rem;
}

.company-name {
  color: var(--Orange);
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 1.375rem;
}

.product-title {
  font-size: 1.875rem;
  font-size: calc(30px + (40 - 30) * ((100vw - 300px) / (1600 - 300)));
  max-width: 25rem;
  line-height: 2.1875rem;
  margin-bottom: 1.6875rem;
}

.product-info {
  color: var(--Darkgrayish-blue);
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5625rem;
  margin-bottom: 2.1875rem;
}

.pricing {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.875rem;
}

.price--discount {
  display: flex;
  gap: 0.9375rem;
  align-items: center;
}

.price {
  font-size: 1.875rem;
  font-weight: 700;
}

.discount {
  background-color: var(--Pale-orange);
  color: var(--Orange);
  width: 3.0625rem;
  height: 1.5625rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20%;
}

.full-price {
  color: var(--Grayish-blue);
  font-weight: 700;
  text-decoration: line-through;
}

.quantity-counter {
  width: 100%;
  height: 3.5rem;
  background-color: var(--Light-grayish-blue);
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.9375rem;
}

.quantity-counter-container {
  width: 85%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.quantity-counter-container span {
  cursor: pointer;
}

.quantity-counter-container p {
  font-weight: 700;
}

.quantity-counter-container span img {
  color: #ffac6a;
}

.add-to-cart-container {
  width: 100%;
  height: 3.5rem;
  background-color: var(--Orange);
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: orange;
  cursor: pointer;
}

.add-to-cart-container:hover {
  background-color: #ffac6a;
  transition: all 0.2s ease;
}

.add-to-cart {
  display: flex;
  justify-content: center;
  align-content: center;
  gap: 0.9375rem;
  color: white;
  font-weight: 700;
}

.add-to-cart img {
  color: white;
}

.warning,
.success {
  margin-bottom: 0.625rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
}

.cartTest {
  text-align: center;
  color: red;
}

.success {
  text-align: center;
  color: green;
  margin-bottom: 0;
}

/* Add darkness to bg */

.darkenbg::after {
  content: "";
  z-index: 95;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: black;
  opacity: 0.8;
  overflow-y: hidden;
}

/* checkout page */

.checkout-page {
  position: absolute;
  height: 15.9375rem;
  width: 95%;
  background-color: white;
  left: 0;
  right: 0;
  z-index: 90;
  margin: 0 auto;
  margin-top: 0.625rem;
  border-radius: 0.625rem;
  overflow-y: scroll;
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding-bottom: 31.25rem; */
}

.checkout-page-container {
  width: 95%;
  height: 95%;
  padding: 0 0.625rem 0 0.625rem;
  display: flex;
  flex-direction: column;
}

.checkout-title {
  padding-bottom: 0.9375rem;
  width: 0.625rem;
  font-weight: 900;
  padding-top: 0.9375rem;
}

.line {
  width: 100%;
  min-height: 0.0625rem;
  background-color: var(--Light-grayish-blue);
  margin-bottom: 0.9375rem;
}

.checkoutItems {
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  width: 100%;
  margin: auto;
}

.checkout-info {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.checkout-img-container {
  height: 3.6875rem;
  width: 3.125rem;
}

.product-details {
  width: 70%;
}

.checkout-img-container img {
  object-fit: contain;
  height: 100%;
  width: 100%;
  border-radius: 0.625rem;
}

.product-detail-title p {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 90%;
}

.product-detail-price {
  display: flex;
  gap: 0.625rem;
}

.checkoutItem * p {
  font-size: 1rem;
}

.product-detail-title p,
.unitPrice,
.message {
  color: var(--Darkgrayish-blue);
}

.item-total {
  font-weight: bold;
  color: black;
}

.check-out-holder {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.checkout-page button {
  width: 86%;
  min-height: 3.25rem;
  color: white;
  border: none;
  outline: none;
  background-color: var(--Orange);
  border-radius: 0.625rem;
  margin: 1.25rem auto 1.875rem auto;
  justify-self: center;
  cursor: pointer;
}

.message {
  width: 9.375rem;
  align-self: center;
  padding-top: 4.0625rem;
  font-size: 0.875rem;
}

.checkoutItem span {
  cursor: pointer;
}

@media screen and (min-width: 720px) {
  main {
    display: flex;
    width: 75%;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;
    padding-top: 81px;
    gap: 150px;
    /* position: relative; */
  }

  .product-image > img {
    border-radius: 5%;
    width: 450px;
    height: 450px;
  }

  /* .product-image-container {
    width: 50%;
  } */

  .product-info-container {
    width: auto;
    margin: 0;
    padding-top: 0;
    height: auto;
    align-items: center;
  }

  .image-thumbnail-holder {
    width: 100%;
    gap: 5px;
  }

  .image-thumbnail {
    height: 100px;
    width: 100px;
  }

  .pricing {
    flex-direction: column;
    align-items: flex-start;
  }

  .counter--cart {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 15px;
  }

  .warning-signals {
    grid-area: 2 / 1 / 3 / 6;
  }

  .quantity-counter {
    /* width: 50%;
    max-width: 145px; */
    grid-area: 1 / 1 / 2 / 3;
  }

  .add-to-cart-container {
    grid-area: 1 / 3 / 2 / 6;
    /* max-width: 250px; */
  }

  .links--logo {
    gap: 81px;
  }

  nav {
    padding-top: 10px;
  }

  nav:after {
    content: "";
    display: block;
    padding-top: 20px;
    border-bottom: 1px solid hsl(223, 64%, 98%);
  }
  .nav--links {
    display: flex;
    align-content: center;
    justify-content: center;
    gap: 26px;
    overflow: hidden;
  }

  .nav--links li {
    list-style: none;
    margin: 0;
    /* padding-bottom: 43px;
    padding-top: 45px; */
  }

  .nav--links li a {
    text-decoration: none;
    text-transform: capitalize;
    color: var(--Grayish-blue);
    font-weight: 400;
    font-size: 14px;
  }

  .nav--links li a:hover {
    color: var(--Orange);
    transition: all 0.2s ease;
  }

  .profile--img {
    height: 43px;
    width: 43px;
  }

  .cart--profile {
    gap: 43px;
  }

  .product-title {
    line-height: 2.5rem;
  }

  .checkout-page {
    position: absolute;
    top: 4.1875rem;
    left: auto;
    right: 4.1875rem;
    height: 245px;
    width: 357px;
    margin: 0;
    box-shadow: -23px 29px 61px -2px rgba(104, 112, 125, 0.75);
    margin-left: 900px;
  }

  /* Modal */
  .modal {
    position: absolute;
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
  }

  .modal::after {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    min-height: 100%;
    height: 100%;
    background-color: black;
    width: 100vw;
    opacity: 0.87;
  }

  .modal--container {
    width: auto;
    height: auto;
    position: relative;
    opacity: 1;
    z-index: 10000;
  }

  .modal--container .modal-close-btn {
    position: absolute;
    top: -50px;
    right: 0;
    margin-bottom: 200px;
    cursor: pointer;
  }

  .modal-product-image-container {
    width: 100%;
  }

  .modal-product-image-container .product-image img {
    width: 100%;
    height: 100%;
  }
  .modal-image-thumbnail-holder {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-top: 50px;
  }
  .prev--next {
    width: 110%;
  }
  .prev--next span {
    height: 2rem;
    width: 2rem;
  }

  .modal-image-thumbnail {
    height: 88px;
    width: 88px;
  }

  .modal-product-image {
    position: relative;
    width: 400px;
    height: 400px;
  }

  .modal-product-image .product-img {
    height: inherit;
    width: inherit;
    border-radius: 5%;
  }

  .modal-thumbnail > img {
    cursor: not-allowed;
  }

  .modal-close-btn-exact:hover {
    fill: var(--Orange);
    transition: all 0.2s ease;
  }

  .prev:hover {
    fill: var(--Orange);
    transition: all 0.2s ease;
  }

  .next:hover {
    fill: var(--Orange);
    transition: all 0.2s ease;
  }
}

`;

function pxToRem(CSSString) {
  const rgx = new RegExp(/(\d+\.?\d*)px/, "g");
  return CSSString.replace(rgx, (match, n) => n / 16 + "rem");
}

console.log(pxToRem(css));

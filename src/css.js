let css = `*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  width: 100vw;
  height: 100vh;
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
  --Font-size-paragraph: 16px;
  --F400-weight: 400;
  --F700-weight: 700;
  --Kumbh: "Kumbh Sans", sans-serif;
}

/* nav */

nav {
  width: 90%;
  margin: auto;
  height: 67px;
}

.nav-container {
  height: inherit;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.menu--links {
  height: 15px;
}
.menu--links img {
  cursor: pointer;
}
.links--logo {
  display: flex;
  align-items: center;
  gap: 14px;
}

.cart--profile {
  display: flex;
  align-items: center;
  gap: 25px;
}

.cart {
  display: flex;
  position: relative;
  cursor: pointer;
}

.cart span {
  position: absolute;
  top: -7px;
  left: 13px;
  background-color: var(--Orange);
  width: 20px;
  height: 15px;
  font-size: 10px;
  color: white;
  border-radius: 12px;
  font-weight: var(--F700-weight);
  text-align: center;
}

.profile--img {
  height: 30px;
  width: 30px;
  cursor: pointer;
}

.profile--img img {
  height: 100%;
  width: 100%;
}

/* mobile slide out nav */
.nav-sidebar {
  position: fixed;
  background-color: white;
  width: 75%;
  height: 120vh;
  top: 0;
  left: 0;
  padding-top: 24px;
  z-index: 100;
  padding-left: 25px;
}

.nav-sidebar img {
  margin-bottom: 53px;
  cursor: pointer;
}

.nav--links li {
  list-style: none;
  margin-bottom: 30px;
}

.nav--links > li > a {
  text-decoration: none;
  text-transform: capitalize;
  color: black;
  font-weight: 700;
  font-size: 16px;
}

/* main */

main {
  min-height: 100%;
  width: 100vw;
  padding-bottom: 100px;
}

/* styling the images */

.product-image-container {
  position: relative;
}

.product-image {
  width: 100%;
  height: 300px;
}

.product-image img {
  width: inherit;
  height: inherit;
  object-fit: cover;
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
  height: 50px;
  width: 50px;
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
  padding-top: 22px;
}

.company-name {
  color: var(--Orange);
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 22px;
}

.product-title {
  font-size: 30px;
  max-width: 400px;
  line-height: 35px;
  margin-bottom: 27px;
}

.product-info {
  color: var(--Darkgrayish-blue);
  font-weight: 400;
  font-size: 16px;
  line-height: 25px;
  margin-bottom: 35px;
}

.pricing {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
}

.price--discount {
  display: flex;
  gap: 15px;
  align-items: center;
}

.price {
  font-size: 30px;
  font-weight: 700;
}

.discount {
  background-color: var(--Pale-orange);
  color: var(--Orange);
  width: 49px;
  height: 25px;
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
  height: 56px;
  background-color: var(--Light-grayish-blue);
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
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

.add-to-cart-container {
  width: 100%;
  height: 56px;
  background-color: var(--Orange);
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: orange;
  cursor: pointer;
}

.add-to-cart {
  display: flex;
  justify-content: center;
  align-content: center;
  gap: 15px;
  color: white;
  font-weight: 700;
}

.add-to-cart img {
  color: white;
}

.warning,
.success {
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
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
  height: 255px;
  width: 95%;
  background-color: white;
  left: 0;
  right: 0;
  z-index: 90;
  margin: 0 auto;
  margin-top: 10px;
  border-radius: 10px;
  overflow-y: scroll;
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding-bottom: 500px; */
}

.checkout-page-container {
  width: 95%;
  height: 95%;
  padding: 0 10px 0 10px;
  display: flex;
  flex-direction: column;
}

.checkout-title {
  padding-bottom: 15px;
  width: 10px;
  font-weight: 900;
  padding-top: 15px;
}

.line {
  width: 100%;
  min-height: 1px;
  background-color: var(--Light-grayish-blue);
  margin-bottom: 15px;
}

.checkoutItems {
  display: flex;
  flex-direction: column;
  gap: 10px;
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
  height: 59px;
  width: 50px;
}

.product-details {
  width: 70%;
}

.checkout-img-container img {
  object-fit: contain;
  height: 100%;
  width: 100%;
  border-radius: 10px;
}

.product-detail-title p {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 90%;
}

.product-detail-price {
  display: flex;
  gap: 10px;
}

.checkoutItem * p {
  font-size: 16px;
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
  min-height: 52px;
  color: white;
  border: none;
  outline: none;
  background-color: var(--Orange);
  border-radius: 10px;
  margin: 20px auto 30px auto;
  justify-self: center;
}

.message {
  width: 150px;
  align-self: center;
  padding-top: 65px;
  font-size: 14px;
}
`;

function pxToRem(CSSString) {
  const rgx = new RegExp(/(\d+\.?\d*)px/, "g");
  return CSSString.replace(rgx, (match, n) => n / 16 + "rem");
}

console.log(pxToRem(css));

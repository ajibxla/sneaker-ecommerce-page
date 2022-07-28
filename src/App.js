import { useState } from "react";
import "./App.css";
import Main from "./components/Main";
import Nav from "./components/Nav";
import { CartProvider } from "./context/CartQtyContext";

function App() {
  return (
    <CartProvider>
      <div className="App">
        <Nav />
        <Main />
      </div>
    </CartProvider>
  );
}

export default App;

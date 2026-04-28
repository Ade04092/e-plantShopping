import React, { useState } from "react";
import { useSelector } from "react-redux";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";
import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const cartItems = useSelector((state) => state.cart.items);

  const calculateTotalQuantity = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <div>
      <nav className="navbar">
        <h2 onClick={() => setCurrentPage("home")}>Paradise Nursery</h2>

        <div className="nav-links">
          <button onClick={() => setCurrentPage("home")}>Home</button>
          <button onClick={() => setCurrentPage("plants")}>Plants</button>
          <button onClick={() => setCurrentPage("cart")}>
            🛒 Cart ({calculateTotalQuantity()})
          </button>
        </div>
      </nav>

      {currentPage === "home" && (
        <div className="landing-page">
          <div className="landing-content">
            <h1>Paradise Nursery</h1>
            <p>
              Welcome to Paradise Nursery, your online plant shop for beautiful,
              healthy houseplants. We offer aromatic, medicinal, and air-purifying
              plants to make your home greener and more peaceful.
            </p>
            <button onClick={() => setCurrentPage("plants")}>Get Started</button>
          </div>
        </div>
      )}

      {currentPage === "plants" && <ProductList />}

      {currentPage === "cart" && (
        <CartItem onContinueShopping={() => setCurrentPage("plants")} />
      )}
    </div>
  );
}

export default App;

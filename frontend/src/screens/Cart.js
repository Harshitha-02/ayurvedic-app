import React, { useState } from 'react';
import './Cart.css'; // Import the CSS for styling

const CartScreen = () => {
  // Example data, assuming you will pass in medicines added by patients
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Ayurvedic Medicine A',
      price: 10.99,
      quantity: 2,
      image: 'https://via.placeholder.com/100', // Placeholder image for the medicines
    },
    {
      id: 2,
      name: 'Herbal Supplement B',
      price: 15.49,
      quantity: 1,
      image: 'https://via.placeholder.com/100',
    },
  ]);

  // Function to handle quantity changes
  const handleQuantityChange = (id, delta) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(item.quantity + delta, 1) }
          : item
      )
    );
  };

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} />
            <div className="cart-details">
              <h3>{item.name}</h3>
              <p>Price: ₹{item.price.toFixed(2)}</p>
              <div className="quantity-controls">
                <button onClick={() => handleQuantityChange(item.id, -1)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => handleQuantityChange(item.id, 1)}>+</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <h2>Total: ₹{totalPrice.toFixed(2)}</h2>
        <button className="checkout-btn">Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default CartScreen;


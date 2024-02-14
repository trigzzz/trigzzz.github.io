import React from 'react';
import { useSelector } from 'react-redux';

const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.items); 

  if (!Array.isArray(cartItems)) {
    
    return <p>There was an issue loading your cart items.</p>;
  }

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  const handleCheckout = () => {
    const totalPrice = calculateTotalPrice();
    
    alert(`Thanks For Shopping :) Total Price: $${totalPrice.toFixed(2)}`);
  };

  return (
    <div>
      <h2>Checkout</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.name} - ${item.price}
              </li>
            ))}
          </ul>
          <p>Total Price: ${calculateTotalPrice().toFixed(2)}</p>
          {/* Add a checkout form or more content */}
          <button onClick={handleCheckout}>Checkout</button>
        </div>
      )}
    </div>
  );
};

export default Checkout;

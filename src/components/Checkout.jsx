import React from 'react';
import { useSelector } from 'react-redux';

const Checkout = () => {
  const cartItems = useSelector((state) => state.cart);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
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
          <p>Total: ${calculateTotal()}</p>
          <button onClick={() => alert('Thank you for your purchase!')}>Proceed to Checkout</button>
        </div>
      )}
    </div>
  );
};

export default Checkout;

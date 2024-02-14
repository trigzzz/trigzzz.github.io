import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/reducers/cartSlice';

const ShoppingCart = () => {
  const cartItems = useSelector((state) => state.cart.items); 
  const dispatch = useDispatch();

  const removeItem = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  if (!cartItems) {
    
    return <p>Your cart is empty.</p>;
  }

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.name} - ${item.price}
                <button onClick={() => removeItem(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;

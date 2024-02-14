
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Hype Streetwear Store</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cart">Shopping Cart</Link>
          </li>
          <li>
            <Link to="/checkout">Checkout</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, clearNotification } from '../redux/reducers/cartSlice';
import { fetchProductsAsync } from '../redux/reducers/productsSlice';
import { products as staticProducts } from '../data/data'; 
import './ProductList.css';

const ProductList = () => {
  const productsFromApi = useSelector((state) => state.products.data);
  const notification = useSelector((state) => state.cart.notification);
  const dispatch = useDispatch();

  useEffect(() => {
    if (productsFromApi.length === 0) {
      dispatch(fetchProductsAsync());
    }
  }, [dispatch, productsFromApi]);


  const allProducts = [...staticProducts, ...productsFromApi];

  
  const closeNotification = () => {
    dispatch(clearNotification());
  };

  return (
    <div className="product-list-container">
      {notification && (
        <div className="notification">
          <p>{notification}</p>
          <button onClick={closeNotification}>Close</button>
        </div>
      )}
      <h2>Explore Our Products!</h2>
      <ul className="product-list">
        {allProducts.map((product) => (
          <li key={product.id} className="product-item">
            <Link to={`/products/${product.id}`}>
              <img src={product.image} alt={product.title} />
              <div className="product-details">
                <h3>{product.title}</h3>
                <p className="price">${product.price}</p>
              </div>
            </Link>
            <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;

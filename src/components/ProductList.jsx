import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../redux/reducers/cartSlice';
import { fetchProductsAsync } from '../redux/reducers/productsSlice';
import './ProductList.css';


const ProductList = () => {
  const products = useSelector((state) => state.products.data);
  const dispatch = useDispatch();

  useEffect(() => {
    
    if (products.length === 0) {
      dispatch(fetchProductsAsync());
    }
  }, [dispatch, products]);

  return (
    <div className="product-list-container">
      <h2>Explore Our Products!</h2>
      <ul className="product-list">
        {products.map((product) => (
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

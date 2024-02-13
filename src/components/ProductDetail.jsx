import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ProductDetail = () => {
  const { productId } = useParams();
  const product = useSelector((state) =>
    state.products.find((item) => item.id === parseInt(productId))
  );

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} />
      <p>Price: ${product.price}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductDetail;

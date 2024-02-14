import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import ShoppingCart from './components/ShoppingCart';
import Checkout from './components/Checkout';
import { products } from './data/data.js'; 

const App = () => {
  return (
    <Router>
      <div>
        <Header />

        <Switch>
          <Route path="/cart">
            <ShoppingCart />
          </Route>
          <Route path="/products/:productId">
            <ProductDetail products={products} />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/">
            <ProductList products={products} />
          </Route>
        </Switch>

        <Footer />
      </div>
    </Router>
  );
};

export default App;

import React, { useState } from 'react';
import { ProductList } from './ProductList'
import { ProductDetail } from './ProductDetail'
import { ProductCart } from './ProductCart'


import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const [selectedProduct, selectProduct] = useState(null)
  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          <ProductList selectProduct={selectProduct} />
        </Route>
        <Route path='/details'>
          <ProductDetail selectedProduct={selectedProduct} />
        </Route>
        <Route path='/cart'>
          <ProductCart />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

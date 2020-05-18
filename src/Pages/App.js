import React from 'react';
import { ProductList } from 'Pages/ProductList'
import { ProductDetails } from 'Pages/ProductDetails'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={ProductList} exact />
        <Route path='/details' component={ProductDetails} />
      </Switch>
    </Router>
  );
}

export default App;

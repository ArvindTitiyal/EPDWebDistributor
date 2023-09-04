import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Home from './components/Home';
import DistributorShop from './components/DistributorShop';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/shop/shop1">Shop 1</Link>
            </li>
            <li>
              <Link to="/shop/shop2">Shop 2</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/shop/:shopId" component={DistributorShop} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

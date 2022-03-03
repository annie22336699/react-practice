import { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import RouterMenu from './components/RouterMenu';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Product from './pages/Product';
import Login from './pages/Login';
import NotFoundPage from './pages/NotFoundPage';

function RouterTest01() {
  const [auth, setAuth] = useState(false);

  return (
    <Router>
      <>
        {/* 選單 */}
        <RouterMenu />
        {/* 路由表 */}
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route path="/about/contact">
            <Contact />
          </Route>
          <Route path="/product">
            <Product />
          </Route>
          <Route path="/login">
            <Login auth={auth} setAuth={setAuth} />
          </Route>
          <Route exact path="/">
            <Home auth={auth} />
          </Route>
          <Route path="*">
            <NotFoundPage />
          </Route>
        </Switch>
      </>
    </Router>
  );
}

export default RouterTest01;

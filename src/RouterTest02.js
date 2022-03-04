import { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import RouterMenu from './components/RouterMenu'; // nav之類的選單
import MLBreadcrumb from './components/MLBreadcrumb'; // 麵包屑

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import ProductDetail from './pages/ProductDetail';
import ProductDetailQS from './pages/ProductDetailQS';
import ProductList from './pages/ProductList';
import ProductListQS from './pages/ProductListQS';
import Login from './pages/Login';
import NotFoundPage from './pages/NotFoundPage';
import OrderIndex from './pages/Order/OrderIndex';
import OrderSteps from './pages/Order2/OrderSteps';

function RouterTest01() {
  const [auth, setAuth] = useState(false);

  return (
    <Router>
      <>
        {/* 選單 */}
        <RouterMenu />
        <MLBreadcrumb />
        {/* 路由表 */}
        <Switch>
          <Route path="/order">
            <OrderIndex />
          </Route>
          <Route path="/order-steps/:stepType?">
            <OrderSteps />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/about/contact">
            <Contact />
          </Route>
          <Route path="/product-list-qs">
            <ProductListQS />
          </Route>
          <Route path="/product-detail-qs">
            <ProductDetailQS />
          </Route>
          <Route path="/product-list">
            <ProductList />
          </Route>
          {/* 網址上的動態參數params */}
          <Route path="/product-detail/:id">
            <ProductDetail />
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

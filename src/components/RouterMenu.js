import React from 'react';
import { Link } from 'react-router-dom';

function RouterMenu() {
  return (
    <div>
      {/* <h2>a href</h2>
      <a href="/">首頁</a>
      <br />
      <a href="/login">登入</a>
      <hr />
      <h2>Link to</h2> */}
      <Link to="/">首頁</Link>{' '}
      <Link to="/product-list">產品清單(URL Params)</Link>{' '}
      <Link to="/product-list-qs">產品清單(Query String)</Link>{' '}
      <Link to="/order">訂購流程(網址無連動)</Link>{' '}
      <Link to="/order-steps">訂購流程(網址連動)</Link>{' '}
      <Link to="/login">登入</Link>
      <hr />
    </div>
  );
}

export default RouterMenu;

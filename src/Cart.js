import './ShoppingCart.css';
import OrderList from './components/cart/OrderList';
import Summary from './components/cart/Summary';
import { useState } from 'react';

const products = [
  {
    id: 1,
    name: '咖啡色棉 T-shirt',
    categroy: 'Shirt',
    image: 'https://i.imgur.com/1GrakTl.jpg',
    price: 440,
  },
  // {
  //   id: 2,
  //   name: '白色棉 T-shirt',
  //   categroy: 'Shirt',
  //   image: 'https://i.imgur.com/ba3tvGm.jpg',
  //   price: 400,
  // },
  // {
  //   id: 3,
  //   name: '黑色棉 T-shirt',
  //   categroy: 'Shirt',
  //   image: 'https://i.imgur.com/pHQ3xT3.jpg',
  //   price: 400,
  // },
];

function Cart() {
  const [count, setCount] = useState(1); // 預設加入購物車就有1
  return (
    <>
      <div className="card">
        <div className="row">
          <OrderList products={products} count={count} setCount={setCount} />
          <Summary totalNumber={count} totalPrice={count * products[0].price} />
        </div>
      </div>
    </>
  );
}

export default Cart;

import React from 'react';
import ProductCart from './ProductCart';

const products = [
  {
    id: 1,
    name: '咖啡色棉 T-shirt',
    categroy: 'Shirt',
    image: 'https://i.imgur.com/1GrakTl.jpg',
    price: 440,
  },
  {
    id: 2,
    name: '白色棉 T-shirt',
    categroy: 'Shirt',
    image: 'https://i.imgur.com/ba3tvGm.jpg',
    price: 400,
  },
  {
    id: 3,
    name: '黑色棉 T-shirt',
    categroy: 'Shirt',
    image: 'https://i.imgur.com/pHQ3xT3.jpg',
    price: 400,
  },
];

function OrderList() {
  return (
    <>
      <div className="col-md-8 cart">
        <div className="title">
          <div className="row">
            <div className="col">
              <h4>
                <b>購物車</b>
              </h4>
            </div>
            <div className="col align-self-center text-right text-muted ">
              3 items
            </div>
          </div>
        </div>
        {products.map((product, i) => {
          const { id, name, categroy, image, price } = product;

          return (
            <ProductCart
              key={id}
              id={id}
              name={name}
              categroy={categroy}
              price={price}
              image={image}
            />
          );
        })}
        <div className="back-to-shop">
          <a href="#/">←</a>
          <span className="text-muted">回到商品頁</span>
        </div>
      </div>
    </>
  );
}

export default OrderList;

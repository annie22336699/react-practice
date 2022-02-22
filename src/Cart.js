import './ShoppingCart.css';
import OrderList from './components/cart/OrderList';
import Summary from './components/cart/Summary';

function Cart() {
  return (
    <>
      <div className="card">
        <div className="row">
          <OrderList />
          <Summary />
        </div>
      </div>
    </>
  );
}

export default Cart;

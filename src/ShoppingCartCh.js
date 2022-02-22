import './ShoppingCart.css';

function ShoppingCartCh() {
  return (
    <>
      <div className="card">
        <div className="row">
          <div className="col-md-8 cart">
            <div className="title">
              <div className="row">
                <div className="col">
                  <h4>
                    <b>購物車</b>
                  </h4>
                </div>
                <div className="col align-self-center text-right text-muted">
                  3 items
                </div>
              </div>
            </div>
            <div className="row border-top border-bottom">
              <div className="row main align-items-center">
                <div className="col-2">
                  <img
                    className="img-fluid"
                    src="https://i.imgur.com/1GrakTl.jpg"
                    alt=""
                  />
                </div>
                <div className="col">
                  <div className="row text-muted">Shirt</div>
                  <div className="row">咖啡色棉 T-shirt</div>
                </div>
                <div className="col">
                  <a href="#/">-</a>
                  <a href="#/" className="border">
                    1
                  </a>
                  <a href="#/">+</a>
                </div>
                <div className="col">
                  $440 <span className="close">✕</span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="row main align-items-center">
                <div className="col-2">
                  <img
                    className="img-fluid"
                    src="https://i.imgur.com/ba3tvGm.jpg"
                    alt=""
                  />
                </div>
                <div className="col">
                  <div className="row text-muted">Shirt</div>
                  <div className="row">白色棉 T-shirt</div>
                </div>
                <div className="col">
                  <a href="#/">-</a>
                  <a href="#/" className="border">
                    1
                  </a>
                  <a href="#/">+</a>
                </div>
                <div className="col">
                  $440 <span className="close">✕</span>
                </div>
              </div>
            </div>
            <div className="row border-top border-bottom">
              <div className="row main align-items-center">
                <div className="col-2">
                  <img
                    className="img-fluid"
                    src="https://i.imgur.com/pHQ3xT3.jpg"
                    alt=""
                  />
                </div>
                <div className="col">
                  <div className="row text-muted">Shirt</div>
                  <div className="row">黑色棉 T-shirt</div>
                </div>
                <div className="col">
                  <a href="#/">-</a>
                  <a href="#/" className="border">
                    1
                  </a>
                  <a href="#/">+</a>
                </div>
                <div className="col">
                  $440 <span className="close">✕</span>
                </div>
              </div>
            </div>
            <div className="back-to-shop">
              <a href="#/">←</a>
              <span className="text-muted">回到商品頁</span>
            </div>
          </div>
          <div className="col-md-4 summary">
            <div>
              <h5>
                <b>結帳清單</b>
              </h5>
            </div>
            <hr />
            <div className="row">
              <div className="col padding-left-0">共 3 項</div>
            </div>

            <div className="row border-top-1 padding-2vh">
              <div className="col">總價</div>
              <div className="col text-right">$440</div>
            </div>
            <button className="btn">前往付款</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShoppingCartCh;

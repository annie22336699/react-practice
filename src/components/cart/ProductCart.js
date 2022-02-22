function ProductCart(prpos) {
  // 每個商品物件
  // {
  //     id: 1,
  //     name: '咖啡色棉 T-shirt',
  //     categroy: 'Shirt',
  //     image: 'https://i.imgur.com/1GrakTl.jpg',
  //     price: 440,
  // }

  const { id, name, categroy, image, price } = prpos;

  return (
    <>
      <div className="row border-top border-bottom">
        <div className="row main align-items-center min-height-100">
          <div className="col-2">
            <img className="img-fluid" src={image} alt="" />
          </div>
          <div className="col">
            <div className="row text-muted">{categroy}</div>
            <div className="row">{name}</div>
          </div>
          <div className="col">
            <a href="#/">-</a>
            <a href="#/" className="border">
              1
            </a>
            <a href="#/">+</a>
          </div>
          <div className="col">
            ${price} <span className="close">✕</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCart;

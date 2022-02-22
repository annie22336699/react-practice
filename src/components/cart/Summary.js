function Summary() {
  return (
    <>
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
    </>
  );
}

export default Summary;

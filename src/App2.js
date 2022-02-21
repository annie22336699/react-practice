/* eslint-disable no-useless-concat */
function App2() {
  return (
    <>
      <h2>Number</h2>
      {123}
      {123 + 1}
      <h2>Boolean</h2>
      {true}
      {false}
      <h2>String</h2>
      {'abc'}
      {'abc' + 'de'}
      {/* 好像是+被判定無作用，可是刪除會出錯? */}
      <h2>null/undefined</h2>
      {null}
      {undefined}
    </>
  );
}

export default App2;

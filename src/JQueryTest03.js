import { useState, useEffect, useRef } from 'react';
import $ from 'jquery';

function JQueryTest03(props) {
  const [total, setTotal] = useState(0);

  const titleRef = useRef(null);
  const buttonRef = useRef(null);

  // didMount+didUpdate
  useEffect(() => {
    // jquery code
    //console.log($(titleRef.current).text())

    //移除原事件(不移除的話設定完次數後就會全部跳出來(JQ的事件監聽問題))
    $(buttonRef.current).off('click');

    // 加入新事件
    $(buttonRef.current).on('click', () =>
      alert('Hello ' + $(titleRef.current).text() + ' 目前total狀態=' + total)
    );
  }, [total]);

  return (
    <>
      <h1 ref={titleRef}>React</h1>
      <button ref={buttonRef}>Click me</button>
      <h1 onClick={() => setTotal(total + 1)}>{total}</h1>
    </>
  );
}

export default JQueryTest03;

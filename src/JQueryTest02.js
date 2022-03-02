import { useEffect, useRef } from 'react';
import $ from 'jquery';

function JQueryTest02() {
  // 使用refs用法不裝id形式(適合同標籤數量多的時候)

  const titleRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    // JQ寫在這裡
    console.log($(titleRef.current).text());
    $(buttonRef.current).on('click', function () {
      alert('hello, ' + $(titleRef.current).text());
    });
  }, []);

  return (
    <>
      <h1 ref={titleRef}>React</h1>
      <h4>Refs寫法</h4>
      <button ref={buttonRef}>Click</button>
    </>
  );
}

export default JQueryTest02;

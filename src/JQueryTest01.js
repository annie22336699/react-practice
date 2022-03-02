import { useEffect } from 'react';
import $ from 'jquery';

function JQueryTest01() {
  useEffect(() => {
    // JQ寫在這裡
    console.log($('#title').text());
    $('#one').on('click', function () {
      alert('hello, ' + $('#title').text());
    });
  }, []);

  return (
    <>
      <h1 id="title">React</h1>
      <h4>ID寫法</h4>
      <button id="one">Click</button>
    </>
  );
}

export default JQueryTest01;

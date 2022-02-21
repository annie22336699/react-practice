import { useState } from 'react';
import './menu.css';

function Homework01() {
  // 目前的所有的選單項目
  const menuItems = ['首頁', '關於我們', '產品'];
  // -1代表一開始沒有被按的項目
  const [activeIndex, setActiveIndex] = useState(-1);

  return (
    <ul>
      {menuItems.map((v, i) => {
        return (
          <li
            key={i}
            onClick={() => {
              setActiveIndex(i);
            }}
          >
            <a href="#/" className={activeIndex === i ? 'active' : ''}>
              {v}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default Homework01;

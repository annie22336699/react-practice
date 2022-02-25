import React, { useState } from 'react';
// import React, { useState, useEffect } from 'react';  // useEffect就沒用到不知道為啥需要
import CCLifecycle from './components/CCLifecycle';

function LifeRecyle01() {
  const [alive, setAlive] = useState(true);

  return (
    <>
      {alive && <CCLifecycle />}
      <button
        onClick={() => {
          setAlive(!alive);
        }}
      >
        {alive ? '再見' : '出現'}
      </button>
    </>
  );
}

export default LifeRecyle01;

// memo
// 生命週期(類別型元件)

// 掛載
// constructor
// ↓
// render
// ↓
// componentDidMount

// 更新
// render
// ↓
// componentDidUpdate

// 被移除前
// componentWillUnmount

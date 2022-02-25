// import { useState, useEffect } from 'react';
import { useState } from 'react';
// import FCLifecycle01 from './components/FCLifecycle01';
import FCLifecycle02 from './components/FCLifecycle02';

function LifeRecyle02() {
  const [alive, setAlive] = useState(true);

  return (
    <>
      {/* {alive && <FCLifecycle01 />} */}
      {alive && <FCLifecycle02 />}
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

export default LifeRecyle02;

// memo
// 生命週期(函式型元件)

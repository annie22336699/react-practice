import { useState } from 'react';

function Form02() {
  const [data, setData] = useState({ fullname: '', phone: '' });

  const handleChange = (e) => {
    const newData = { ...data, [e.target.name]: e.target.value };
    setData(newData);
  };
  return (
    <>
      <h2>文字輸入框</h2>
      <label>姓名</label>
      <input
        type="text"
        value={data.fullname}
        name="fullname"
        onChange={handleChange}
      />
      <br />
      <label>電話</label>
      <input
        type="text"
        value={data.phone}
        name="phone"
        onChange={handleChange}
      />
    </>
  );
}

export default Form02;

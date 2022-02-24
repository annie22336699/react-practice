import { useState } from 'react';

function Form01() {
  const [inputText, setInputText] = useState('');
  const [textArea, setTextArea] = useState('');

  // 給單選用
  const [radioValue, setRadioValue] = useState('');
  const foodOptions = ['排骨飯', '雞腿飯', '牛肉麵'];

  // 下拉式選單
  const [selectedValue, setSelectedValue] = useState('');

  // 複選框單選
  const [agree, setAgree] = useState(false);

  // 複選框複選
  const [IngList, setIngList] = useState([]); // 務必要是群組
  const ingOptions = ['烏魚子', '鮪魚', '鮭魚', '旗魚'];

  return (
    <>
      <h1>可控表單元素</h1>
      <br />
      <h3>文字輸入框 input</h3>
      <input
        type="text"
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value);
        }}
      ></input>
      <br />
      <br />
      <h3>文字輸入區域 textarea</h3>
      <textarea
        value={textArea}
        onChange={(e) => {
          setTextArea(e.target.value);
        }}
      />
      <br />
      <br />
      <h3>選項按鈕群組 radio</h3>
      {/* 較好的寫法 */}
      {foodOptions.map((v, i) => {
        return (
          <div key={i}>
            <input
              type="radio"
              value={v}
              id={'foodOption' + i}
              checked={v === radioValue}
              onChange={(e) => {
                setRadioValue(e.target.value);
              }}
            />
            <label htmlFor={'foodOption' + i}>{v}</label>
          </div>
        );
      })}
      <br />
      <br />
      <h3>下拉式選單 select</h3>
      <label htmlFor="cars">選擇車子：</label>
      <select
        name="cars"
        id="cars"
        value={selectedValue}
        onChange={(e) => {
          setSelectedValue(e.target.value);
        }}
      >
        <option value="">請選擇</option>
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="opel">Opel</option>
        <option value="audi">Audi</option>
      </select>
      <br />
      <br />
      <h3>複選框單一選項 checkbox</h3>
      <input
        type="checkbox"
        checked={agree}
        onChange={(e) => {
          setAgree(e.target.checked);
        }}
      />
      <label>我同意</label>
      <br />
      <br />
      <h3>複選框複數選項 checkbox</h3>
      <p>請選擇你喜歡的配料</p>
      {ingOptions.map((v, i) => {
        return (
          <div key={i}>
            <input
              type="checkbox"
              value={v}
              checked={IngList.includes(v)}
              onChange={(e) => {
                // 先判斷是否有在狀態陣列中
                const inState = IngList.includes(e.target.value);
                if (inState) {
                  // 如果在陣列中則移除
                  const newIngList = IngList.filter(
                    (v, i) => v !== e.target.value
                  );
                  setIngList(newIngList);
                } else {
                  // 如果不在則加入陣列
                  const newIngList = [...IngList, e.target.value];
                  setIngList(newIngList);
                }
              }}
            />
            <label>{v}</label>
          </div>
        );
      })}
    </>
  );
}

export default Form01;

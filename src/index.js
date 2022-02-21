import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import App2 from './App2';
// import CC from './CC';
// import FC from './FC';
// import App3 from './App3';
// import Students from './Students';
import Props from './Props';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <App2 /> */}
    {/* <CC /> */}
    {/* <FC /> */}
    {/* <App3 /> */}
    {/* <Students /> */}
    <Props />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

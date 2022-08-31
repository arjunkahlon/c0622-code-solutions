import React from 'react';
import ReactDOM from 'react-dom/client';

const header = React.createElement(
  'h1',
  [null],
  [...'Hello, React!']
);

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(header);

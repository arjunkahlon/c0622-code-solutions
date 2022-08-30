import React from 'react';
import ReactDOM from 'react-dom';

function CustomButton(props) {
  return <button>{props.prompt}</button>;
}

const root = ReactDOM.createRoot(document.querySelector('#root'));
const element = <CustomButton prompt="Click Me"/>;
root.render(element);

import React from 'react';
import ReactDOM from 'react-dom/client';
import StopWatch from './stopwatch';

const element = <StopWatch />;
const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(element);

import React from 'react';
import ReactDOM from 'react-dom/client';
import Carousel from './carousel';

const images = [
  {
    number: '001',
    imgURL: '001.png'
  },
  {
    number: '002',
    imgURL: '004.png'
  },
  {
    number: '003',
    imgURL: '007.png'
  },
  {
    number: '004',
    imgURL: '025.png'
  },
  {
    number: '005',
    imgURL: '039.png'
  }
];

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<Carousel images={images} />);

<img src="../images/001.png" alt="" />;

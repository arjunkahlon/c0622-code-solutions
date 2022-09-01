import React from 'react';
import ReactDOM from 'react-dom/client';
import ValidatedInput from './validated-input';

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
  <div>
    <div>
      <label htmlFor='password' className='bold'>Password</label>
    </div>
    <form>
      <ValidatedInput />
    </form>
  </div>

);

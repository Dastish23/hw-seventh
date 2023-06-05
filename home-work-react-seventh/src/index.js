import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Mount from './components/didMount';
import Update from './components/didUpdate';
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Mount />
    <Update />
  </React.StrictMode>
);

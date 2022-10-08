import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import Card  from './Card';
import App from './containers/App';
import 'tachyons';
import {robots} from './robots';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

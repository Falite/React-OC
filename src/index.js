import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './composants/App';
import reportWebVitals from './reportWebVitals';
import Banner from './composants/Banner';
import Cart from './composants/Cart';
import Magasin from './composants/Magasin';

ReactDOM.render(
  <React.StrictMode>
    <Banner />
    <App />
    <Magasin />
    <Cart />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

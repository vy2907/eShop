import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import List from './state/list';
import { Category } from './components/atoms/category';

ReactDOM.render(
  <React.StrictMode>
    {/* <BrowserRouter> */}
    <List />
    {/* <Category></Category> */}
    {/* <App /> */}
    {/* </BrowserRouter> */}
  </React.StrictMode>,
  document.getElementById('root')
);

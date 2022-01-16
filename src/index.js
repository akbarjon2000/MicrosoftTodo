import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import LogInContextProvider from './context/LogInContext';
import Root from './root';
import './style/index.css';
// import "./style/normalize.min.css"

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <LogInContextProvider>
        <Root />
      </LogInContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)



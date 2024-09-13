import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainRouter from './components/MainRouter';
import ThemeProvider from './theme';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <MainRouter />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

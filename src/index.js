import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainRouter from './components/MainRouter';
import ThemeProvider from './theme';
import { Provider } from 'react-redux';
import store from './store/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <MainRouter />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

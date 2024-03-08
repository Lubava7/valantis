import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HashRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { store } from './modules/redux/store';
import { Provider } from 'react-redux';
import { GlobalStyles } from './ui/vars/global';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <HashRouter basename={'/' || 'testValantis'}>
    <GlobalStyles />
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>
);

reportWebVitals();

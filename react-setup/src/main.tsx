import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './style/style.scss';
import { Provider } from 'react-redux';
import App from './App';

import store from './state/store';

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById('root'),
);

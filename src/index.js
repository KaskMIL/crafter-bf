import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './Redux/configStore';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>
);

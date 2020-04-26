import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';

import { BrowserRouter as Router } from 'react-router-dom';
import { ResponsiveContextProvider } from './contexts/ResponsiveContext';

ReactDOM.render(
  <Router>
    <ResponsiveContextProvider>
      <App />
    </ResponsiveContextProvider>
  </Router>,
  document.getElementById('root')
);
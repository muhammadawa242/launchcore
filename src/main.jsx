// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css'; // Keep CSS for basic styling

// The base path from your vite.config.js
const VITE_BASE_PATH = '/launchcore/';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={VITE_BASE_PATH}>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);

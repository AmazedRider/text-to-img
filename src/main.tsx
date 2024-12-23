import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { initializeFalAI } from './config/falConfig';

try {
  initializeFalAI();
} catch (error) {
  console.error('Failed to initialize FAL AI:', error);
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
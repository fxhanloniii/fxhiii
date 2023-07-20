import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import * as THREE from 'three';
import 'tailwindcss/tailwind.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
window.THREE = THREE;


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>
);



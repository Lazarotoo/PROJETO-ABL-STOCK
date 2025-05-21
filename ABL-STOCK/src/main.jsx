import React from 'react'

import ReactDOm from 'react-dom/client'

import { BrowserRouter, Routes, Route } from "react-router-dom";

import './index.css'

import App from './App'

ReactDOm.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

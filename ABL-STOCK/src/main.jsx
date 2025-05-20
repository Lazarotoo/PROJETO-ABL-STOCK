import { StrictMode } from 'react'

import ReactDOm from 'react-dom/client'

import './index.css'

import App from './App.jsx'

const root = ReactDOm.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

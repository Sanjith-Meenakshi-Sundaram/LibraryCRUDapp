import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { Toaster } from 'react-hot-toast';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Toaster position="top-center" reverseOrder={false} />
  </React.StrictMode>
);

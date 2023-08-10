import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client'
import store from './redux/Store.js';
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
    <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)

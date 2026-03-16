import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import favicon from './assets/favicon.svg'

const link = document.querySelector('link#favicon')
if (link) link.href = favicon

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
let res = require('react-streaming/server')
console.log(res)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

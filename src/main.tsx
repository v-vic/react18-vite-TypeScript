import React from 'react'
import ReactDOM from 'react-dom/client'
// 定义当前项目的路由模式
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Router>
    <App />
  </Router>,
)

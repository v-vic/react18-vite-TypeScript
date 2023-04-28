import React from 'react'
import ReactDOM from 'react-dom/client'
// 定义当前项目的路由模式
import { BrowserRouter as Router } from 'react-router-dom'

import { Provider } from 'react-redux'

import App from './App'
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Router>
    {/* <Provider store={store}> */}
        <App />
    {/* </Provider> */}
  </Router>,
)

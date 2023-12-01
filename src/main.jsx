import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './components/login.jsx'
import Cart from './components/Cart.jsx'

const routes=createBrowserRouter([
  {
    path:"/",
    element:<App/>
  },
  {
    path:'/login',
    element:<Login/>
  },
  {
    path:'/cart/:name',
    element:<Cart/>
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes}/>
  </React.StrictMode>,
)

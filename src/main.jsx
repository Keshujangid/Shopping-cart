import React from 'react'
import ReactDOM from 'react-dom/client'
// import routes from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import routesArray from './App.jsx'

const routes = createBrowserRouter(routesArray);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes}/>
    {/* <App /> */}
  </React.StrictMode>,
)

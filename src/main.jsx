import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ClassComponent from './Components/ClassComponent.jsx'
import FunctionalComponent from './Components/FunctionalComponent.jsx'
import Ecmascript from './Ecmascript/Ecmascript.jsx'
import Events from './Components/Events.jsx'

const router = createBrowserRouter([
  {
    path: "/", Component: App, children: [
      { path: "/ecmascript", Component: Ecmascript},
      { path: "/ClassComponent", Component:ClassComponent},
      { path: "/FunctionalComponent", Component:FunctionalComponent},
      { path: "/Events", Component: Events},
    ]
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

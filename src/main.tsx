import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import Cources from "../src/components/DoctorOfPhilosophy/CourcesMain.tsx"

import CourcesPage from "../src/pages/CourcesPage.tsx"
import DOPPage from "../src/pages/DOPPage.tsx"
import PhdDBAPage from "../src/pages/PhdDBAPage.tsx" 
import ApplyNow from "../src/pages/ApplyNowPages.tsx"


import { RouterProvider, createBrowserRouter } from 'react-router-dom'


const router = createBrowserRouter([
  {
  path:"/",
  element:<App/>,
  },
  {
    path:"/DoctorOfPhilosophy",
    element:<Cources/>,
    children:[{
      path:"/pages/cources-page",
      element:<CourcesPage/>,
    },
  ]
  },
  {
    path: "/pages/apply-now-page",
    element: <ApplyNow/>,
  },
  {
    path: "/pages/cources-page",
    element: <CourcesPage />,
  },
  {
    path: "/pages/dop-page",
    element: <DOPPage/>,
  },
  {
    path: "/pages/phd-dba-page",
    element: <PhdDBAPage/>,
  },
  
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

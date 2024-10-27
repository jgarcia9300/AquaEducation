import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout/Layout.jsx'
import Login from './components/Login/Login.jsx'
import Home from './pages/Home/Home.jsx'
import ProblemasMedioAmbientales from './pages/ProblemasMedioAmbientales/ProblemasMedioAmbientales.jsx'
import ProblemaContaminacion from './pages/ProblemasMedioAmbientales/ProblemaContaminacion/ProblemaContaminacion.jsx'

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/Home",
        element: <Home />,
      },
      {
        path: "/problemas-ambientales",
        element: <ProblemasMedioAmbientales />,
      },
      {
        path: "/problemas-ambientales/contaminacion-del-agua",
        element: <ProblemaContaminacion />,
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

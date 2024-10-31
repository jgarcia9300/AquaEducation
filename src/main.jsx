import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout/Layout.jsx'
import Login from './components/Login/Login.jsx'
import Home from './pages/Home/Home.jsx'
import EscazesDelAgua from './pages/escasez-agua/EscazesDelAgua.jsx'



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
        path: "problemas-ambientales/escasez-del-agua",
        element: <EscazesDelAgua/>,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

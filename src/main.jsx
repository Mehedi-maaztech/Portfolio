import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const isGithub = window.location.pathname.startsWith("/Portfolio/");
const basename = isGithub ? "/Portfolio/" : "/";
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  }
],
  {
    basename
  }
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)

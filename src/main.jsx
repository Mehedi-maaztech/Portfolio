import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorBoundary from './ErrorBoundary.jsx'

const router = createBrowserRouter([
  {
    path: '/Portfolio',
    element: <App />,
    errorElement: <Error></Error>,
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
      <RouterProvider router={router}></RouterProvider>
    </ErrorBoundary>
  </StrictMode>,
)

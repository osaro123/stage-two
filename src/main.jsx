import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Movies from './pages/Movies.jsx'
import MovieDetail from './pages/MovieDetail'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Movies/>
  },
  {
    path: "/movies/:id",
    element: <MovieDetail/>
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

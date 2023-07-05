import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './services/router'
import { AuthProvider } from './context/AuthContext'
import { QueryClientProvider } from 'react-query'
import queryClint from './services/query'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClint}>
      <RouterProvider router={router}/>
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>,
)

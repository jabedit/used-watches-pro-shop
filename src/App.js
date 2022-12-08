import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import FirebaseContext from './context/FirebaseContext'
import routes from './route/routes'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import 'react-toastify/dist/ReactToastify.css'
function App() {
  const queryClient = new QueryClient()
  return (
    <FirebaseContext>
      <QueryClientProvider client={queryClient}>
        <ToastContainer />
        <RouterProvider router={routes} />
      </QueryClientProvider>
    </FirebaseContext>
  )
}

export default App

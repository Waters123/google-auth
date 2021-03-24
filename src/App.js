import React from 'react'
import { Login } from './pages/login'
import { AuthProvider } from './providers/authContext'

function App() {
  return (
    <AuthProvider>
      <Login />
    </AuthProvider>
  )
}

export default App

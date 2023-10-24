import { useState } from 'react'
import UserContextProvider from './context/userContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <UserContextProvider  >
        <h1 className='text-orange-600 font-bold text-5xl py-9 text-center'>Login Page</h1>
        <Login />
        <Profile />
      </UserContextProvider>
    </div>
  )
}

export default App

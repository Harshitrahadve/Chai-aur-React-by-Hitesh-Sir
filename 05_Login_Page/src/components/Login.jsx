import React, { useState, useContext } from 'react'
import UserContext from '../context/UserContext'

function Login() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
    }



    return (
        <div className='mx-auto flex justify-center items-center'>
            <input
                type="text"
                placeholder='username'
                onChange={(e) => setUsername(e.target.value)}
                className='border-red-500 rounded-lg mx-3 px-2 py-1 bg-slate-600'
                 />
            <input
                type="text"
                className='border-red-500 rounded-lg mx-3 px-2 py-1 bg-slate-600'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='password' />
            <button onClick={handleSubmit} className='border-red-500 rounded-lg mx-3 px-2 py-1 bg-slate-600'>Submit</button>
        </div>
    )
}

export default Login;
import React, { useState } from 'react'
import axios from 'axios'

function LoginPage({login}) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleLogin = () => {
        axios.post('/login',{username, password}) //Flask service: 
        .then(response => {
            if (response.data.authenticated) {
                login();
            } else {
                setError("Invalid username or password")
            }
        })
        .catch(error => {
            setError("Server error")
        })
    }
  return (
    <div>
        <h2>Login</h2>
        <label>Username:</label>
        <input type="text" placeholder='username' value={username} onChange={(e) => setUsername(e.target.value)} />

        <label>Password:</label>
        <input type="text" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
        <button onClick={handleLogin}>Login</button>
        {error && <div>{error}</div>}
    </div>
  )
}

export default LoginPage
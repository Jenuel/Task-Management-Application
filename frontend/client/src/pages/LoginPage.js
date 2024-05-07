import React, { useState } from 'react'
import axios from 'axios'

function LoginPage({login}) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleLogin = () => {
        axios.post('/login',{username, password})
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
        
    </div>
  )
}

export default LoginPage
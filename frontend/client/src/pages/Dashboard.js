import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Dashboard() {
  const [tasks, setTasks] = useState([])
  const [error, setError] = useState('')


  useEffect(() => {
    fetchTasks
  }, [])

  //fetching of data
  const fetchTasks = () => {
    axios.get('/tasks/')
    .then(response => {
      setTasks(response.data)
    })
    .catch(error => {
      setError("Server error")
    })
  }


  const handleClick = (taskId) => {
      //popup
  }

  const handleAddButton = () => {

  }
  
  return (
    <div className='dashboard'>
      <div className='navbar'>
        <h1 className="app-name">Task Management Application</h1>
        <button className="add-task" onClick={handleAddButton}>Add task</button>
      </div>
      <div className='task-container'>
        {/* <select value={sortOption} onChange={handleSort}>
          <option value="pending">Sort by Title</option>
          <option value="status">Sort by Status</option>
        </select> */}
        <h4>Tasks</h4>
        {error ? (
          <div className="error">{error}</div>
        ) : (
          tasks.map(task => (
          <Task task={task} onClick={handleClick}/>  
          ))
        )}
      </div>
    </div>
  )
}

export default Dashboard
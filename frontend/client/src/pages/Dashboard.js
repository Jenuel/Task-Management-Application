import React, { useState } from 'react'

function Dashboard() {
  const [tasks, setTasks] = useState('')
  
  return (
    <div className='dashboard'>
      <div className='navbar'>
        <h1 className="app-name">Task Management Application</h1>
        <button className="add-task">Add task</button>
      </div>
      <div className='task-container'>
        <button className="filter">Filter</button>
        <h4>Tasks</h4>
        {tasks.map(task => (
          <Task key={task.id} task={task}/>  
        ))}

      </div>
    </div>
  )
}

export default Dashboard
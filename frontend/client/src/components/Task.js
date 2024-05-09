import React from 'react'

function Task({key, task}) {
    
  return (
    <div className='task'>
        <h2>{task.title}</h2>
        <h4>{task.status}</h4>
    </div>
  )
}

export default Task
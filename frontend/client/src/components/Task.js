import React from 'react'

function Task({task, onClick, currentAccount}) {
    const handleEdit = () => {

    }

    const handleDelete = () => {

    }

    const handleUpdateStatus = () => {

    }


  return (
    <div className='task' onClick={() => onClick(task.id)}>
        <h2>{task.title}</h2>
        <h4>{task.status}</h4>
        <h4>{task.acc_id}</h4>
        {currentAccount.id === task.acc_id && (
          <>
            <button className="edit" onClick={handleEdit}>Edit</button>
            <button className="delete" onClick={handleDelete}>Delete</button>
          </>
        )}
        <button className="complete" onClick={handleUpdateStatus}>Completed</button>
    </div>
  )
}

export default Task
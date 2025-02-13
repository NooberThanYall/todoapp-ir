import React from 'react'

const RoutineCard = ({routine}) => {
  return (
    <>
    <div>routine.name</div>
    <ul>
        {routine.tasks.map(task =>  {
            return <li key={task}>{task}</li>
        })}
    </ul>
    </>
  )
}

export default RoutineCard
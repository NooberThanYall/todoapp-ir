import { key } from '@/lib/utils'
import React from 'react'

const RoutineCard = ({routine}) => {
  return (
    <div className={' w-64 p-6 rounded-md'}>
    <h2 className={'text-xl'}>{routine.name}</h2>
    <ul>
        {routine.tasks.map(task => {
          return <li key={key} className={'text-orange-400'}>-{task}</li>
        })}
    </ul>
    </div>
  )
}

export default RoutineCard
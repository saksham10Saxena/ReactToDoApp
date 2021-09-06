import React from 'react'
import { Task } from './types'

type SingleTaskProp = {
  singleTask: Task
  togglecheck: (toggleCheck: Task) => void
}

const SingleTask: React.FC<SingleTaskProp> = ({ singleTask, togglecheck }: SingleTaskProp) => {
  const toggleCheck = (): void => {
  
    const objectSingleUpdatedTask = singleTask

    objectSingleUpdatedTask.checkedStatus = !objectSingleUpdatedTask.checkedStatus

    togglecheck(objectSingleUpdatedTask)
  }
  return (
    <div>
      <input type="checkbox" checked={singleTask.checkedStatus} onChange={() => toggleCheck()} />
      <span className={singleTask.checkedStatus ? 'background-red' : ''}>{singleTask.title}</span>
    </div>
  )
}

export default SingleTask

import React from 'react'
import { Task } from './types'

type SingleTaskProp = {
    allTask: Task[]
    togglecheck: (toggleCheck: Task) => void
  }

const SingleTask: React.FC<SingleTaskProp> = ( {allTask, togglecheck}: SingleTaskProp) => {

    const toggleCheck = (id: number): void => {
         const updatedSingleTask = allTask.filter((task: Task) => {
          return task.id === id
        })
    const objectSingleUpdatedTask = updatedSingleTask[0]

    objectSingleUpdatedTask.checkedStatus = !objectSingleUpdatedTask.checkedStatus

    togglecheck(objectSingleUpdatedTask)

    }
    return (
        <div>
          {allTask.map((task: Task) => (
            <div>
              <input
                type="checkbox"
                checked={task.checkedStatus}
                onChange={() => toggleCheck(task.id)}
              />
              <span className={task.checkedStatus ? 'background-red' : ''}>{task.title}</span>
            </div>
          ))}
        </div>
      )

}



export default SingleTask
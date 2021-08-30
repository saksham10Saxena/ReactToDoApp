import React from 'react'
import { Task } from './types'

type TaskProp = {
  allTasks: Task[]
    updateSingleTask: any
  // change it to function type
  //(updatedTask: Task): void
}

const TaskList: React.FC<TaskProp> = ({ allTasks, updateSingleTask }: TaskProp) => {
  const toggleCheck = (id: number): void => {
    // calculate updated Task Object
    const updatedTask = allTasks.filter((task: Task) => {
      return task.id === id
    });
    const objectUpdatedTask = updatedTask[0];

    //  .filter returns an array, although array has only one element, so we will access the first element
    //  and toggle it
    objectUpdatedTask.checkedStatus = !objectUpdatedTask.checkedStatus;

    updateSingleTask(updatedTask)
  }

  return (
    <div>
      {allTasks.map((task: Task) => (
        <div>
          <input
            type="checkbox"
            checked={task.checkedStatus}
            onChange={() => toggleCheck(task.id)}
          />
          {task.title}
        </div>
      ))}
    </div>
  )
}

export default TaskList

import React from 'react'
import { Task } from './types'

type TaskProp = {
  allTasks: Task[]
  setalltask : React.Dispatch<React.SetStateAction<Task[]>>
}

const AllTask: React.FC<TaskProp> = ({ allTasks, setalltask }: TaskProp) => {
  const toggleCheck = (id: number): void => {
    const updatedArray: Task[] = allTasks.map((task: Task) => {
      if (id === task.id) {
        return { ...task, checkedStatus: !task.checkedStatus }
      } else return task
    })
    setalltask(updatedArray)
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

export default AllTask
export const mytest = 3
// export AllTask

import React from 'react'
import { Task } from './types'
import '../src/App.css'
import SingleTask from './SingleTask'

type TaskProp = {
  allTasks: Task[]
  updateSingleTask: (updatedTask: Task) => void
}

const TaskList: React.FC<TaskProp> = ({ allTasks, updateSingleTask }: TaskProp) => {
  const toggleCheck = (toggleCheck: Task): void => {
    updateSingleTask(toggleCheck)
  }

  return (
    <div>
      {allTasks.map((task: Task) => (
          <SingleTask singleTask = {task} updatedTask={toggleCheck}/>
      ))}
    </div>
  )
}

export default TaskList

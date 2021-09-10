import React from 'react'
import { Task } from './types'
import '../src/App.css'
import SingleTask from './SingleTask'

type TaskProp = {
  allTasks: Task[]
  updateSingleTask: (updatedTask: Task) => void
  deleteSingleTask : (deleteSingleTask : string) => void

}

const TaskList: React.FC<TaskProp> = ({ allTasks, updateSingleTask, deleteSingleTask }: TaskProp) => {
  const updatedTask = (toggleCheck: Task): void => {
    updateSingleTask(toggleCheck)
  }

  const deletetask = ((deleteTask: string): void => {
        deleteSingleTask(deleteTask)
    })    

  

  return (
    <div>
      {allTasks.map((task: Task) => (
          <SingleTask singleTask = {task} updatedTask={updatedTask} deleteTask= {deletetask}/>
      ))}
    </div>
  )
}

export default TaskList

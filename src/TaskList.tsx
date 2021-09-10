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
  

  return (
    <div>
      {allTasks.map((task: Task) => (
          <SingleTask singleTask = {task} updatedTask={(toggleCheck) => updateSingleTask(toggleCheck)} deleteTask= {(deleteTask) => deleteSingleTask(deleteTask)}/>
      ))}
    </div>
  )
}

export default TaskList

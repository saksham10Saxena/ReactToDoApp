import React from 'react'
import { Task } from './types'

type SingleTaskProp = {
  singleTask: Task
  updatedTask: (toggleCheck: Task) => void
}

const SingleTask: React.FC<SingleTaskProp> = ({ singleTask, updatedTask }: SingleTaskProp) => {
  const toggleCheck = (): void => {
    singleTask.checkedStatus = !singleTask.checkedStatus
    updatedTask(singleTask)
  }

  const [editTaskButtonClick, setEditTaskButtonClick] = React.useState<boolean>(false)
  const [inputValueOfEditedTask, setInputValueOfEditedTask] = React.useState<string>(singleTask.title)

  const handleEditingTaskInput = (event : React.ChangeEvent<HTMLInputElement>) => {
    setInputValueOfEditedTask(event.target.value)
  }

  const handleEditedTaskInput = () => {
    editMainState()
  }

  const handleKeypress = (event) => {
    if (event.keyCode === 13) {
      handleEditedTaskInput()
    } else {
      handleEditingTaskInput(event)
    }
  }

  const editMainState = () => {
    singleTask.title = inputValueOfEditedTask
    updatedTask(singleTask)
    setEditTaskButtonClick(false)
  }

  // const DeletingTask = () => {
  //   delete singleTask
  // }

  return (
    <div>
      {editTaskButtonClick ? (
        <div>
          <input
            type="text"
            value={inputValueOfEditedTask}
            onChange={handleEditingTaskInput}
            onKeyDown={handleKeypress}
          />
          <button type="button" onClick={() => editMainState()}>
            save
          </button>
        </div>
      ) : (
        <div>
          <input
            type="checkbox"
            checked={singleTask.checkedStatus}
            onChange={() => toggleCheck()}
          />
          <span className={singleTask.checkedStatus ? 'background-red' : ''}>
            {singleTask.title}
          </span>
          <button type="button" onClick={() => setEditTaskButtonClick(true)}>
            editTask
          </button>
          {/* <button type="button" onClick={() => DeletingTask()}>Delete</button> */}
        </div>
      )}
    </div>
  )
}

export default SingleTask

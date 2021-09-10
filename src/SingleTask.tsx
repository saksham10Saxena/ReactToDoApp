import React from 'react'
import { Task } from './types'

type SingleTaskProp = {
  singleTask: Task
  updatedTask: (toggleCheck: Task) => void
  deleteTask : (deletetask : string) => void
}

const SingleTask: React.FC<SingleTaskProp> = ({ singleTask, updatedTask, deleteTask }: SingleTaskProp) => {
  const toggleCheck = (): void => {
    singleTask.checkedStatus = !singleTask.checkedStatus
    updatedTask(singleTask)
  }

  const [isEditing, setIsEditing] = React.useState<boolean>(false)
  const [inputValueOfEditedTask, setInputValueOfEditedTask] = React.useState<string>(
    singleTask.title
  )

  const handleEditedTaskInput = () => {
    editMainState()
  }

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleEditedTaskInput()
    } else {
      setInputValueOfEditedTask((event.target as HTMLInputElement).value)
    }
  }

  const editMainState = () => {
    singleTask.title = inputValueOfEditedTask
    updatedTask(singleTask)
    setIsEditing(false)
  }

  const DeletingTask = () => {
     deleteTask(singleTask.id)
  }

  return (
    <div>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={inputValueOfEditedTask}
            onChange={(event) => setInputValueOfEditedTask(event.target.value)}
            onKeyDown={handleKeyPress}
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
          <button type="button" onClick={() => setIsEditing(true)}>
            editTask
          </button>
          <button type="button" onClick={() => DeletingTask()}>
            Delete
          </button>
        </div>
      )}
    </div>
  )
}

export default SingleTask

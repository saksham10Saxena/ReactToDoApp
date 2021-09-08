import React from 'react'
import { Task } from './types'

type SingleTaskProp = {
  singleTask: Task
  togglecheck: (toggleCheck: Task) => void
}

const SingleTask: React.FC<SingleTaskProp> = ({ singleTask, togglecheck }: SingleTaskProp) => {
  const toggleCheck = (): void => {
    singleTask.checkedStatus = !singleTask.checkedStatus
    togglecheck(singleTask)
  }

  const [editTask, setEditTask] = React.useState<boolean>(false)
  const [inputValueEditingTask, setInputValueEditingTask] = React.useState<string>(singleTask.title)

  const handleEditingTaskInput = (event) => {
    setInputValueEditingTask(event.target.value)
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
    singleTask.title = inputValueEditingTask
    togglecheck(singleTask)
    setEditTask(false)
  }

  return (
    <div>
      {editTask ? (
        <div>
          <input
            type="text"
            value={inputValueEditingTask}
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
          <button type="button" onClick={() => setEditTask(true)}>
            editTask
          </button>
        </div>
      )}
    </div>
  )
}

export default SingleTask

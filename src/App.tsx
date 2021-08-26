import React from 'react'
import AllTask from './AllTask'
import { Task } from './types'

const App: React.FC = () => {
  var tasks: Task[] = [
    {
      id: 1,
      title: 'Task 1',
      checkedStatus: false,
    },
    {
      id: 2,
      title: 'Task 2',
      checkedStatus: false,
    },
  ]

  const [allTask, setAllTask] = React.useState<Task[]>(tasks)

  const [inputValue, setInputValue] = React.useState<string>('')

  let count = 2

  const handleTask = () => {
    count += 1
    setAllTask([...allTask, { title: inputValue, id: count, checkedStatus: false }])
  }

  const handleInput = (event) => {
    setInputValue(event.target.value)
  }

  return (
    <div className="App">
      <h1>To Do App </h1>
      <hr />
      <h2>Add Task</h2>
      <input type="text" value={inputValue} onChange={handleInput} />
      <br />
      <button type="button" onClick={handleTask}>
        Add Task
      </button>
      <hr />
      <h2>All Tasks</h2>
      <AllTask allTasks={allTask} setalltask={setAllTask} />
      <h2>Completed Tasks</h2>
    </div>
  )
}

export default App

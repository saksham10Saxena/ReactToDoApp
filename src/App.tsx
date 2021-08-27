import React from 'react'
import AllTask from './AllTask'
import { Task } from './types'
import { v4 as uuidv4 } from 'uuid';

const App: React.FC = () => {
  var tasks: Task[] = [
    {
      id: uuidv4(),
      title: 'Task 1',
      checkedStatus: false,
    },
    {
      id: uuidv4(),
      title: 'Task 2',
      checkedStatus: false,
    },
  ]

  const [allTask, setAllTask] = React.useState<Task[]>(tasks)

  const [inputValue, setInputValue] = React.useState<string>('')

  // let count = 2;

  const handleTask = () => {
    
    // let count = 2
    // count = count + 1;
    setAllTask([...allTask, { title: inputValue, id: uuidv4(), checkedStatus: false }])
    // console.log(count);
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

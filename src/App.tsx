import React from 'react'
import TaskList from './TaskList'
import { Task } from './types'
import { v4 as uuidv4 } from 'uuid'

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

  const handleTask = () => {
    setAllTask([...allTask, { title: inputValue, id: uuidv4(), checkedStatus: false }])
  }

  const handleInput = (event) => {
    setInputValue(event.target.value)
    // if (event.keyCode === 13) {
    //   handleTask();
  }

  const handleKeypress = (event) => {
    //it triggers by pressing the enter key
    if (event.keyCode === 13) {
      handleTask()
    }
  }

  const updateSingleTask = (updatedTask: Task): void => {
    //go inside allTask array state variable
    // find the element from state variabele allTask and use array.map for changing a single value in the array
    // then use setAllTask from useState to update the state variable

    // For example - {id: 12, title : 'hello', checkStatus: true}
    // updated Object {id:12 , title: 'hello updated , checkStatus: false}

    const newUpdatedTask: Task[] = allTask.map((task) => {
      if (task.id === updatedTask.id) {
        return updatedTask
      } else return task
    })

    setAllTask([...newUpdatedTask])
  }

  return (
    // <div className="App" style={{backgroundColor : 'blue'}}>
    <div className="App">
      <h1>To Do List </h1>
      <hr />
      <h2>Add Task</h2>
      <input
        type="text"
        value={inputValue}
        onChange={handleInput}
        placeholder="Your task"
        onKeyDown={handleKeypress}
      />
      <br />
      <button type="button" onClick={handleTask}>
        Add Task
      </button>
      <hr />

      <h2>All Tasks</h2>
      <TaskList allTasks={allTask} updateSingleTask={updateSingleTask} />
      <h2>Completed Tasks</h2>
      <TaskList
        allTasks={allTask.filter(function (allTask) {
          return allTask.checkedStatus === true
        })}
        updateSingleTask={updateSingleTask}
      />
    </div>
  )
}

export default App

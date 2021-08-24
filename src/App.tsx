import React from 'react';

const App:React.FC = () => {

  var tasks: string[] = ['Task 1', 'Task 2'];

  const [allTask , setAllTask] = React.useState<string[]>(tasks);

  const [inputValue, setInputValue] = React.useState<string>('');

  
  const handleTask = () => {
    setAllTask([...allTask, inputValue]);
  }

  const handleInput = event => {
    setInputValue(event.target.value);
  }

  return (
    <div className="App">
      <h1>To Do App </h1><hr />
      <h2>Add Task</h2>
      <input type="text" value={inputValue} onChange = {handleInput} /><br/>  
          <button type="button" onClick={handleTask}>Add Task</button>
      <hr />
      <h2>All Tasks</h2>
      <AllTask allTasks={allTask} />
    </div>
  )
}

type TaskArr = {
  allTasks: string[];
};



const AllTask: React.FC<TaskArr> = ({allTasks}: TaskArr) => {
  return (
    <div>
      <ul>
        {
          allTasks.map(task => <li>{task}</li>)
        }
      </ul>
       </div>

  )
}




export default App;
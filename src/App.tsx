import React from 'react';

const App:React.FC = () => {

  var tasks: string[] = ['Task 1', 'Task 2'];

 // type AddedTask = string;

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
      <AllTask task={allTask} />
    </div>
  )
}

type TaskProp = {
  task: string[];
};



const AllTask: React.FC<TaskProp> = (taskProp: TaskProp) => {
  return (
    <div>
      <ul>
        {
          taskProp.task.map(task => <li>{task}</li>)
        }
      </ul>
      {JSON.stringify(taskProp.task)}
    </div>

  )
}

// type AddingTaskProp = {
//   addTaskProp : string;
// }

// type addTaskFn = (tasks: string[]) => void;

// const AddTask = ({onAdd : addTaskFn} => {
//   return (
//     <div>
//             <input id="search" type="text" />
//     </div>
//   )
// })

// const AddTask = {((addtask : AddingTaskProp), (onAdd : addTaskFn)) => {
//   return (
//     <label htmlFor="addTask" placeholder="Add Task"></label>
//   )
// }}




export default App;
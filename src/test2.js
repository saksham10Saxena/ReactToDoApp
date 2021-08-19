import React from 'react';

const App = () => {

  var tasks : string[] = ['Task 1', 'Task 2'];

  const [task , setTask] = React.useState<Array<string>>();

  const handleTask = event => {
    setTask(event.target.value);
    tasks.push(event.target.value)
  }

 
   

  const completedTask = tasks.filter(task => 
      {return tasks}
     )

  return (
    <div>
       <h1>To Do List </h1><br/>
       <h2>Add Task </h2><hr/>
       <AddTask addtask={task} onAdd={handleTask} />
       < hr />
       <br />
       <h2>All Tasks</h2>
       <AllTask task={tasks} />
       <h2>Completed Task</h2>
       <CompletedTask completed={searchedStories} />
    </div>
  )
}

const AddTask = ({addtask, onAdd}) =>
{
  return (
    <div>
      <label htmlFor="addtask" placeholder="Add Task : "></label>

    </div>
  )
}

const AllTask = (task: Task) => {
  
}

const CompletedTask = (searchedStories) => {

}

export default App;
import React from 'react';

const App = () => {

  var tasks : string[] = ['Task 1', 'Task 2'];

  const [task , setTask] = React.useState<Array<string>>();

 


  return (
    <div>
       <h1>To Do List </h1><br/>
       <h2>Tasks</h2>
       <AllTask task={tasks} />
    </div>
  )
}


const AllTask = (task: String) => {
  
}



export default App;
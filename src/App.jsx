import TaskList from './TaskList';
import TaskForm from './TaskForm';
import {tasks as data} from "./assets/task.js"
import { useState,useEffect} from "react";
function App() {

  const [tasks,setTask]=useState([])

  console.log(tasks);
    useEffect(()=>{
        setTask(data)
    },[])

    function createTask(listTask){  
      setTask([...tasks,{
        id: tasks.length+1,
        title: listTask,
        description: "Nueva tareita"
      }])
      }
  return (  
    <>
      <TaskForm createTask={createTask}/>
      <TaskList tasks={tasks}/>
    </>
  )
}

export default App

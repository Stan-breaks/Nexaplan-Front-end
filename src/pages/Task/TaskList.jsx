import { useSelector, useDispatch } from "react-redux";
import TaskCard from "./TaskCard";
import { useEffect, useState } from "react";
import Loader from "../../components/Loader/Loader";
import Layout from "../Layout";


function TaskList() {
    

 const [tasks, setTasks] = useState([]);

 useEffect(() => {
   fetch("http://127.0.0.1:8000/taskList")
     .then((response) => response.json())
     .then((data) => {
       console.log(data);
       setTasks(data);
     })
     .catch((error) => console.error("There was an error!", error));
 }, []);
    const handleDelete=tasksId=>{
        dispatch(removeTask(tasksId))
    }
    
  return (
    <Layout>
      <div className="tasklist">
        <h1>Welcome to your Task List</h1>
        <br />
        <h2>Tasks</h2>
        <br/>
        {tasks.length>0 ? (
          <ul>
            {tasks.map((task) => (
              <TaskCard key={task.name} task={task} onDelete={handleDelete}/>
            ))}
          </ul>
        ) : (
         <p>No task found</p>
        )}
        <button onClick={()=>window.location.href='/taskForm'}>+</button>
      </div>
    </Layout>
  );
}
export default TaskList
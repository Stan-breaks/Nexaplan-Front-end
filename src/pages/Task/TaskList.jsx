import { useSelector, useDispatch } from "react-redux";
import TaskCard from "./TaskCard";
import { useEffect, useState } from "react";
import Loader from "../../components/Loader/Loader";
import Layout from "../Layout";
import { setId } from "../../reducers/actions";

function TaskList() {
    
 const user=useSelector(state=>state.user.user)
 const dispatch=useDispatch()
 const [tasks, setTasks] = useState([]);

 useEffect(() => {
   fetch(`http://127.0.0.1:8000/taskList?user=${user}`)
     .then((response) => response.json())
     .then((data) => {
       console.log(data);
       setTasks(data);
     })
     .catch((error) => console.error("There was an error!", error));
     
 }, []);
    const handleClick = (id) => {
      console.log(id);
      dispatch(setId(id));
      window.location.href="/taskView"
    };
    
  return (
    <Layout>
      <div className="tasklist">
        <h1>Welcome to your Task List</h1>
        <br />
        <h2>Tasks</h2>
        <br/>
        {tasks.length>0 ? (
          <ul id='task'>
            {tasks.map((task) => (
              <TaskCard key={task.id} task={task} onView={handleClick}/>
            ))}
          </ul>
        ) : (
         <p>No task found</p>
        )}
        <button onClick={()=>window.location.href='/taskForm'}>Add task</button>
      </div>
    </Layout>
  );
}
export default TaskList
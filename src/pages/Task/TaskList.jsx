import { useSelector, useDispatch } from "react-redux";
import TaskCard from "./TaskCard";
import { useEffect } from "react";
import Loader from "../../components/Loader/Loader";
import Layout from "../Layout";
import { removeTask } from "../../reducers/actions";

function TaskList() {
    const dispatch=useDispatch();
    const tasks=useSelector(state=>state.tasks);


    const handleDelete=tasksId=>{
        dispatch(removeTask(tasksId))
    }
    console.log(tasks);
    useEffect(()=>{
      // Fetch tasks using an API call and dispatch the setTasks action
      // dispatch(setTasks(fetchedTasks));

     
    },[dispatch])
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
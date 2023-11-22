import { useEffect, useState } from "react";
import Layout from "../Layout";
import { useSelector } from "react-redux";
import Loader from "../../components/Loader/Loader";

function TaskView() {
    const [task,setTask]=useState({});
    const taskId=useSelector(state=>state.id.id);
    const handleComplete=()=>{
    fetch(`http://127.0.0.1:8000/completeTask/${taskId}`,
    {
        method:'POST',
        body:JSON.stringify({
            done:true
        })
    })
    .then(response=>response.json())
    .then(response=>console.log(response))
    location.reload(true);
}
    const handleDelete=()=>{
      fetch(`http://127.0.0.1:8000/deleteTask/${taskId}`, {
        method: "POST",
        body: JSON.stringify({
          delete: true,
        }),
      })
        .then((response) => response.json())
        .then((response) => console.log(response));
      window.location.href="/taskList";
    }
    useEffect(()=>{
        fetch(`http://127.0.0.1:8000/taskView?id=${taskId}`)
          .then((response) => response.json())
          .then((response) => {
            console.log(response);
            setTask(response)
          });
    },[]);
    return (
      <Layout>
        {task ? (
          <div className="task-container">
            <h2 className="task-title">{task.taskName}</h2>
            <p className="task-detail">Description: {task.taskDescription}</p>
            <p className="task-detail">Category: {task.category}</p>
            <p className="task-detail">Due date: {task.dueDate}</p>
            <p className="task-detail">Time: {task.timestamp}</p>
            <p className="task-detail">
              Priority: {task.isPriority ? "Yes" : "No"}
            </p>
            <p className="task-detail">Done: {task.done ? "Yes" : "No"}</p>
            <button
              onClick={handleComplete}
              style={{
                backgroundColor: "green",
                color: "white",
                padding: "10px",
                margin: "10px",
              }}
            >
              Mark as Complete
            </button>
            <button onClick={handleDelete} className="delete-button">Delete</button>
          </div>
        ) : (
          <Loader />
        )}
      </Layout>
    );

}
export default TaskView
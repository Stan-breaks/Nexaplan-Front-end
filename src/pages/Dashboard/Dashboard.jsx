import { useSelector } from "react-redux";
import Layout from "../Layout";
import "./Dashboard.css"
import { useEffect, useState } from "react";

function Dashboard() {
  const [projects,setProjects] = useState([]);
  const [tasks,setTasks] = useState([])
  const user=useSelector(state=>state.user.user)

  useEffect(()=>{
     fetch(`http://127.0.0.1:8000/dashboard?user=${user}`)
       .then((response) => response.json())
       .then((data) => {
         console.log(data);
         setTasks(data);
       })
       .catch((error) => console.error("There was an error!", error));
       },[])
  

  const collaborators = {};
  tasks.forEach((task) => {
    if (task.assignedTo in collaborators) {
      collaborators[task.assignedTo]++;
    } else {
      collaborators[task.assignedTo] = 1;
    }
  });

  return (
    <Layout>
      <h3>Dashboard</h3>
      <div>
        <h4>Project Overview</h4>
        <p>Total Projects: {totalProjects}</p>
      </div>
      <div>
        <h4>Task Overview</h4>
        <p>Total Tasks: {totalTasks}</p>
        <p>Completed Tasks: {completedTasks}</p>
        <p>Pending Tasks: {pendingTasks}</p>
      </div>
      <div>
        <h4>Collaborator Overview</h4>
        {Object.entries(collaborators).map(([collaborator, taskCount]) => (
          <p key={collaborator}>
            {collaborator}: {taskCount} task(s)
          </p>
        ))}
      </div>
    </Layout>
  );
}

export default Dashboard;

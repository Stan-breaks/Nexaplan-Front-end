import { useSelector } from "react-redux";
import Layout from "../Layout";
import "./Dashboard.css";
import { useEffect, useState } from "react";

function Dashboard() {
  const [data, setData] = useState({});
  const user = useSelector((state) => state.user.user);
  const [value, onChange] = useState(new Date());
  useEffect(() => {
    fetch(`https://nexaplanbackend.onrender.com/dashboard?user=${user}`)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setData(response);
      })
      .catch((error) => console.error("There was an error!", error));
  }, []);

  // const collaborators = {};
  // tasks.forEach((task) => {
  //   if (task.assignedTo in collaborators) {
  //     collaborators[task.assignedTo]++;
  //   } else {
  //     collaborators[task.assignedTo] = 1;
  //   }
  // });

  return (
    <Layout>
      <h3>Dashboard</h3>
      <div className="dashboardDetails">
        <div>
          <h4>Project Overview</h4>
          <p>Total Projects: {data.totalProjects}</p>
          <p>Active Projects: {data.activeProjects}</p>
        </div>
        <div>
          <h4>Task Overview</h4>
          <p>Total Tasks: {data.totalTasks}</p>
          <p>Completed Tasks: {data.completedTasks}</p>
          <p>Pending Tasks: {data.pendingTasks}</p>
          <p>Priority Tasks: {data.priorityTasks}</p>
          <p>upcoming Deadlines: {data.upcomingDeadlines}</p>
        </div>
      </div>

      {/* <div>
        <h4>Collaborator Overview</h4>
        {Object.entries(collaborators).map(([collaborator, taskCount]) => (
          <p key={collaborator}>
            {collaborator}: {taskCount} task(s)
          </p>
        ))}
      </div> */}
    </Layout>
  );
}

export default Dashboard;

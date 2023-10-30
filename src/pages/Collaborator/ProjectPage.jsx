import React, { useEffect, useState } from "react";
import Layout from "../Layout";
import { useSelector } from "react-redux";

function ProjectPage() {
  const [project,setProject]=useState({})
  const [newTask, setNewTask] = useState("");
  const [newCollaborator, setNewCollaborator] = useState("");
  const id=useSelector(state=>state.id.id)

    
  const handleAddTask = () => {
    setNewTask("");
  };

  const handleAddCollaborator = () => {
    setNewCollaborator("");
  };
  useEffect(()=>{
    fetch(`http://127.0.0.1:8000/projectView/${id}`)
    .then(response=>response.json())
    .then(response=>{
        console.log(response)
        setProject(response)
    })
  },[])
  return (
    <Layout>
      <div className="project">
        <h2>{project.projectName}</h2>
        <p>{project.projectDescription}</p>
        <ul>
          {project.projectTask &&
            project.projectTask.map((task, index) => (
              <li key={index}>{task}</li>
            ))}
        </ul>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="New task"
        />
        <button onClick={handleAddTask}>Add Task</button>
        <p>Status: {project.projectStatus ? "Active" : "Inactive"}</p>
        <p>
          Collaborators: {project.collaborators&&project.collaborators.join(", ")}
        </p>
        <input
          type="text"
          value={newCollaborator}
          onChange={(e) => setNewCollaborator(e.target.value)}
          placeholder="New collaborator"
        />
        <button onClick={handleAddCollaborator}>Add Collaborator</button>
      </div>
    </Layout>
  );
}

export default ProjectPage;

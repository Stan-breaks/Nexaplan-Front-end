import { useSelector } from "react-redux";
import Layout from "../Layout";
import { useEffect, useState } from "react";

function ProjectList() {
  const user=useSelector(state=>state.user.user)
  const [projects,setProjects]=useState([])
  useEffect(()=>{
    fetch(`http://127.0.0.1:8000/projectList?user=${user}`)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        `http://127.0.0.1:8000/taskList?user=${user}`;
      });
  },[])
console.log(user);
  return (
    <Layout>
      <div>
        <h1>Welcome to your Project List</h1>
        {projects.length > 0 ? (
          <ul>
            {projects.map((project, index) => (
              <li key={index}>
                <h4>{project.name}</h4>
                <p>{project.description}</p>
                <p>Collaborators: {project.collaborators.join(", ")}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No projects found.</p>
        )}
        <button onClick={()=>window.location.href='/projectForm'}>+</button>
      </div>
    </Layout>
  );
}

export default ProjectList;

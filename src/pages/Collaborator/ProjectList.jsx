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
        setProjects(response)
      });
  },[])
console.log(user);
  return (
    <Layout>
      <div>
        <h1>Welcome to your Project List</h1>
        {projects.length > 0 ? (
          <ul className="projectList">
            {projects.map((project) => (
              <li key={project.id} className="projectContainer">
                <h4 className="projectName">{project.projectName}</h4>
                <p className="projectDetails">{project.projectDescription}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No projects found.</p>
        )}
        <button onClick={() => (window.location.href = "/projectForm")}>
          Add project
        </button>
      </div>
    </Layout>
  );
}

export default ProjectList;

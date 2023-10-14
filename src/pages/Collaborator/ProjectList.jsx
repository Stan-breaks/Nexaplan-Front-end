import { useSelector } from "react-redux";
import Layout from "../Layout";

function ProjectList() {
  const projects = useSelector((state) => state.projects);

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

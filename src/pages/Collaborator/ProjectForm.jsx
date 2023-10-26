import { useSelector, useDispatch } from "react-redux";
import Layout from "../Layout";
import { useState } from "react";

function ProjectForm() {
  const user=useSelector(state=>state.user.user);
 

  const [projectName, setProjectName] = useState("");
  const [description, setDescription] = useState("");
 

  const handleSubmit = (e) => {
    e.preventDefault();
    const project = {
      name: projectName,
      description,
      user,
    };
    fetch(`http://127.0.0.1:8000/projectList?user=${user}`,{
      method:'POST',
      body:JSON.stringify(project)
    })
    .then(response=>response.json())
    .then(response=>console.log(response));
    window.location.href="./projectList"
  };

  return (
    <Layout>
      <form>
        <h3 className="pageHeader">Add Project</h3>
        <div className="mb-3">
          <label htmlFor="text1" className="form-label">
            Project name
          </label>
          <input
            type="text"
            className="form-control"
            id="text1"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </Layout>
  );
}

export default ProjectForm;

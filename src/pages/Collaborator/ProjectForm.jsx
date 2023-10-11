import { useSelector, useDispatch } from "react-redux";
import { addProject } from "../../reducers/actions";
import Layout from "../Layout";
import { useState } from "react";

function ProjectForm() {
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.projects);

  const [projectName, setProjectName] = useState("");
  const [description, setDescription] = useState("");
  const [collaborators, setCollaborators] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const project = {
      name: projectName,
      description,
      collaborators: collaborators.split(",").map((item) => item.trim()), // assuming collaborators are comma separated
    };
    console.log(project);
    dispatch(addProject(project));
    console.log(projects);
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
        <div className="mb-3">
          <label htmlFor="collaborators" className="form-label">
            Collaborators (comma separated)
          </label>
          <input
            type="text"
            className="form-control"
            id="collaborators"
            value={collaborators}
            onChange={(e) => setCollaborators(e.target.value)}
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

import { useSelector, useDispatch } from "react-redux";
import { addTask } from "../../reducers/actions";
import Layout from "../Layout";
import { useState } from "react";

function ProjectDetails({ match }) {
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.projects);
  const project = projects.find((p) => p.id === match.params.id);

  const [taskName, setTaskName] = useState("");
  const [assignedTo, setAssignedTo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const task = {
      name: taskName,
      assignedTo,
      completed: false,
    };
    dispatch(addTask(project.id, task));
  };

  return (
    <Layout>
      <h3 className="pageHeader">{project.name}</h3>
      <p>{project.description}</p>
      <p>Collaborators: {project.collaborators.join(", ")}</p>
      <form onSubmit={handleSubmit}>
        <h3 className="pageHeader">Add Task</h3>
        <div className="mb-3">
          <label htmlFor="text1" className="form-label">
            Task name
          </label>
          <input
            type="text"
            className="form-control"
            id="text1"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="assignedTo" className="form-label">
            Assigned to
          </label>
          <input
            type="text"
            className="form-control"
            id="assignedTo"
            value={assignedTo}
            onChange={(e) => setAssignedTo(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </Layout>
  );
}

export default ProjectDetails;

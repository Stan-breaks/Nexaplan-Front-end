import React, { useEffect, useState } from "react";
import Layout from "../Layout";
import { useSelector } from "react-redux";

function ProjectPage() {
  const [project, setProject] = useState({});
  const [newTask, setNewTask] = useState({
    name: "",
    description: "",
    dueDate: "",
    priority: "",
    assignedTo: "",
    category: "",
  });
  const [newCollaborator, setNewCollaborator] = useState("");
  const [people, setPeople] = useState([]);
  const id = useSelector((state) => state.id.id);
  const [taskForm, setTaskForm] = useState(false);
  const [comment, setComment] = useState(false);
  const [comments, setComments] = useState({});
  const handleSubmit = () => {
    const data = { ...newTask, category: project.projectName };
    fetch(`https://nexaplanbackend.onrender.com/projectTasks/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
      });
    setTimeout(() => {
      alert("Task Added");
      setTaskForm(false);
      location.reload();
    }, 1000);
  };
  const handleProjectClick = () => {
    fetch(`https://nexaplanbackend.onrender.com/projectHandling/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: "delete" }),
    });
    setTimeout(() => {
      alert("Project Status Flipped");
      location.reload();
    }, 1000);
  };
  const handleAddCollaborator = () => {
    const data = { collaborator: newCollaborator };
    fetch(`https://nexaplanbackend.onrender.com/projectCollaborators/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    setTimeout(() => {
      alert("Collaborator Added");
      location.reload();
    }, 1000);
  };

  useEffect(() => {
    fetch(`https://nexaplanbackend.onrender.com/projectView/${id}`)
      .then((response) => response.json())
      .then((response) => {
        setProject(response);
      });
    fetch(`https://nexaplanbackend.onrender.com/usersList/${id}`)
      .then((response) => response.json())
      .then((response) => {
        setPeople(response);
      });
    fetch(`https://nexaplanbackend.onrender.com/comment${id}`)
      .then((response) => response.json())
      .then((response) => {
        setComments(response);
      });
  }, []);
  console.log(project);
  return (
    <Layout>
      {comment ? (
        <>
          <button onClick={() => setComment(false)}>Project</button>
          <div className="Comments">
            <h3>Comments</h3>
            {comments &&
              comments.map((data) => {
                return (
                  <>
                    <p></p>
                  </>
                );
              })}
          </div>
        </>
      ) : (
        <>
          <button onClick={() => setComment(true)}>Comments</button>
          <div className="project">
            <h2>{project.projectName}</h2>
            <p>{project.projectDescription}</p>
            <ul>
              <h2>Project tasks</h2>
              {project.projectTask == 0 && <p>No tasks here</p>}
              {project.projectTask &&
                project.projectTask.map((task, index) => (
                  <>
                    <li key={index} className="category">
                      {task}
                    </li>
                  </>
                ))}
            </ul>
            {taskForm && (
              <div className="projectTask">
                <br />
                <label htmlFor="text1" className="form-label">
                  Task name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="text1"
                  value={newTask.name}
                  onChange={(e) =>
                    setNewTask({ ...newTask, name: e.target.value })
                  }
                  required
                />

                <div className="mb-3">
                  <label htmlFor="description" className="form-label">
                    Description
                  </label>
                  <textarea
                    className="form-control"
                    id="description"
                    value={newTask.description}
                    onChange={(e) =>
                      setNewTask({ ...newTask, description: e.target.value })
                    }
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="assignedTo" className="form-label">
                    Assigned To
                  </label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    id="assignedTo"
                    value={newTask.assignedTo}
                    onChange={(e) =>
                      setNewTask({ ...newTask, assignedTo: e.target.value })
                    }
                  >
                    <option selected>Open this select menu</option>
                    {project.collaborators &&
                      project.collaborators.map((collaborator, index) => (
                        <option key={index} value={collaborator}>
                          {collaborator}
                        </option>
                      ))}
                  </select>
                </div>

                <div className="mb-3">
                  <label htmlFor="dueDate" className="form-label">
                    Due Date
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="dueDate"
                    value={newTask.dueDate}
                    onChange={(e) =>
                      setNewTask({ ...newTask, dueDate: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                    checked={newTask.priority}
                    onChange={(e) =>
                      setNewTask({ ...newTask, priority: e.target.checked })
                    }
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    prioritize
                  </label>
                  <br />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </div>
            )}

            {taskForm ? (
              <button onClick={() => setTaskForm(false)}>Cancel</button>
            ) : (
              <button onClick={() => setTaskForm(true)}>Add Task</button>
            )}
            <p>Status: {project.projectStatus ? "Active" : "Inactive"}</p>
            <p>
              Collaborators:
              {project.collaborators ? project.collaborators.join(", ") : "0"}
            </p>

            {people && (
              <select
                value={newCollaborator}
                onChange={(e) => setNewCollaborator(e.target.value)}
              >
                <option selected>Open this select menu</option>
                {people.map((collaborator, index) => (
                  <option key={index} value={collaborator}>
                    {collaborator}
                  </option>
                ))}
              </select>
            )}
            <button onClick={handleAddCollaborator}>Add Collaborator</button>
            <br />
            <button
              onClick={handleProjectClick}
              style={{ backgroundColor: project.projectStatus ? "Red" : "" }}
            >
              {project.projectStatus ? <>Terminate</> : <>Activate</>}
            </button>
          </div>
        </>
      )}
    </Layout>
  );
}

export default ProjectPage;

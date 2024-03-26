import { useSelector, useDispatch } from "react-redux";

import Layout from "../Layout";
import { useState } from "react";

function TaskForm() {
  const user = useSelector((state) => state.user);

  const [task, setTask] = useState({
    taskName: "",
    isPriority: false,
    taskDescription: "",
    category: "",
    done: false,
    user: user.user,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user === "") {
      window.location.href = "/";
    } else {
      fetch("https://nexaplanbackend.onrender.com/taskList", {
        method: "POST",
        body: JSON.stringify(task),
      })
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
          window.location.href = "./taskList";
        });
      console.log(task);
    }
  };

  return (
    <Layout>
      <form>
        <h3 className="pageHeader">Add Task</h3>
        <div className="mb-3">
          <label htmlFor="text1" className="form-label">
            Task name
          </label>
          <input
            type="text"
            className="form-control"
            id="text1"
            value={task.taskName}
            onChange={(e) => setTask({ ...task, taskName: e.target.value })}
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
            value={task.taskDescription}
            onChange={(e) =>
              setTask({ ...task, taskDescription: e.target.value })
            }
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="dueDate" className="form-label">
            Due Date
          </label>
          <input
            type="date"
            className="form-control"
            id="dueDate"
            value={task.dueDate}
            onChange={(e) => setTask({ ...task, dueDate: e.target.value })}
            required
          />
        </div>
        <div className="mb-3 ">
          <label className="form-label" htmlFor="label">
            Category of Label :
          </label>
          <input
            type="text"
            className="form-control"
            id="label"
            value={task.category}
            onChange={(e) => setTask({ ...task, category: e.target.value })}
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
            checked={task.isPriority}
            onChange={(e) => setTask({ ...task, isPriority: e.target.checked })}
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            prioritize
          </label>
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
export default TaskForm;


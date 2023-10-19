import { useSelector, useDispatch } from "react-redux";

import Layout from "../Layout";
import { useState } from "react";

function TaskForm() {
  const user=useSelector((state)=>state.user)

  const [taskName, setTaskName] = useState('');
  const [isPrioritized, setIsPrioritized] = useState(false);
  const [dueDate, setDueDate] = useState("");
  const [description, setDescription] = useState(""); // Add this line

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user===''){
      window.location.href='/'
    }
    else{
      const task = {
        taskName,
        dueDate,
        isPriority: isPrioritized,
        taskDescription: description, // Add this line
        done: false,
        user:user.user,
      };

      fetch("http://127.0.0.1:8000/taskList", {
        method: "POST",
        body: JSON.stringify(task),
      })
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
          window.location.href="./taskList";
        });
      console.log(task);
    }
 
  }


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
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
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
          <label htmlFor="dueDate" className="form-label">
            Due Date
          </label>
          <input
            type="date"
            className="form-control"
            id="dueDate"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            required
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
            checked={isPrioritized}
            onChange={(e) => setIsPrioritized(e.target.checked)}
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
export default TaskForm
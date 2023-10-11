import { useSelector, useDispatch } from "react-redux";
import { addTask } from "../../reducers/actions";
import Layout from "../Layout";
import { useState } from "react";

function TaskForm() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);

  const [taskName, setTaskName] = useState('');
  const [isPrioritized, setIsPrioritized] = useState(false);
  const [dueDate, setDueDate] = useState("");
  const [description, setDescription] = useState(""); // Add this line

  const handleSubmit = (e) => {
    e.preventDefault();
    const task = {
      name: taskName,
      dueDate,
      isPrioritized,
      description, // Add this line
      done: false,
    };
    console.log(task);
    dispatch(addTask(task));
    console.log(tasks);
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
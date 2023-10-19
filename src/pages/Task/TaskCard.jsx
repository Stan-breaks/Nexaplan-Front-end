function TaskCard({task,onDelete}) {
  return (
    <li
      className="task-item"
      key={task.taskName}
      style={{ backgroundColor: task.isPriority?'white':'grey' }}
    >
      <div className="task-details">
        <h3>{task.taskName}</h3>
        <p> Due date: {task.dueDate}</p>
        <p>Time:{task.timestamp}</p>
      </div>
      <div className="task-actions">
        <button className="">completed</button>
        <br />
        <br />
        <button className="delete-button" onClick={() => onDelete(task.id)}>
          Delete
        </button>
      </div>
    </li>
  );
} 
export default TaskCard
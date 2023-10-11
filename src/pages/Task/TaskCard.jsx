function TaskCard({task,onDelete}) {
  return (
    <li className="task-item">
      <div className="task-details">
        <h3>{task.name}</h3>
        <p>{task.dueDate}</p>
      </div>
      <div className="task-actions">
        <button className="delete-button" onClick={() => onDelete(task.id)}>
          Delete
        </button>
      </div>
    </li>
  );
} 
export default TaskCard
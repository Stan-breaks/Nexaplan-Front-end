function TaskCard({task,onView}) {
  
  return (
    <li
      className="task-item"
      style={{ backgroundColor: task.isPriority?'white':'grey' }}
      onClick={()=>onView(task.id)}    
    >
      <div className="task-details">
        <h3>{task.taskName}</h3>
        <p> Due date: {task.dueDate}</p>
        <p>Time:{task.timestamp}</p>
      </div>
    </li>
  );
} 
export default TaskCard
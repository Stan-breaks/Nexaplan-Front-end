const initialState = {
  tasks: [],
};

function tasksReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TASK":
     return {
       ...state,
       tasks: [...state.tasks, action.payload],
     };
    case "REMOVE_TASK":
      let newTasks = state.tasks.filter((task) => task.id !== action.payload);
      return { ...state, tasks: newTasks };
    case "TOGGLE_TASK":
      let updatedTasks = state.tasks.map((task) => {
        if (task.id === action.payload.id) {
          return { ...task, ...action.payload.task };
        }
        return task;
      });
      return { ...state, tasks: updatedTasks };
    default:
      return state;
  }
}
export default tasksReducer;

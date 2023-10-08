const initialState=[]
function tasksReducer(state=initialState,action) {
  switch(action.type){
    case 'ADD_TASK':
      return [...state,action.payload];

    case 'REMOVE_TASK':
      let newTasks=state.task.filter(
      (task)=>task.id!==action.payload
      );
    return newTasks;
  }
  
}
export default tasksReducer
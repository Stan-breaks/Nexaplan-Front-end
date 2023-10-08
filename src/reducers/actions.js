
export const AddProject=project=>({
    type:"ADD_PROJECT",
    payload:task,
});

export const addTask=task=>({
    type: 'ADD_TASK',
    payload: task,
});

export const removeTask =id=>({
    type:'REMOVE_TASK',
    payload:id,
});

export const removeProject =id=>({
    type:'REMOVE_PROJECT',
    payload:id,
});
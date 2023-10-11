
export const addProject=project=>({
    type:"ADD_PROJECT",
    payload:project,
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

export const toggleTask=(id,task)=>({
    type:'TOGGLE_TASK',
    payload:{id,task},
})

export const setUser=user=>({
    type:'SET_USER',
    payload:user,
})
export const clearUser=()=>({
   type:'CLEAR_USER', 
})
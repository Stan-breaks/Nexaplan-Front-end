initialState=[];
function projectsReducer(state=initialState,action) {
 switch(action.type){
 case 'ADD_PROJECT':
    return [...state, action.payload];
 case 'REMOVE_PROJECT':
    let newProjects=state.project.filter(
       (project)=>project.id!=action.payload.id 
    );
    return newProjects
 }
 
}
export default projectsReducer
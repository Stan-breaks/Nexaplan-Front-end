const initialState = {
    projects:[]
};

function projectsReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_PROJECT":
      return { ...state, projects: [...state.projects, action.payload] };
    case "REMOVE_PROJECT":
      let newProjects = state.projects.filter(
        (project) => project.id !== action.payload.id
      );
      return { ...state, projects: newProjects };
    default:
      return state;
  }
}

export default projectsReducer
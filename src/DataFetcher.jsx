import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Async actions
const fetchProjects = createAsyncThunk("projects/fetch", async () => {
  const response = await fetch("https://your-api-url.com/projects");
  const projects = await response.json();
  return projects;
});

const fetchTasks = createAsyncThunk("tasks/fetch", async () => {
  const response = await fetch("https://your-api-url.com/tasks");
  const tasks = await response.json();
  return tasks;
});

// Slices
// Reducers for projects
const projectsSlice = createSlice({
  name: "projects",
  initialState: [],
  reducers: {
    addProject: (state, action) => {
      state.push(action.payload);
    },
    removeProject: (state, action) => {
      return state.filter(project => project.id !== action.payload);
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProjects.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

// Reducers for tasks
const tasksSlice = createSlice({
  name: "tasks",
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    removeTask: (state, action) => {
      return state.filter(task => task.id !== action.payload);
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTasks.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

// Export the auto-generated actions
export const { addProject, removeProject } = projectsSlice.actions;
export const { addTask, removeTask } = tasksSlice.actions;

// Export the reducers
export default {
  projectsReducer: projectsSlice.reducer,
  tasksReducer: tasksSlice.reducer,
};

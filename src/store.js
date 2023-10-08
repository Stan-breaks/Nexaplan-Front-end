import {configureStore,applyMiddleware,combineReducers} from 'redux';
import thunk from 'redux-thunk';

// Import your reducers here
import tasksReducer from './reducers/tasksReducer';
import projectsReducer from './reducers/projectsReducer';

const rootReducer = combineReducers({
  tasks: tasksReducer,
  projects: projectsReducer,
  // Add more reducers as needed
});
const store =configureStore(rootReducer,applyMiddleware(thunk))
export default store;
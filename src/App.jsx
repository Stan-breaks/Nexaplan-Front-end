import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Login from "./pages/Authentication/Login";
import Registration from "./pages/Authentication/Registration";
import TaskForm from "./pages/Task/TaskForm";
import TaskList from "./pages/Task/TaskList";
import ProjectForm from "./pages/Collaborator/projectForm";
import ProjectList from "./pages/Collaborator/ProjectList";
import Dashboard from "./pages/Dashboard/Dashboard";
import Setting from "./pages/Setting/Setting";
import Profile from "./pages/Profile/Profile";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <div className="app">
          <Routes>
            <Route index element={<Login />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/register" element={<Registration />}></Route>
            <Route path="/taskList" element={<TaskList />}></Route>
            <Route path="/taskForm" element={<TaskForm />}></Route>
            <Route path="/projectList" element={<ProjectList />}></Route>
            <Route path="/projectForm" element={<ProjectForm />}></Route>
            <Route path="/dashboard" element={<Dashboard/>}></Route>
            <Route path="/setting" element={<Setting />}></Route>
            <Route path="/profile" element={<Profile/>}></Route>
            <Route element={<NotFound />}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

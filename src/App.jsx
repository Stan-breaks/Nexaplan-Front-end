import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Home from "./pages/home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import NotFound from "./pages/NotFound";
import Login from "./pages/Authentication/Login";
import Registration from "./pages/Authentication/Registration";
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
            <Route element={<NotFound />}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

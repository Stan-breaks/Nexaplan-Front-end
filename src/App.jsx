import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Home from "./pages/home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import NotFound from "./pages/NotFound";
import Login from "./pages/Authentication/Login";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Navbar />
        <div className="app">
          <Routes>
            <Route index element={<Login/>}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route element={<NotFound />}></Route>
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;

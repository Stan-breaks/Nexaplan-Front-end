import { useDispatch, useSelector } from "react-redux";
import "./Navbar.css"
import { clearUser,setSearch } from "../../reducers/actions";
import { useState } from "react";

function Navbar() {
  
  //getting the state and action from the redux store
 const user=useSelector(state=>state.user);
 const dispatch=useDispatch();
 const [search,setSearch]=useState("")
 const logoutClick=()=>{
  //logout implementation
  dispatch(clearUser());
  window.location.href='/';
 }
 const handleSubmit=(e)=>{
  e.preventDefault();
  dispatch(setSearch(search));
  window.location.href = "/searchPage";
 }
  return (
    <nav
      className="navbar bg-dark border-bottom border-body navbar-expand-lg bg-body-tertiary"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          NexaPlan
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active" aria-current="page" href="/home">
              Home
            </a>
            <a className="nav-link" href="/taskList">
              Tasks
            </a>
            <a className="nav-link" href="/projectList">
              Projects
            </a>
          </div>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={search}
              onChange={(e)=>setSearch(e.target.value)}
            />
            <button className="btn btn-outline-success" type="submit"
            onClick={(e)=>handleSubmit(e)}
            >
              Search
            </button>
          </form>
          <div className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Profile
            </a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="/dashboard">
                  Dashboard
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/profile">
                  View Profile
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/analytics">
                  Analytics
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/setting">
                  Settings
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/" onClick={logoutClick}>
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar
import { useSelector,useDispatch } from "react-redux";
import { useState } from "react";
import "./Authentication.css"
import { setUser } from "../../reducers/actions";
function Login() {
  const user=useSelector(state=>state.user);
  const dispatch=useDispatch();

  const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};
  const handleClick=(e)=>{
    e.preventDefault();
    const email=document.getElementById("exampleInputEmail1").value;
    const password=document.getElementById("exampleInputPassword1").value;
    if (
      password == ""||!validateEmail(email)
    ) {
      document.querySelector(".error").style.display = "block";
    } else {

      //assign the user after fetching from the server
      const user={
        email:email,
        password:password,
      }
      console.log(user);
      fetch("http://127.0.0.1:8000/login",{
        method:'POST',
        body:JSON.stringify(user),
      })
        .then((response) => response.json())
        .then((response) => {
          console.log(response.message);
          console.log(response.user);
          setUser(response.user);
          window.location.href = "/home";
        });
      
    }
      
  }
  const registerClick=(e)=>{
   e.preventDefault()
   window.location.href="/register";
  }
  return (
    <>
      <h1>NexaPlan</h1>
      <p>Your Time, Our Priority.</p>
      <h3 className="pageHeader">Login Page</h3>
      <form>
        <div className="error">
          <h4>Invalid email or password</h4>
          <br />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <br />
        <button type="submit" className="btn btn-primary" onClick={handleClick}>
          Submit
        </button>
        <button className="btn btn-primary diff" onClick={registerClick}>
          Register
        </button>
      </form>
    </>
  );
}
export default Login
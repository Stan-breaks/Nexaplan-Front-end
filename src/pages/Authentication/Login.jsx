import { useState } from "react";
import "./Authentication.css"
function Login() {
  const display=useState()
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
      window.location.href = "/home";
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
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <br />
        <button type="submit" class="btn btn-primary" onClick={handleClick}>
          Submit
        </button>
        <button class="btn btn-primary diff" onClick={registerClick}>
          Register
        </button>
      </form>
    </>
  );
}
export default Login
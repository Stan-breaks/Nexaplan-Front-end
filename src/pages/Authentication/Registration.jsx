import { useState } from "react";
import { setUser } from "../../reducers/actions";
import { useDispatch } from "react-redux";

function Registration() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();

  const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      document.querySelector(".error").style.display = "block";
    } else {
      if (password != confirmPassword) {
        document.querySelector(".match").style.display = "block";
      } else {
        const user = {
          userName,
          email,
          password,
        };
        console.log(user);
        fetch("https://nexaplanbackend.onrender.com/register", {
          method: "POST",
          body: JSON.stringify(user),
        })
          .then((response) => response.json())
          .then((response) => {
            console.log(response);
            dispatch(setUser(userName));
            window.location.href = "/home";
          });
      }
    }
  };
  const loginClick = (e) => {
    e.preventDefault();
    window.location.href = "/";
  };
  return (
    <>
      <h3 className="pageHeader">Registration Page</h3>
      <form>
        <div className="error">
          <h4>Invalid email or password</h4>
          <br />
        </div>
        <div className="match">
          <h4>The passwords don't match</h4>
          <br />
        </div>
        <div className="mb-3">
          <label htmlFor="text1" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="text1"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword2" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword2"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <br />
        <button type="submit" className="btn btn-primary" onClick={handleClick}>
          Submit
        </button>
        <button
          type="submit"
          className="btn btn-primary diff"
          onClick={loginClick}
        >
          Login
        </button>
      </form>
    </>
  );
}
export default Registration;

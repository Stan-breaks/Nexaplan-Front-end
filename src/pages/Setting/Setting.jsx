import React, { useEffect, useState } from "react";
import "./Setting.css";
import Layout from "../Layout";

function Setting() {
  const [userInfo,setUserInfo]=useState({name:"",email:"",});
  const handleSave = () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Mock function to simulate updating user settings on a server
    const updateUserSettings = (username, email, password) => {
      console.log(`Updated settings: ${username}, ${email}, ${password}`);
    };
  
    updateUserSettings(username, email, password);
   useEffect(()=>{
    fetch('settings')
    .then(response=>response.json())
    .then(data=>{

    })
   },[])
  };

  return (
    <Layout>
      <div className="settings">
        <h2>Settings</h2>
        <form>
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <label>
            Confirm Password:
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </label>
          <button type="button" onClick={handleSave}>
            Save
          </button>
        </form>
      </div>
    </Layout>
  );
}

export default Setting;

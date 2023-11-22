import React, { useEffect, useState } from "react";
import "./Setting.css";
import Layout from "../Layout";
import { useSelector } from "react-redux";
import { json } from "react-router-dom";

function Setting() {
  const user=useSelector(state=>state.user.user)
  const [userInfo,setUserInfo]=useState({username:"",email:"",password:"",confirmPassword:""});
  const handleSave = () => {
  
      if (userInfo.password !== userInfo.confirmPassword) {
        alert("Passwords do not match!");
      } else {
        fetch(`http://127.0.0.1:8000/settings?user=${user}`, {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userInfo),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            alert("Changes saved successfully!");
          });
      }
  };
   useEffect(()=>{
    fetch(`http://127.0.0.1:8000/settings?user=${user}`)
    .then(response=>response.json())
    .then(data=>{
        setUserInfo({...userInfo,...data})
        console.log(data)
    })
   },[])
  
 console.log(userInfo);
  return (
    <Layout>
      <div className="settings">
        <h2>Settings</h2>
        <form>
          <label>
            Username:
            <input
              type="text"
              value={userInfo.username}
              onChange={(e) => setUserInfo({...userInfo,username:e.target.value})}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              value={userInfo.email}
              onChange={(e) => setUserInfo({...userInfo,email:e.target.value})}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              value={userInfo.password}
              onChange={(e) => setUserInfo({...userInfo,password:e.target.value})}
            />
          </label>
          <label>
            Confirm Password:
            <input
              type="password"
              value={userInfo.confirmPassword}
              onChange={(e) => setUserInfo({...userInfo,confirmPassword:e.target.value})}
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

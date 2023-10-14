import React, { useState } from "react";
import "./Setting.css";
import Layout from "../Layout";

function Setting() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSave = () => {
    // Save the new settings
    console.log("Settings saved!");
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
          <button type="button" onClick={handleSave}>
            Save
          </button>
        </form>
      </div>
    </Layout>
  );
}

export default Setting;

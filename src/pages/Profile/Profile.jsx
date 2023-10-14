import React from "react";
import "./Profile.css";
import Layout from "../Layout";

function Profile() {
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    bio: "Software developer with over 5 years of experience specializing in web development.",
    image: "welcome.png", // replace with the path to your image file
  };

  return (
    <Layout>
      <div className="profile">
        <img src={user.image} alt="Profile" />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <p>{user.bio}</p>
      </div>
    </Layout>
  );
}

export default Profile;

import React from "react";
import "./Profile.css";
import profilepic from "../../assets/asdf.png";
const Profile = () => {
  return (
    <div className="profile">
      <div>
        <img src={profilepic} alt="" />
      </div>
      <div className="username">Rizwan</div>
    </div>
  );
};

export default Profile;

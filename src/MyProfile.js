import React from "react";
import "./css/myProfile.css"

function MyProfile() {
  return (
    <div className="MyProfile">
      <h1 className="heading">My Profile</h1>

      <form className="form" action="#">
        <input type="text" name="firstName" id="firstName" placeholder="First Name" />
        <input type="text" name="lastName" id="lastName" placeholder="Last Name" />
        <input type="text" name="phone" id="phone" placeholder="Phone" />
        <input type="text" name="email" id="email" placeholder="Email" />


        <button type="submit">Change Your Password</button>
      </form>
    </div>
  );
}
export default MyProfile;
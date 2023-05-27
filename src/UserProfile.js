import React from 'react'

function UserProfile(props) {
  return (
    <div>
      <div class="background"></div>
      <div class="navbar">
        <ul>
          <li>
            <a href="#" onClick={(e) => props.setLink('/')}>
              Home
            </a>
          </li>
          <li>
            <a href="services"> Services</a>
          </li>
          <li>
            <a href="appointments"> Appointments</a>
          </li>
          <li>
            <a href="#" onClick={(e) => props.setLink('/profile')}>
              Barbers
            </a>
          </li>
          <li>
            <a href="login"> Log In</a>
          </li>
          <li>
            <a href="about"> About Us</a>
          </li>
        </ul>
      </div>
      <form>
        <h3>User Profile</h3>
        <img src="/images/avatar.jpg" id="avatar" />

        <label>Username</label>
        <input type="text" placeholder="Email or Phone" id="username" />

        <label>Address</label>
        <input
          type="Address"
          placeholder="Apt/Home Street City State Zip"
          id="Address"
        />
        <label>Phone Number </label>
        <input
          type="Phone Number"
          placeholder="Phone Number"
          id="Phone Number"
        ></input>
        <button>Change Password </button>
      </form>
    </div>
  )
}

export default UserProfile

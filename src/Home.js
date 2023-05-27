import React from 'react'

function Home(props) {
  return (
    <div>
      <div className="background"></div>
      <div className="logo">
        <img src="/images/AcesBarbershopLogo.jpg" alt="" />
      </div>
      <div className="navbar" style={{"color": "black;"}}>
        <ul>
          <li>
            <a  href="#" onClick={(e)=>props.setLink("/")}> Home</a>
          </li>
          <li>
            <a href="services"> Services</a>
          </li>
          <li>
            <a href="appointments"> Appointments</a>
          </li>
          <li>
            <a href="#" onClick={(e)=>props.setLink("/profile")}> Barbers</a>
          </li>
          <li>
            <a href="login"> Log In</a>
          </li>
          <li>
            <a href="about"> About Us</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Home

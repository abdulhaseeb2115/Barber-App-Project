import React from "react";
import "./css/appointment.css"

function Appointment() {
    return (
        <div className="Appointment">
            <h1 className="heading">Make an Appointment</h1>

            <form className="form" action="#">

                <div className="container">
                    <input type="text" readOnly value={"Name: Barak Obama"} />
                    <input type="text" readOnly value={"Emial: bama@whitehouse.com"} />
                </div>

                <input type="text" name="name" id="name" placeholder="Please Enter Your Phone Number" />

                <div className="date-time">
                    <p>Select Your Date</p>
                    <input type="date" name="date" id="date" />
                </div>

                <div className="date-time">
                    <p>Select Your Time</p>
                    <input type="time" name="time" id="time" />
                </div>

                <textarea name="message" id="message" placeholder="Message Here">
                </textarea>

                <button type="submit">SUBMIT</button>
            </form>


            <footer>
                <div className="info">
                    <p>Contact: 1234566678</p>
                    <p>Email: helloworld@gmail.com</p>
                </div>

                <div className="social-icons">
                    <p>Follow Us On</p>
                    <div className="icons">
                        <img className="fb-img" src={require('./images/facebookIcon.png')} alt="facebook icon" />
                        <img className="insta-img" src={require('./images/instagramIcon.png')} alt="facebook icon" />
                    </div>
                </div>
            </footer>

        </div>
    );
}
export default Appointment;
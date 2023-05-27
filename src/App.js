import { useState } from 'react'
import Home from './Home'
import UserProfile from './UserProfile'
import "./css/barbers.css"
import "./css/userprofile.css"
import Appointment from "./Appointment"
import MyProfile from "./MyProfile"


export default function App() {
  const [link, setLink] = useState('/')
  return (
    // <div>
    //   {link === '/' ? <Home setLink={setLink} /> : <UserProfile setLink={setLink} />}
    // </div>

    <Appointment />
    // <MyProfile />
  )
}

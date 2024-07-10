import React from 'react'
import {assets} from '../../assets/assets'
import logo from '../../assets/logo.png'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className='navbar'>
        <img className="logo" src={logo} alt="" />
        <img  className="profile" src={assets.profile_image} alt="" />
    </div>
  )
}

export default Navbar
import React, { Component } from 'react'
import "./Header.scss"
import { Link } from "react-router-dom";

const Header = () => {
    return (
      <nav>
          <div className='Header'>
                <span> <Link to="/">News</Link></span>
                <span><Link to="/form">Form</Link></span>
          </div>
      </nav>
    )
  }

export default Header;
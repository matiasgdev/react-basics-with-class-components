
import React, { Component } from 'react'
import { Link } from 'react-router-dom'


import logo from '../images/badge-logo.png'
import '../style/navbar.scss'

export default class Navbar extends Component {
  render() {
    return (
      <nav className="nav">
        <Link to="/" className="nav_content">
          <img width="30" src={logo} alt="Logo"/>
          <span> Badge App </span>
        </Link>
        <Link to="/badges" className="reset-link">
          List  
        </Link>
      </nav>
    )
  }
}
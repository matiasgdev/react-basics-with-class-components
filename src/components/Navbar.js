
import React, {Component} from 'react'
import {Link} from 'react-router-dom'


import logo from '../images/badge-logo.png'
import '../style/navbar.scss'

export default class Navbar extends Component {
  render() {
    return (
      <nav className="nav">
        <div className="container">
          <Link to="/" className="nav_content">
            <img width="30" src={logo} alt="Logo"/>
            <span>Badge App</span>
          </Link>
        </div>
      </nav>
    )
  }
}
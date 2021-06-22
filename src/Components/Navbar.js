import React from 'react'
import { Nav, Navbar } from "react-bootstrap";

import { NavLink } from 'react-router-dom'

const MyNavbar = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>React Router</Navbar.Brand>
        <Nav className="mr-auto">
          <NavLink exact to='/' className="nav-link" activeClassName="selected-link">Home</NavLink>
          <NavLink to='/products' className="nav-link" activeClassName="selected-link">Products</NavLink>
          <NavLink to='/about' className="nav-link" activeClassName="selected-link">About</NavLink>
        </Nav>
      </Navbar>

    </div>
  )
}

export default MyNavbar

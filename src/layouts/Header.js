import React from 'react';

import { Navbar } from 'react-bootstrap';

const Header = props => {
  return (
    <Navbar variant="dark" bg="dark" expand="lg">
      <Navbar.Brand href="#home">{props.brand} <small className="align-top">beta</small></Navbar.Brand>
      {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
        </Nav>
      </Navbar.Collapse> */}
    </Navbar>
  )
}

export default Header;
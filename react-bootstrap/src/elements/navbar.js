//imports from bootstrap
import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
//imports from router
import { Link } from 'react-router-dom'

function navbar() {
  return (
<div>
    <Navbar sticky="top" collapseOnSelect className="color-nav" expand="lg" variant="light">
    <Navbar.Brand><span className="text-logo">Polutdo - alături de tine!</span></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link><Link to="/" className="text-nav" style={{fontSize: 18}}>Acasă</Link></Nav.Link>
          <Nav.Link><Link to="/Stiri" className="text-nav" style={{fontSize: 18}}>Știri</Link></Nav.Link>
          <Nav.Link><Link to="/Noutati" className="text-nav" style={{fontSize: 18}}>Emisiuni</Link></Nav.Link>
          <Nav.Link><Link to="/Galerie" className="text-nav" style={{fontSize: 18}}>Top Video</Link></Nav.Link>
          <Nav.Link><Link to="/Contact" className="text-nav" style={{fontSize: 18}}>Contact</Link></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
</div>
    );
  }

export default navbar;

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from './logo'

class NavigationBar extends React.Component {
  render() {
    return (
      <div class="container">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#"><Logo />My favorite songs</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/nibiru/Inicio">Guitarrist</Nav.Link>
            <Nav.Link as={Link} to="/opcion1">Classic</Nav.Link>
            <Nav.Link as={Link} to="/opcion2">Metal</Nav.Link>
            <Nav.Link as={Link} to="/opcion3">pa Cabezear</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      </div>
    );
  }
}

export default NavigationBar;

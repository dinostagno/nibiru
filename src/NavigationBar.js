import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from './logo'

class NavigationBar extends React.Component {
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#"><Logo />Nombre de la marca</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/nibiru/Inicio">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/opcion1">Opción 1</Nav.Link>
            <Nav.Link as={Link} to="/opcion2">Opción 2</Nav.Link>
            <Nav.Link as={Link} to="/opcion3">Opción 3</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavigationBar;

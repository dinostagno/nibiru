import React, { useState } from 'react';
import { Button, Nav, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { List } from 'react-bootstrap-icons'; // Importa el icono que desees
import { FcLinux } from "react-icons/fc";

const Sidebar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="light" onClick={handleShow}>
        <FcLinux size={24} style={{ fontSize: "40px" }} /> 
      </Button>

      <Offcanvas show={show} onHide={handleClose} style={{ 
        background: 'rgba(255, 255, 255, 0)', // Fondo completamente transparente
        transition: '0.5s ease-out',
        width: '300px' 
      }}>
        <Offcanvas.Header className="justify-content-end">
          <button type="button" className="btn btn-close p-2 border-0 shadow-none" aria-label="Close" onClick={handleClose}></button>
        </Offcanvas.Header>
        <Offcanvas.Body style={{
          background: 'rgba(255, 255, 255, 0.2)', // Fondo blanco con baja opacidad
          backdropFilter: 'blur(10px)', // Desenfoque para efecto de vidrio
        }}>
          <Nav className="flex-column">
            <Nav.Link as={Link} to="/nibiru/CodeComparator" style={{ color: '#FFFFFF' }}>CodeComparator</Nav.Link>
            <Nav.Link as={Link} to="/nibiru/Guitarrist" style={{ color: '#FFFFFF' }}>Guitarrist</Nav.Link>
            <Nav.Link as={Link} to="/nibiru/Dimension" style={{ color: '#FFFFFF' }}>Dimension</Nav.Link>
            <Nav.Link as={Link} to="/nibiru/FavoriteSingers" style={{ color: '#FFFFFF' }}>FavoriteSingers</Nav.Link>
            <Nav.Link as={Link} to="/nibiru/FavoriteMetal" style={{ color: '#FFFFFF' }}>Neoclassical Metal</Nav.Link>
            <Nav.Link as={Link} to="/nibiru/Guthrie" style={{ color: '#FFFFFF' }}>Guthrie</Nav.Link>
            <Nav.Link as={Link} to="/nibiru/Djent" style={{ color: '#FFFFFF' }}>Djent</Nav.Link>
            <Nav.Link as={Link} to="/nibiru/Random" style={{ color: '#FFFFFF' }}>Random</Nav.Link>
            <Nav.Link as={Link} to="/nibiru/Jazz" style={{ color: '#FFFFFF' }}>Jazz</Nav.Link>
            <Nav.Link as={Link} to="/nibiru/PinkFloyd" style={{ color: '#FFFFFF' }}>PinkFloyd</Nav.Link>
            <Nav.Link as={Link} to="/nibiru/Live" style={{ color: '#FFFFFF' }}>Live</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Sidebar;

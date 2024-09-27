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
            <Nav.Link as={Link} to="/nibiru/CodeComparator" style={{ color: '#FFD700' }}>CodeComparator</Nav.Link>
            <Nav.Link as={Link} to="/nibiru/Guitarrist" style={{ color: '#FFD700' }}>Guitarrist</Nav.Link>
            <Nav.Link as={Link} to="/nibiru/Dimension" style={{ color: '#FFD700' }}>Dimension</Nav.Link>
            <Nav.Link as={Link} to="/nibiru/FavoriteSingers" style={{ color: '#FFD700' }}>FavoriteSingers</Nav.Link>
            <Nav.Link as={Link} to="/nibiru/FavoriteMetal" style={{ color: '#FFD700' }}>Neoclassical Metal</Nav.Link>
            <Nav.Link as={Link} to="/nibiru/Guthrie" style={{ color: '#FFD700' }}>Guthrie</Nav.Link>
            <Nav.Link as={Link} to="/nibiru/Djent" style={{ color: '#FFD700' }}>Djent</Nav.Link>
            <Nav.Link as={Link} to="/nibiru/Random" style={{ color: '#FFD700' }}>Random</Nav.Link>
            <Nav.Link as={Link} to="/nibiru/Jazz" style={{ color: '#FFD700' }}>Jazz</Nav.Link>
            <Nav.Link as={Link} to="/nibiru/PinkFloyd" style={{ color: '#FFD700' }}>PinkFloyd</Nav.Link>
            <Nav.Link as={Link} to="/nibiru/Live" style={{ color: '#FFD700' }}>Live</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Sidebar;

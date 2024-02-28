import React, { useState } from 'react';
import { Button, Nav, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { List } from 'react-bootstrap-icons'; // Importa el icono que desees
import { FcBiohazard } from "react-icons/fc";

const Sidebar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        <FcBiohazard size={24} /> 
      </Button>

      <Offcanvas show={show} onHide={handleClose} style={{transition: '0.5s ease-out'}}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Sidebar</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body style={{
          background: 'rgba(255, 255, 255, 0.7)',
          backdropFilter: 'blur(10px)',
        }}>
          <Nav className="flex-column">
            <Nav.Link as={Link} to="/nibiru/Guitarrist">Guitarrist</Nav.Link>
            <Nav.Link as={Link} to="/nibiru/FavoriteSingers">FavoriteSingers</Nav.Link>
            <Nav.Link as={Link} to="/nibiru/FavoriteMetal">Neoclassical Metal</Nav.Link>
            <Nav.Link as={Link} to="/nibiru/Guthrie">Guthrie</Nav.Link>
            <Nav.Link as={Link} to="/nibiru/Djent">Djent</Nav.Link>
            <Nav.Link as={Link} to="/nibiru/Random">Random</Nav.Link>
            <Nav.Link as={Link} to="/nibiru/Jazz">Jazz</Nav.Link>
            <Nav.Link as={Link} to="/nibiru/PinkFloyd">PinkFloyd</Nav.Link>
            <Nav.Link as={Link} to="/nibiru/Live">Live</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Sidebar;

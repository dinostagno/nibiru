import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  const footerStyle = {
    background: 'radial-gradient(circle, rgba(112,128,144,0.3) 0%, rgba(255,255,255,1) 90%)', // Gradiente de color de fondo plomo suave
  };

  return (
    <footer style={footerStyle} className="mt-auto py-3">
      <Container>
        <Row>
          <Col className="text-center">
            <p className="mb-0">© 2024 Mi Sitio Web. Todos los derechos reservados.</p>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <a href="#!">Términos de servicio</a> | <a href="#!">Política de privacidad</a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="mt-auto py-3 bg-light">
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

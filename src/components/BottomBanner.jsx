import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const BottomBanner = () => {
  const bannerStyle = {
    background: `rgb(230, 230, 250)`,
    backdropFilter: 'blur(5px)', // Esto añade el efecto de desenfoque de fondo
    padding: '10px 0',
    marginBottom: '20px',
  };

  // Obtén la fecha actual
  const date = new Date();
  const months = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
  const formattedDate = `${date.getDate()} de ${months[date.getMonth()]} de ${date.getFullYear()}`;

  return (
    <div style={bannerStyle}>
      <Container>
        <Row>
          <Col className="text-center">
            <p className="mb-0">{formattedDate}</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BottomBanner;

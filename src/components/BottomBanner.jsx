import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const BottomBanner = () => {
  const bannerStyle = {
    background: `linear-gradient(to bottom, #E6F7FF, #FFFFFF)`,
    backdropFilter: 'blur(5px)', // Esto añade el efecto de desenfoque de fondo
    padding: '10px 0',
    marginBottom: '20px',
  };

  return (
    <div style={bannerStyle}>
      <Container>
        <Row>
          <Col className="text-center">
            <p className="mb-0">Este es tu texto centrado</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BottomBanner;

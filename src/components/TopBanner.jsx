import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import moment from 'moment';
import Sidebar from './Sidebar';

const TopBanner = () => {
  const [time, setTime] = useState(moment().format('LTS')); // Formato de 12 horas (p. ej., 11:59:59 PM)
  const [city, setCity] = useState('');

  useEffect(() => {
    // Actualiza la hora cada segundo
    const interval = setInterval(() => {
      setTime(moment().format('LTS'));
    }, 1000);

    // Obtiene el nombre de la ciudad basado en la ubicación del usuario
    fetch('https://geolocation-db.com/json/')
      .then(response => response.json())
      .then(data => setCity(data.city));

    return () => clearInterval(interval);
  }, []);

  const bannerStyle = {
    background: 'rgb(10, 56, 113)', // Fondo verde claro con 80% de opacidad
    padding: '10px 0',
  };

  return (
    <div style={bannerStyle}>
      <Container>
        <Row>
          <Col xs="auto">
            <Sidebar />
          </Col>
          <Col className="text-center">
            {/* <p className="mb-0">{`${time} - ${city}`}</p> */}
            <p className="mb-0" style={{ color: 'rgb(188, 0, 45)' }}>{`${time} - ${city}`}</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TopBanner;

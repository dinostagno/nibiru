import React, { useState } from 'react';
import YouTube from 'react-youtube';
import { Container, Row, Col, Spinner } from 'react-bootstrap';

const FavoriteMetal = () => {
  const [loading, setLoading] = useState(true);

  const videos = [
    'k3vfWnvetQU', 
    '5gQBuGeAOQQ', 
    'Tn58-Nl9NYw', 
    'aHolTqDXipc', 
    'N2l8KtdQ7Ek', 
    'oupD5I_CG-s', 
    'pv1kirNU8n4',
    'rCQ4tUwNy4U', 
    '1kcvj1BW9p8', 
  ];

  const handleVideoReady = () => {
    setLoading(false);
  };

  return (
    <Container>
      <Row className="justify-content-center">
        {videos.map((videoId, index) => (
          <Col key={index} xs={12} md={6} lg={6} className="mb-4 d-flex justify-content-center">
            <div style={{ width: '100%' }}>
              {loading && <Spinner animation="border" variant="primary" />}
              <YouTube
                videoId={videoId}
                className="embed-responsive-item" // Mantenemos el estilo original sin cambios
                containerClassName="embed-responsive embed-responsive-16by9"
                opts={{
                  width: '100%',
                  playerVars: {
                    modestbranding: 1,
                    showinfo: 0,
                    controls: 1,
                  },
                }}
                onReady={handleVideoReady}
              />
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default FavoriteMetal;
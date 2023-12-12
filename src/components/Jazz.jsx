import React, { useState } from 'react';
import YouTube from 'react-youtube';
import { Container, Row, Col, Spinner } from 'react-bootstrap';

const Jazz = () => {
  const [loading, setLoading] = useState(true);

  const videos = [
    'MOm17yw__6U', // Wes Montgomery - "West Coast Blues"
    'CE8ewj7_VCk', // Wes Montgomery - "Round Midnight"
    'PFs2tSNESk8', // Wes Montgomery - "Four on Six"
    'uHFJ9qhR0VM', // Wes Montgomery - "Bumpin' on Sunset"
    'NoIh-WjhUl8', // Lee Ritenour - "Is It You?"
    'WFGEPxVG5Yo', // Lee Ritenour - "Night Rhythms"
    'KG7fIFuQTMw', // Lee Ritenour - "Wes Bound"
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

export default Jazz;
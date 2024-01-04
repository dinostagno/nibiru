import React, { useState } from 'react';
import YouTube from 'react-youtube';
import { Container, Row, Col, Spinner } from 'react-bootstrap';

const Ai = () => {
  const [loading, setLoading] = useState(true);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const videos = [
    '5eGbnVlRcRg', 
    'XPpTgCho5ZA', 
    'yKNxeF4KMsY', 
    'gnIZ7RMuLpU', 
    'w3viBe2Q0P8', 
    'fyMhvkC3A84', 
    'Cjp6RVrOOW0', 
    '93ASUImTedo', 
  ];

  const handleVideoReady = () => {
    setLoading(false);
  };

  const handleVideoEnd = () => {
    setCurrentVideoIndex((currentVideoIndex + 1) % videos.length);
  };

  return (
    <Container>
      <Row className="justify-content-center">
        {videos.map((videoId, index) => (
          <Col key={index} xs={12} md={6} lg={6} className="mb-4 d-flex justify-content-center">
            <div style={{ width: '100%' }}>
              {loading && <Spinner animation="border" variant="primary" />}
              <YouTube
                videoId={index === currentVideoIndex ? videoId : null}
                className="embed-responsive-item"
                containerClassName="embed-responsive embed-responsive-16by9"
                opts={{
                  width: '100%',
                  playerVars: {
                    autoplay: 1,
                    modestbranding: 1,
                    showinfo: 0,
                    controls: 1,
                  },
                }}
                onReady={handleVideoReady}
                onEnd={handleVideoEnd}
              />
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Ai;

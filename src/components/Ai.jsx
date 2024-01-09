import React, { useState } from 'react';
import YouTube from 'react-youtube';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Ai = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const videos = [
    // '5eGbnVlRcRg', 
    // '5eGbnVlRcRg', 
    'XPpTgCho5ZA', 
    'yKNxeF4KMsY', 
    'gnIZ7RMuLpU', 
    'w3viBe2Q0P8', 
    'fyMhvkC3A84', 
    'Cjp6RVrOOW0', 
    '93ASUImTedo', 
  ];

  const handleVideoEnd = () => {
    const nextVideoIndex = (currentVideoIndex + 1) % videos.length;
    setCurrentVideoIndex(nextVideoIndex);
  };

  const handleNextClick = () => {
    const nextVideoIndex = (currentVideoIndex + 1) % videos.length;
    setCurrentVideoIndex(nextVideoIndex);
  };

  const handlePrevClick = () => {
    const prevVideoIndex = (currentVideoIndex - 1 + videos.length) % videos.length;
    setCurrentVideoIndex(prevVideoIndex);
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={4} lg={4} className="mb-4 d-flex justify-content-center">
          <div style={{ width: '100%' }}>
            <YouTube
              videoId={videos[currentVideoIndex]}
              className="embed-responsive-item"
              containerClassName="embed-responsive embed-responsive-16by9"
              opts={{
                width: '100%',
                playerVars: {
                  autoplay: 1,
                  modestbranding: 1,
                  showinfo: 1,
                  controls: 1,
                },
              }}
              onEnd={handleVideoEnd}
            />
            <div className="d-flex justify-content-between mt-3">
              <Button variant="outline-primary" onClick={handlePrevClick}>Anterior</Button>
              <Button variant="outline-primary" onClick={handleNextClick}>Siguiente</Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Ai;

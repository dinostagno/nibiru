import React, { useRef, useState } from 'react';
import YouTube from 'react-youtube';
import { Container, Row, Col, Button } from 'react-bootstrap';

const FavoriteMetal = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const playerRef = useRef(null);

  const videos = [
    'k3vfWnvetQU', 
    'Tn58-Nl9NYw', 
    'aHolTqDXipc', 
    'N2l8KtdQ7Ek', 
    'oupD5I_CG-s', 
    'pv1kirNU8n4',
    'rCQ4tUwNy4U', 
    '1kcvj1BW9p8', 
    'm1h8WmYO7xA', 
    'YJHWo8iQOgM', 
    'tIWevrIQqt8', 
    'GcdFH6pAUPs', 
  ];

  const handleVideoEnd = () => {
    const nextVideoIndex = (currentVideoIndex + 1) % videos.length;
    setCurrentVideoIndex(nextVideoIndex);
  };

  const handleNextClick = () => {
    const nextVideoIndex = (currentVideoIndex + 1) % videos.length;
    setCurrentVideoIndex(nextVideoIndex);
    playerRef.current.internalPlayer.loadVideoById(videos[nextVideoIndex]);
  };

  const handlePrevClick = () => {
    const prevVideoIndex = (currentVideoIndex - 1 + videos.length) % videos.length;
    setCurrentVideoIndex(prevVideoIndex);
    playerRef.current.internalPlayer.loadVideoById(videos[prevVideoIndex]);
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
              ref={playerRef}
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

export default FavoriteMetal;

import React, { useState } from 'react';
import YouTube from 'react-youtube';
import { Container, Row, Col, Spinner } from 'react-bootstrap';

const Ai = () => {
  const [loading, setLoading] = useState(true);

  const videos = [
    '5eGbnVlRcRg', 
    't2xX0lS_06Y', 
    'yKNxeF4KMsY', 
    'gnIZ7RMuLpU', 
    'w3viBe2Q0P8', 
    'fyMhvkC3A84', 
    'Cjp6RVrOOW0', 
    '93ASUImTedo', 
    // 'mWpmqoeQIiw', // Video 3
    // 'lSLXS0bjSCs', // Video 2
    // 'mWpmqoeQIiw', // Video 3
    // 'lSLXS0bjSCs', // Video 2
    // 'mWpmqoeQIiw', // Video 3
    // 'lSLXS0bjSCs', // Video 2
    // 'mWpmqoeQIiw', // Video 3
    // 'lSLXS0bjSCs', // Video 2
    // 'mWpmqoeQIiw', // Video 3
    // 'lSLXS0bjSCs', // Video 2
    // 'mWpmqoeQIiw', // Video 3
    // 'lSLXS0bjSCs', // Video 2
    // 'mWpmqoeQIiw', // Video 3
    // 'lSLXS0bjSCs', // Video 2
    // 'mWpmqoeQIiw', // Video 3
    // 'lSLXS0bjSCs', // Video 2
    // 'mWpmqoeQIiw', // Video 3
    // 'lSLXS0bjSCs', // Video 2
    // 'mWpmqoeQIiw', // Video 3
    // 'lSLXS0bjSCs', // Video 2
    // 'mWpmqoeQIiw', // Video 3
    // 'lSLXS0bjSCs', // Video 2
    // 'mWpmqoeQIiw', // Video 3
    // 'lSLXS0bjSCs', // Video 2
    // 'mWpmqoeQIiw', // Video 3
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

export default Ai;

import React, { useState } from 'react';
import YouTube from 'react-youtube';
import { Container, Row, Col, Spinner } from 'react-bootstrap';

const PinkFloyd = () => {
  const [loading, setLoading] = useState(true);

  const videos = [
    // Dark Side of the Moon
    'JwYX52BP2Sk', // Pink Floyd - "Speak to Me/Breathe"
    '8UXircX3VdM', // Pink Floyd - "On the Run"
    'vQf8L1DYlxQ', // Pink Floyd - "Time"
    'kVYVr3U5s8U', // Pink Floyd - "The Great Gig in the Sky"
    '0kNGnIKUdMI', // Pink Floyd - "Money"
    'gP8ZEM5zI0A', // Pink Floyd - "Us and Them"
    'w1bM3xr1bJ0', // Pink Floyd - "Any Colour You Like"
    'cVBCE3gaNxc', // Pink Floyd - "Brain Damage"
    'SLuW-GBaJ8k', // Pink Floyd - "Eclipse"

    // Animals
    'AwNsk5ccA6g', // Pink Floyd - "Pigs on the Wing 1"
    'YR5ApYxkU-U', // Pink Floyd - "Dogs"
    'YR5ApYxkU-U', // Pink Floyd - "Pigs (Three Different Ones)"
    'YR5ApYxkU-U', // Pink Floyd - "Sheep"
    'YR5ApYxkU-U', // Pink Floyd - "Pigs on the Wing 2"

    // Echoes
    '6yCIDkFI7ew', // Pink Floyd - "One of These Days"
    '6yCIDkFI7ew', // Pink Floyd - "Echoes"
    '6yCIDkFI7ew', // Pink Floyd - "Astronomy Domine"
    '6yCIDkFI7ew', // Pink Floyd - "Set the Controls for the Heart of the Sun"
    '6yCIDkFI7ew', // Pink Floyd - "Careful with That Axe, Eugene"
    '6yCIDkFI7ew', // Pink Floyd - "One of These Days (Live at Pompeii version)"
    '6yCIDkFI7ew', // Pink Floyd - "Echoes (Live at Pompeii version)"
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
                className="embed-responsive-item"
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

export default PinkFloyd;
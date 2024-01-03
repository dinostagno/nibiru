import React, { useState } from 'react';
import YouTube from 'react-youtube';
import { Container, Row, Col, Spinner } from 'react-bootstrap';

const Guitarrist = () => {
  const [loading, setLoading] = useState(true);

  const videos = [
    'QIeCCqWSRnw',
    'g7PJlf543Ew',
    'tM8LmzKca3k',
    'EXiiAwl3P4M',
    'xSayYNy28TA',
    'm0SkBGUUGy8',
    'hrwk0COfggo', //Joe Satriani
    'U75g2mDTXtA',
    'ZN4y4oG9tLc',
    'enrF_qXvXIk',
    'F0zuS7JqNgM',
    'w08UZsqyyr8',
    '9D0WuVE8dQU',
    'cDTm7Hx26zI', //Guthrie Govan
    'vxtONnys53s',
    'smQC_iVgGEw',
    'aolor5zx3vE',
    'w08UZsqyyr8',
    '8KC-PLSkQn0',
    'uHFJ9qhR0VM',
    'mrojrDCI02k',
    '53N99Nim6WE',
    'P7YMI39sObY',
    '4QA30qkRYy8',
    'TuMfRI2dStE',
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

export default Guitarrist;

import React, { useState } from 'react';
import YouTube from 'react-youtube';
import { Container, Row, Col, Button } from 'react-bootstrap';

const PinkFloyd = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const videos = [
    'R49d4f5sEs4', // Dark Side of the Moon
    'JwYX52BP2Sk', 
    'HoLhKJuGhK0', 
    'DVQ3-Xe_suY', 
    'T13se_2A7c8', 
    'bK7HJvmgFnM', 
    'DVQ3-Xe_suY', 
    'cpbbuaIA3Ds', 
    'G0wOOlwXLgA', 
    'dd1y-DDpASk', // Animals
    '4QA30qkRYy8', 
    'gZM1WQKwpl0', 
    '3GE-sfEbJ7I', 
    'kMlLfZJcML0', 
    'T8SEVeC6G2o', // Echoes
    'qmOs9ZJ1Vxc',
    'bBuiptCk518',
    'E_lu_V15-Co',
    'Ygb-xprXVyM',
    'c-MU_5VkjtE',
    'INPQuOU8hg8',
    'C8Xc0VptCBY',
    'bbWOmh_rRq0',
    'z3cg3IQzSqw',
    'AsDKoCpG_as',
    '9xwHFponJN4',
    '9jPR5n3QlDw',
    '9pkh8zi_eic',
    'tfibJ2nhrVo',
    'yjq3ckItZdE',
    'QHhNt6q06_k',
    'ikfPlrVur40',
    'BgVYyQD05uc',
    'h90j3lOXNvU',
    'cRe05aJxSfw',
    'mybz6bw65y0',
    'yqdoHPFW_5M',
    '9I3dgUzBHno',
    '8HXPLHW1Zno',
    '6RKjzC7Tg-4',
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

export default PinkFloyd;

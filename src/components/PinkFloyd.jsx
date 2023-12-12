import React, { useState } from 'react';
import YouTube from 'react-youtube';
import { Container, Row, Col, Spinner } from 'react-bootstrap';

const PinkFloyd = () => {
  const [loading, setLoading] = useState(true);

  const videos = [
    // Dark Side of the Moon
    'R49d4f5sEs4', 
    'JwYX52BP2Sk', 
    'HoLhKJuGhK0', 
    'DVQ3-Xe_suY', 
    'T13se_2A7c8', 
    'bK7HJvmgFnM', 
    'DVQ3-Xe_suY', 
    'cpbbuaIA3Ds', 
    'G0wOOlwXLgA', 

    // Animals
    'dd1y-DDpASk', 
    '4QA30qkRYy8', 
    'gZM1WQKwpl0', 
    '3GE-sfEbJ7I', 
    'kMlLfZJcML0', 

    // Echoes
    'T8SEVeC6G2o',
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
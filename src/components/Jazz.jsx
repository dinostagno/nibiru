import React from 'react';
import YouTube from 'react-youtube';
import { Container, Row, Col } from 'react-bootstrap';

const Jazz = () => {
    const videos = [
        '4bP0Lh2cP_U', // Wes Montgomery - "West Coast Blues"
        'oBu-pQG6s9s', // Wes Montgomery - "Round Midnight"
        'Cj_qFZq_TKk', // Wes Montgomery - "Four on Six"
        'bkGpwyYBYfI', // Wes Montgomery - "Bumpin' on Sunset"
        'ofMNqywNtXY', // Lee Ritenour - "Is It You?"
        'TbFjeqpCtC0', // Lee Ritenour - "Night Rhythms"
        'XCpZvAZ7dSM', // Lee Ritenour - "Wes Bound"
        'LV_XHjOsgtE', // Fourplay - "101 Eastbound"
        'DXvMT_mVbqw', // Fourplay - "Between the Sheets"
        '6vKGDJK_zK0', // Fourplay - "Bali Run"
        'B9dSYgd5Elk', // Miles Davis - "So What"
        'Xuo_YYbU65g', // John Coltrane - "Giant Steps"
        'h4xVF99I3yk', // Billie Holiday - "Strange Fruit"
        'JGb5IweiYG8', // Ella Fitzgerald - "Summertime"
        'aXnfhnCoOyo', // Duke Ellington - "Take the 'A' Train"
        'nJfFT3XXUYs', // Louis Armstrong - "What a Wonderful World"
        'hRu7Pt42xNo', // Herbie Hancock - "Chameleon"
        'u_PqAz1mRwc', // Chick Corea - "Spain"
        'bkMvCoKZC9g', // Pat Metheny - "Last Train Home"
        'mJXk9sNkqsc', // Stanley Clarke - "School Days"
        // Agrega más IDs de videos aquí
      ];
      
  return (
    <Container>
      <Row className="justify-content-center">
        {videos.map((videoId, index) => (
          <Col key={index} xs={12} md={6} lg={6} className="mb-4 d-flex justify-content-center">
            <div style={{ width: '100%' }}>
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
              />
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Jazz;

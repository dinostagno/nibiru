import React, { useRef, useState } from 'react';
import YouTube from 'react-youtube';
import { Button } from 'react-bootstrap';
import { MDBContainer } from 'mdbreact';

const Dimension = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const playerRef = useRef(null);

  const videos = [
    'uXJRZHZwb1c', 
    'qLQcmOfcwUM',
    'atNdnc90vy0',
    '8XDMy7m8w7w',
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
    <MDBContainer fluid className="p-3">
      <div className="embed-responsive embed-responsive-16by9">
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
      </div>
      <div className="d-flex justify-content-between mt-3">
        <Button variant="outline-primary" onClick={handlePrevClick}>Anterior</Button>
        <Button variant="outline-primary" onClick={handleNextClick}>Siguiente</Button>
      </div>
    </MDBContainer>
  );
};

export default Dimension;

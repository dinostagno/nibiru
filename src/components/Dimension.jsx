import React, { useRef, useState } from 'react';
import YouTube from 'react-youtube';
import { Button } from 'react-bootstrap';
import { MDBContainer } from 'mdbreact';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Importa los íconos de flecha

const Dimension = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const playerRef = useRef(null);

  const videos = [
    'AaYuW2-0saY',
    'dMvrlTdh_hc',
    'uXJRZHZwb1c', 
    'qLQcmOfcwUM',
    'atNdnc90vy0',
    '8XDMy7m8w7w',
    '0F_ygcTl1OU',
    'TBAN7ngKe2w',
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
      <div className="embed-responsive embed-responsive-16by9" style={{ maxWidth: '1280px', margin: 'auto' }}>
        <YouTube
          videoId={videos[currentVideoIndex]}
          className="embed-responsive-item"
          opts={{
            width: '100%', // Se ajusta al contenedor
            height: '720', // Altura ajustada
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
        <Button variant="light" className="mx-3" onClick={handlePrevClick}>
          <FaChevronLeft style={{ fontSize: "40px" }} />
        </Button>
        <Button variant="light" className="mx-3" onClick={handleNextClick}>
          <FaChevronRight style={{ fontSize: "40px" }} /> 
        </Button>
        {/* <Button variant="outline-primary" onClick={handlePrevClick}>
          <FaChevronLeft /> 
        </Button>
        <Button variant="outline-primary" onClick={handleNextClick}>
          <FaChevronRight /> 
        </Button> */}
      </div>
    </MDBContainer>
  );
};

export default Dimension;

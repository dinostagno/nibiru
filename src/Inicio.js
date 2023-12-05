import React, { useState } from 'react';

const YouTubeVideo = ({ src, loaded }) => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  const handleLoad = () => {
    setVideoLoaded(true);
    loaded();
  };

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '800px', // Ancho máximo de 800px
        margin: '0 auto', // Centrar el video
      }}
    >
      {!videoLoaded && (
        <div
          style={{
            position: 'relative',
            paddingBottom: '56.25%', // Proporción 16:9 para el video
            height: '0',
            overflow: 'hidden',
            backgroundColor: '#f1f1f1',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '18px',
            color: '#333',
          }}
        >
          Loading...
        </div>
      )}
      <div
        style={{
          display: videoLoaded ? 'block' : 'none',
          position: 'relative',
          paddingBottom: '56.25%', // Proporción 16:9 para el video
          height: '0',
          overflow: 'hidden',
        }}
      >
        <iframe
          title="YouTube video player"
          className="embed-responsive-item"
          src={src}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
          }}
          onLoad={handleLoad}
        ></iframe>
      </div>
    </div>
  );
};

class Inicio extends React.Component {
  handleAllLoaded = () => {
    // Lógica a ejecutar cuando todos los videos estén cargados
  };

  render() {
    const videoList = [
      'https://www.youtube-nocookie.com/embed/QIeCCqWSRnw',
      'https://www.youtube-nocookie.com/embed/g7PJlf543Ew',
      'https://www.youtube-nocookie.com/embed/tM8LmzKca3k',
      'https://www.youtube-nocookie.com/embed/EXiiAwl3P4M',
      'https://www.youtube-nocookie.com/embed/xSayYNy28TA',
      'https://www.youtube-nocookie.com/embed/m0SkBGUUGy8',
      'https://www.youtube-nocookie.com/embed/hrwk0COfggo',//Joe Satriani
      'https://www.youtube-nocookie.com/embed/U75g2mDTXtA',
      'https://www.youtube-nocookie.com/embed/ZN4y4oG9tLc',
      'https://www.youtube-nocookie.com/embed/enrF_qXvXIk',
      'https://www.youtube-nocookie.com/embed/F0zuS7JqNgM',
      'https://www.youtube-nocookie.com/embed/w08UZsqyyr8',
      'https://www.youtube-nocookie.com/embed/9D0WuVE8dQU',
      'https://www.youtube-nocookie.com/embed/cDTm7Hx26zI',//Guthrie Govan
      'https://www.youtube-nocookie.com/embed/vxtONnys53s',
      'https://www.youtube-nocookie.com/embed/smQC_iVgGEw',
      'https://www.youtube-nocookie.com/embed/aolor5zx3vE',
      'https://www.youtube-nocookie.com/embed/w08UZsqyyr8',
      'https://www.youtube-nocookie.com/embed/8KC-PLSkQn0',
      'https://www.youtube-nocookie.com/embed/uHFJ9qhR0VM',
      'https://www.youtube-nocookie.com/embed/mrojrDCI02k',
      'https://www.youtube-nocookie.com/embed/53N99Nim6WE',
      'https://www.youtube-nocookie.com/embed/P7YMI39sObY',
      'https://www.youtube-nocookie.com/embed/4QA30qkRYy8',
      'https://www.youtube-nocookie.com/embed/TuMfRI2dStE',
    ];

    return (
      <div>
        {videoList.map((videoSrc, index) => (
          <YouTubeVideo key={index} src={videoSrc} loaded={this.handleAllLoaded} />
        ))}
      </div>
    );
  }
}

export default Inicio;

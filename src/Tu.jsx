import React, { useState } from 'react';

const Tu = () => {
  const [showVideos, setShowVideos] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [correctKey, setCorrectKey] = useState('11'); // Coloca tu clave secreta

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleShowVideos = () => {
    if (inputValue === correctKey) {
      setShowVideos(true);
    } else {
      setShowVideos(false);
    }
  };

  return (
    <div>
      <input
        type="password"
        placeholder="Ingresa la clave"
        onChange={handleInputChange}
        value={inputValue}
      />
      <button onClick={handleShowVideos}>Mostrar Videos</button>

      {showVideos && (
        <div
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: '800px', // Ancho máximo de 800px
            margin: '0 auto', // Centrar el video
          }}
        >
          <div
            style={{
              position: 'relative',
              paddingBottom: '56.25%', // Proporción 16:9 para el video
              height: '0',
              overflow: 'hidden',
            }}
          >
            <iframe
              title="YouTube video player"
              className="embed-responsive-item"
              src="https://www.youtube-nocookie.com/embed/PFW2uSCZ0uE?si=QmhtI1U-FWQrOx3x"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              style={{
                position: 'absolute',
                top: '0',
                left: '0',
                width: '100%',
                height: '100%',
              }}
            ></iframe>
            {/* Aquí podrías agregar más iframes para más videos */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Tu;

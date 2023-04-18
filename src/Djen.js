import React from 'react';

class Djent extends React.Component {
  render() {
    return (
      <div>
        <iframe 
          title="YouTube video player"
          className="embed-responsive-item"
          src="https://www.youtube-nocookie.com/embed/W_SifnDVlRE"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <iframe 
          title="YouTube video player"
          className="embed-responsive-item"
          src="https://www.youtube.com/embed/CYI-zw1afaA"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <iframe 
          title="YouTube video player"
          className="embed-responsive-item"
          src="https://www.youtube-nocookie.com/embed/qcrjaHY6YuQ"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    ) 
  }
}

export default Djent;
import React from 'react';

class Random extends React.Component {
  render() {
    return (
        <div>
        <iframe 
          title="YouTube video player"
          className="embed-responsive-item"
          src="https://www.youtube-nocookie.com/embed/uDsJB_zUquo"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    );
  }
}

export default Random;
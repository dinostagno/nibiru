import React from 'react';

class Live extends React.Component {
  render() {
    return (
      <div>
        <iframe 
          title="YouTube video player"
          className="embed-responsive-item"
          src="https://www.youtube-nocookie.com/embed/W-DpvF8BHwk"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <iframe 
          title="YouTube video player"
          className="embed-responsive-item"
          src="https://www.youtube-nocookie.com/embed/iUaevnP1LLg"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    ) 
  }
}

export default Live;
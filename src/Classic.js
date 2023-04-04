import React from 'react';

class Classic extends React.Component {
  render() {
    return (
        <div>
        <iframe 
          title="YouTube video player"
          className="embed-responsive-item"
          src="https://www.youtube-nocookie.com/embed/1A0MPWseJIE"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <iframe 
          title="YouTube video player"
          className="embed-responsive-item"
          src="https://www.youtube-nocookie.com/embed/IC5PL0XImjw"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <iframe 
          title="YouTube video player"
          className="embed-responsive-item"
          src="https://www.youtube-nocookie.com/embed/yRYFKcMa_Ek"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    );
  }
}

export default Classic;
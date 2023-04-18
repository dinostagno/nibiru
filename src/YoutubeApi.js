import React, { useState, useEffect } from 'react';
import axios from 'axios';

const YoutubeSearch = () => {
  const [videos, setVideos] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${searchQuery}&type=video&key=YOUR_API_KEY_HERE`
      );
      setVideos(response.data.items);
    };
    fetchData();
  }, [searchQuery]);

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div>
      <h1>YouTube Search</h1>
      <input type="text" value={searchQuery} onChange={handleInputChange} />
      <ul>
        {videos.map((video) => (
          <li key={video.id.videoId}>
            <h2>{video.snippet.title}</h2>
            <p>{video.snippet.description}</p>
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${video.id.videoId}`}
              title={video.snippet.title}
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default YoutubeSearch;

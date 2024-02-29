import React, { useState } from 'react';
import axios from 'axios';
import { Form, FormControl, Button } from 'react-bootstrap';
import { FcSearch } from "react-icons/fc";

const YoutubeSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [videos, setVideos] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
          part: 'snippet',
          maxResults: 1,
          key: 'AIzaSyAAwMUdTMI_P3PL5sCs_rmo-wVvvOtJjl8',
          q: searchTerm
        }
      });

      setVideos(response.data.items);
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch();
  };

  return (
    <div className="container mt-4">
      <Form onSubmit={handleSubmit} className="d-flex">
        <FormControl
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Buscar videos en YouTube"
          style={{ fontSize: '16px', marginRight: '5px', marginBottom: '15px', flex: '1', outline: 'none', marginTop: '5px' }}
          className="form-control"
        />
        <Button type="submit" className="btn btn-outline-info">
        {/* <Button type="submit" style={{ fontSize: '10px', marginLeft: '5px' }} className="btn btn-outline-info"> */}
          <FcSearch color="white" size={24} />
        </Button>
      </Form>

      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {videos.map((video) => (
          <div key={video.id.videoId} style={{ width: '100%', maxWidth: '1600px', marginBottom: '20px' }}>
            <h3>{video.snippet.title}</h3>
            <p>{video.snippet.description}</p>
            <div style={{ position: 'relative', paddingBottom: '56.25%', width: '100%', height: '0' }}>
              <iframe
                style={{ position: 'absolute', width: '100%', height: '100%' }}
                src={`https://www.youtube.com/embed/${video.id.videoId}`}
                title={video.snippet.title}
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YoutubeSearch;

import React, { useEffect, useState } from 'react'
import { Grid } from '@mui/material';
import VideoPreview from '../../components/video/VideoPreview';
import http from '../../utils/http';

const Home = () => {

  const [videos, setVideos] = useState([]);
  
  /* Fetch data from Redux or Firebase */
  useEffect(() => {
    http
      .get("/products")
      .then(res => setVideos(res.data))
      .catch(error => alert(error))
  }, [])

  return (
    <Grid container>
      { videos.map(video => <VideoPreview key={video.id} video={video} />) }
    </Grid>
  )
}

export default Home
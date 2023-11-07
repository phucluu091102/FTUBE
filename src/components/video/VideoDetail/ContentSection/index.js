import { Avatar, Box, Button, Grid, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { AspectRatio } from '@mui/joy';
import DownloadIcon from '@mui/icons-material/Download';
// import ThumbUpIcon from '@mui/icons-material/ThumbUp';
// import FavoriteIcon from '@mui/icons-material/Favorite';
import http from '../../../../utils/http';

const ContentSection = ({videoID}) => {
  const theme = useTheme();
  const matchDown = useMediaQuery(theme.breakpoints.down('md'));

  const [video, setVideo] = useState(null);

  useEffect(() => {
    http
      .get(`/products/${videoID}`)
      .then(res => setVideo(res.data))
  }, [videoID])

  return (
    <Box width={"100%"}>
      <AspectRatio
        ratio={matchDown ? 16/10 : 16/9}
        sx={{ 
          width: "100%", 
          borderRadius: 10
        }}
      > 
        <video controls src={video?.videoPath} style={{ objectFit: 'fill' }} autoPlay/>
      </AspectRatio>
      <Typography 
        variant='caption' 
        component={'div'} 
        noWrap
        sx={{
          fontSize: '1.5rem',
          margin: theme.spacing(0.5, 0)
        }}
      >
        {video?.name}
      </Typography>
      <Box>
        <Grid container>
          <Grid item xs={4}>
            <Stack direction={'row'} spacing={2}>
              <Avatar
                variant='circular'
                src='https://plus.unsplash.com/premium_photo-1675865396004-c7b86406affe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1925&q=80' 
              />
              <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
                <Typography variant='subtitle1' component={'div'}>{video?.chanelName}</Typography>
              </Box>
            </Stack>
          </Grid>
          {/* <Grid item xs={4}>
            <Stack direction={'row'} justifyContent={'center'} spacing={2}>
              <LikeButton />
              <AddWishListButton />
            </Stack>
          </Grid> */}
          <Grid item xs={4}>
            <Button 
              variant='outlined'
              startIcon={<DownloadIcon />}
              sx={{ float: 'right' }}
            >
              Tải xuống
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default ContentSection

/* const LikeButton = () => {
  const [isLike, setIsLike] = useState(false);

  return (
    <Button
      color={isLike ? 'error' : 'primary'}
      variant={isLike ? 'contained' : 'outlined'}
      startIcon={<ThumbUpIcon />}
      onClick={() => setIsLike(!isLike)}
    >
      Like
    </Button>
  );
}

const AddWishListButton = () => {
  const [isAdd, setIsAdd] = useState(false);

  return (
    <Button
      color={isAdd ? 'error' : 'primary'}
      variant={isAdd ? 'contained' : 'outlined'}
      startIcon={<FavoriteIcon />}
      onClick={() => setIsAdd(!isAdd)}
    >
      Add Wishlist
    </Button>
  );
} */
import { AspectRatio } from "@mui/joy";
import { Box, Button, Typography, styled } from "@mui/material";
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import Draggable from "react-draggable";
import { useContext } from "react";
import { HorizontalStepperContext } from "../HorizontalStepper";

const VisualHiddenInput = styled("input")(() => ({
  clipPath: 'inset(50%)',
  position: 'absolute',
  bottom: 0,
  left: 0,
}))

const UploadVideoPanel = () => {
  const { ratio, blobFile, handleChangeVideo } = useContext(HorizontalStepperContext);

  return (
    <Box my={2} display={"flex"} flexDirection={"column"} justifyContent={"center"}>
      <AspectRatio ratio={ratio} sx={{ width: "100%" }}>
        <Typography component={"div"} fontSize={'4rem'}>
          {blobFile ? (
            <video width={"100%"} height={"100%"} style={{objectFit: 'fill'}} controls src={blobFile} />
          ) : (
            <PlayArrowRoundedIcon fontSize="inherit" />
          )}
        </Typography>
      </AspectRatio>
      <Draggable>
        <Button
          component="label"
          variant="contained"
          size="large"
          sx={{ position: 'absolute', width: '4rem', height: '4rem', lineHeight: '4rem', borderRadius: '50%' }}
        >
          <CloudUploadOutlinedIcon />
          <VisualHiddenInput
            type="file"
            accept=".mp4"
            onChange={handleChangeVideo}
          />
        </Button>
      </Draggable>
    </Box>
  );
};

export default UploadVideoPanel;
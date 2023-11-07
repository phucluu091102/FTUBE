import { AspectRatio } from '@mui/joy'
import { Box } from '@mui/material'
import React, { useContext } from 'react'
import { HorizontalStepperContext } from '../HorizontalStepper';

const ProjectOverViewPanel = () => {
  const { ratio } = useContext(HorizontalStepperContext);

  return (
    <Box my={2} display={"flex"} flexDirection={"column"} justifyContent={"center"}>
      <AspectRatio ratio={ratio} sx={{ width: "100%" }}></AspectRatio>
    </Box>
  )
}

export default ProjectOverViewPanel
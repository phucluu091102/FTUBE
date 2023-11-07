import { Box } from "@mui/joy";
import { Button, Stack, Step, StepLabel, Stepper } from "@mui/material";
import { createContext, useContext, useState } from "react";
import UploadVideoPanel from "../UploadVideoPanel";
import ProductDetailPanel from "../ProjectDetailPanel";
import ProjectOverViewPanel from "../ProjectOverViewPanel";
import ProjectWaitingPanel from "../ProjectWaitingPanel";
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import { UploadProjectModalContext } from "../../../Header/PersonalSection";

const steps = ["Tải video", "Chi tiết", "Tổng quát", "Đợi phê duyệt"];

export const HorizontalStepperContext = createContext(null);

const HorizontalStepper = () => {
  const { handleCloseModal } = useContext(UploadProjectModalContext)
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState({});

  const totalSteps = () => steps.length;

  const completedSteps = () => Object.keys(completed).length;

  const isLastStep = () => activeStep === totalSteps() - 1;

  const allStepsCompleted = () => completedSteps() === totalSteps();

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? steps.findIndex((_, index) => !(index in completed))
        : ( !isLastStep() ? activeStep + 1 : activeStep);
    setActiveStep(newActiveStep);
  };

  const handlePrev = () =>
    setActiveStep(Boolean(activeStep) ? activeStep - 1 : activeStep);

  const handleStep = (step) => () => setActiveStep(step);

  const handleCompleteStep = () => {
    completed[activeStep] = true;
    setCompleted({ ...completed });
    handleNext();
  };

  const [blobFile, setBlobFile] = useState(null);

  const handleChangeVideo = (event) => {
    if (event.target.files[0]) {
      const url = URL.createObjectURL(event.target.files[0]);
      setBlobFile(url);
    }
  };

  // const handleUploadVideo = () => {
  //   if (!source) {
  //     toastNotifi('Where is Video?', 'error');
  //     return;
  //   }

  //   const storageRef = ref(storage, `videos/${v4()}`)
  //   const uploadTask = uploadBytesResumable(storageRef, source)

  //   uploadTask.on("state_changed",
  //     (snapshot) => {
  //       const percent = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  //       console.log(percent);
  //     },
  //     (error) => {
  //       // upload error
  //     },
  //     () => {
  //       // get data returned then save to database
  //       getDownloadURL(uploadTask.snapshot.ref).then(downloadURL => {
  //         http.post("/products", {
  //           id: `${v4()}`,
  //           name: "ASM Java 6 | Spring Boot",
  //           chanelName: "Thầy Lộc",
  //           view: `200N`,
  //           createDate: `3 year ago`,
  //           videoPath: downloadURL,
  //         }).then(() => {
  //           setSource(null);
  //           setBlobFile(null);
  //         })
  //       })
  //     }
  //   )
  // }

  const renderSwitch = (param) => {
    switch (param) {
      case 0:
        return (
          <UploadVideoPanel />
        );
      case 1:
        return (
          <ProductDetailPanel />
        );
      case 2:
        return (
          <ProjectOverViewPanel />
        )
      case 3:
        return (
          <ProjectWaitingPanel />
        )
      default: break;
    }
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep} nonLinear alternativeLabel>
        {steps.map((label, index) => (
          <Step key={label} completed={completed[index]}>
            <StepLabel onClick={handleStep(index)} sx={{ cursor: "pointer" }}>
              {label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
      
      {/* Content of step */}
      <HorizontalStepperContext.Provider value={{
        ratio: '32 / 19',
        blobFile,
        handleChangeVideo,
      }}>
        {renderSwitch(activeStep)}
      </HorizontalStepperContext.Provider>

      <Stack direction={"row"} spacing={2}>
        <Button variant="outlined" onClick={handlePrev} startIcon={<ArrowBackIosNewOutlinedIcon />}>Quay lại</Button>
        <Button variant="outlined" onClick={handleNext} endIcon={<ArrowForwardIosOutlinedIcon />}>Tiếp theo</Button>
        <Box sx={{ flexGrow: 1 }} />
        { !isLastStep() && <Button variant="outlined" onClick={handleCompleteStep}>Hoàn thành bước {activeStep + 1}</Button> }  
        { isLastStep() && <Button variant="outlined" onClick={handleCloseModal}>Kết thúc</Button> } 
      </Stack>
    </Box>
  );
};

export default HorizontalStepper;

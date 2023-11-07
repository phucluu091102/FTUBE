import "./App.css";
import React from "react";
import Sidebar from "./components/layout/Sidebar/Sidebar";
import { Box } from "@mui/material";
import Header from "./components/layout/Header/index";
import Content from "./components/layout";
import { ToastContainer } from "react-toastify";
// import { Accept } from "./components/Proposed/Accept/Accept";
// import { Proposed } from "./components/Proposed/Proposed";
// import { Refuse } from "./components/Proposed/Refuse/Refuse";
// import { DetailPro } from "./components/Proposed/Detail/detailPro";
// import { ChangePass } from "./components/account/changePassWord/changePass";
// import { ReasonRefuse } from "./components/Proposed/Refuse/reasonrefuse";
// import { Contentchanel } from "./components/chanel/content/contentchanel";
// import { Contench } from "./components/chanel/content/contenchane";

const App = () => {
  // const theme = useTheme();  
  // const matchDown = useMediaQuery(theme.breakpoints.down("md"))  


  const [drawerOpen, setDrawerOpen] = React.useState(true);


  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };


  return (


    <Box sx={{ display: 'flex' }}>
      {/* Header */}
      <Header drawerOpen={drawerOpen} handleDrawerToggle={handleDrawerToggle} />


      {/* Sidebar */}
      <Sidebar drawerOpen={drawerOpen} handleDrawerToggle={handleDrawerToggle} />


      {/* Main */}
      <Content drawerOpen={drawerOpen} />
      {/* <Proposed /> */}
      {/* <Accept /> */}
      {/* <Refuse /> */}
      {/* <DetailPro /> */}
      {/* <PassWord /> */}
      {/* <ChangePass /> */}
      {/* <ReasonRefuse /> */}
      {/* <Contentchanel /> */}
      {/* <Contench />p */}
      <ToastContainer />


    </Box>




  );
}


export default App;



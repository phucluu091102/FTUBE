import { Box, Collapse, Drawer, List, ListItemButton, ListItemIcon, ListItemText, useMediaQuery, useTheme } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import TvIcon from '@mui/icons-material/Tv';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import SupportIcon from '@mui/icons-material/Support';
import React, { Fragment, useState } from "react";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CancelIcon from '@mui/icons-material/Cancel';
import { appbarHeight, drawerWidth } from "../../../utils/consts";
import AssignmentIcon from '@mui/icons-material/Assignment';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import { useNavigate } from "react-router-dom";


const items = [
  {
    icon: <HomeIcon />,
    label: "Trang chủ",
    LectureItem: null,
    url: './home'
  },
  {
    icon: <AssignmentIcon />,
    label: "Danh sách",
    LectureItem: [
      {
        icon: <FactCheckIcon />,
        label: "Danh sách Đề xuất",
        LectureItem: null,
        url: "./proposed"
      },
      {
        icon: <CheckCircleOutlineIcon />,
        label: "Danh sách Duyệt",
        LectureItem: null,
        url: "./accept"
      },
      {
        icon: <CancelIcon />,
        label: "Danh sách Từ chối",
        LectureItem: null,
        url: "./refuse"
      },
    ]
  },
  {
    icon: <VideoLibraryIcon />,
    label: "Video đã xem",
    LectureItem: null,
  },
  {
    icon: <SupportIcon />,
    label: "Hỗ trợ",
    LectureItem: [
      {
        icon: <CheckCircleOutlineIcon />,
        label: "Chilren 1",
      },
      {
        icon: <CheckCircleOutlineIcon />,
        label: "Chilren 2",
      },
    ]
  },
]


const ItemSidebar = ({ item }) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();


  const handleClick = (element) => {
    if (!element.LectureItem) {
      navigate(element.url);
      console.log(element.url);
    } else {
      setOpen(!open);
    }
  }


  return (


    <Fragment>
      <ListItemButton key={item.icon} onClick={() => handleClick(item)} sx={{ py: 2 }}>
        <ListItemIcon>{item.icon}</ListItemIcon>
        <ListItemText primary={item.label} />
        {item.LectureItem && (open ? <ExpandLess /> : <ExpandMore />)}
      </ListItemButton>
      {item.LectureItem && (
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {item.LectureItem.map(children => (
              <ListItemButton key={children.label} onClick={() => handleClick(children)} sx={{ pl: 4 }}>
                <ListItemIcon>{children.icon}</ListItemIcon>
                <ListItemText primary={children.label} />
              </ListItemButton>
            ))}
          </List>
        </Collapse>
      )}
    </Fragment>




  );
}


const Sidebar = ({ drawerOpen, handleDrawerToggle }) => {
  const theme = useTheme();
  const matchUp = useMediaQuery(theme.breakpoints.up("md"));


  const drawer = (
    <Box component={"div"}>
      <List>
        {items.map(item => <ItemSidebar key={item.label} item={item} />)}
      </List>
    </Box>
  );


  return (


    <Box
      component="nav"
      sx={{ width: { md: drawerWidth }, flexShrink: { sm: 0 }, paddingRight: '20px' }}
    >
      <Drawer
        variant={matchUp ? "persistent" : "temporary"}
        anchor="left"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        sx={{
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            color: theme.palette.text.primary,
            borderRight: 'none',
            [theme.breakpoints.up('md')]: {
              top: appbarHeight,
            }
          }
        }}
        ModalProps={{ keepMounted: true }}
        color="inherit"
      >
        {drawer}
      </Drawer>


    </Box >




  );
};


export default Sidebar;


//eventhandle

import { Avatar, Box, ButtonBase, Divider, ListItemIcon, ListItemText, Menu, MenuItem, Stack, useTheme } from '@mui/material'
import React, { createContext, useState } from 'react'
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import UploadProjectModal from '../../Model/UploadProjectModal';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
// import changePass from "./component/account/changePassWord/changePass";
import { Link, useNavigate } from 'react-router-dom';
export const UploadProjectModalContext = createContext(null);

const PersonalSection = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const isOpenAnchor = Boolean(anchorEl);
  const handleOpenAnchor = (event) => setAnchorEl(event.currentTarget);
  const handleCloseAnchor = () => setAnchorEl(null);

  const [isOpenModal, setIsOpenModal] = useState(false);
  const handleOpenModal = () => setIsOpenModal(true);
  const handleCloseModal = () => setIsOpenModal(false);


  const navigate = useNavigate();

  const handleChangePassword = () => {
    navigate('/changePass');
  };
  const handleMyAccount = () => {
    navigate('/myAccount');
  };
  return (
    <Box component={"div"}>
      <Stack direction={'row'} spacing={2}>
        <ButtonBase
          sx={{ borderRadius: "5px", overflow: "hidden" }}
          onClick={handleOpenModal}
        >
          <Avatar
            variant="rounded"
            sx={{
              transition: "all .2s ease-in-out",
              background: theme.palette.primary.light,
              color: theme.palette.primary.dark,
              "&:hover": {
                background: theme.palette.primary.dark,
                color: theme.palette.primary.light,
              },
            }}
          >
            <VideoCallOutlinedIcon />
          </Avatar>
        </ButtonBase>
        <ButtonBase
          sx={{ borderRadius: "5px", overflow: "hidden" }}
        // onClick={handleOpenModal}
        >
          <Avatar
            variant="rounded"
            sx={{
              transition: "all .2s ease-in-out",
              background: theme.palette.primary.light,
              color: theme.palette.primary.dark,
              "&:hover": {
                background: theme.palette.primary.dark,
                color: theme.palette.primary.light,
              },
            }}
          >
            <NotificationsNoneIcon />
          </Avatar>
        </ButtonBase>
        <ButtonBase
          id="basic-button"
          aria-controls={isOpenAnchor ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={isOpenAnchor ? 'true' : undefined}
          onClick={handleOpenAnchor}
          sx={{ overflow: "hidden" }}
        >
          <Avatar
            variant="rounded"
            src='https://plus.unsplash.com/premium_photo-1675865396004-c7b86406affe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1925&q=80'
            sx={{
              transition: "all .2s ease-in-out",
              background: theme.palette.primary.light,
              color: theme.palette.primary.dark,
              "&:hover": {
                background: theme.palette.primary.dark,
                color: theme.palette.primary.light,
              },
            }}
          />
        </ButtonBase>
      </Stack>

      <UploadProjectModalContext.Provider value={{ isOpenModal, handleCloseModal }}>
        <UploadProjectModal />
      </UploadProjectModalContext.Provider>

      <Menu
        id='basic-menu'
        anchorEl={anchorEl}
        open={isOpenAnchor}
        onClose={handleCloseAnchor}
      >
        <MenuItem onClick={handleMyAccount}>
          <ListItemIcon><AccountCircleOutlinedIcon /></ListItemIcon>
          <ListItemText>Tài khoản của tôi</ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleChangePassword}>
          <ListItemIcon ><ChangeCircleIcon /></ListItemIcon>
          <ListItemText>Đổi mật khẩu</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon><HelpOutlineOutlinedIcon /></ListItemIcon>
          <ListItemText>Trợ giúp</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon><ExitToAppOutlinedIcon /></ListItemIcon>
          <ListItemText>Đăng xuất</ListItemText>
        </MenuItem>
      </Menu >
    </Box >
  )
}

export default PersonalSection;
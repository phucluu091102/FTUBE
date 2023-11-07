import React from "react";
import { Box } from "@mui/material";
import { Button, Typography, TextField } from "@mui/material";
import { Link } from 'react-router-dom';

export const ChangePass = () => {
    return (
        <Box sx={{
            paddingTop: 10, display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            paddingBottom: 3,
        }}>
            <Box sx={{ width: '800px', height: '500px', backgroundColor: 'white', border: '1px solid ', }}>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingBottom: 6,
                    paddingTop: 2
                }}>
                    <Typography variant="h3">Đổi mật khẩu</Typography>
                </Box>
                <Box sx={{ paddingLeft: 10, paddingBottom: 3 }}>
                    <Typography variant="h5">Nhập mật khẩu cũ</Typography>
                    <TextField variant="outlined" label="mật khẩu cũ" sx={{ width: '650px' }} />
                </Box>
                <Box sx={{ paddingLeft: 10, paddingBottom: 3 }}>
                    <Typography variant="h5">Nhập mật khẩu mới</Typography>
                    <TextField variant="outlined" label="mật khẩu mới" sx={{ width: '650px' }} />
                </Box>
                <Box sx={{ paddingLeft: 10, }}>
                    <Typography variant="h5">Xác nhận mật khẩu mới</Typography>
                    <TextField variant="outlined" label="xác nhận mật khẩu mới" sx={{ width: '650px' }} />
                </Box>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingBottom: 6,
                    paddingTop: 2
                }} >
                    <Button variant="contained" color="warning" component={Link} to="/noti">Xác nhận</Button>
                </Box>
            </Box>
        </Box>
    )
}


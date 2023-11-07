import { Box } from "@mui/material";
import React from "react";
import { Button, Typography, TextField } from "@mui/material";
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { IconButton, Icon, Grid } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import MuiAlert from "@mui/material/Alert";


const handleExit = () => {
    // Đóng dialog
    // setOpen(false);


};
const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
export const ReasonRefuse = () => {
    const navigate = useNavigate();
    const [open, setOpen] = React.useState(true);

    const handleClose = () => {
        setOpen(false);
        // Chuyển hướng trang web đến trang khác sau khi đóng thông báo
        navigate("/proposed");
    };


    const handleClick = () => {
        navigate(-1);
    };
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center', // Căn giữa theo chiều ngang
            alignItems: 'center', // Căn giữa theo chiều dọc
            // height: '300px', // Chiều cao của khung Box
            // border: '1px solid black', // Định dạng viền cho khung Box
            paddingTop: 15
        }}>
            {/* <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
            >
                <Alert onClose={handleClose} severity="success">Thông báo thành công</Alert>
            </Snackbar> */}
            <Box sx={{ width: '650px', height: '370px', backgroundColor: 'white', border: '1px solid ' }}>

                <Box>
                    <Grid container justifyContent="flex-end">
                        <Grid item >
                            <IconButton>
                                <Icon onClick={handleClick}>
                                    <CloseIcon onClick={handleExit} />
                                </Icon>
                            </IconButton>
                        </Grid>
                    </Grid>
                </Box>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingBottom: 3,


                }}>
                    <Typography variant="h4">Lý do</Typography>
                </Box>
                <Box sx={{ paddingLeft: 5, paddingBottom: 3, }}>
                    <TextareaAutosize
                        minRows={6} // số dòng tối thiểu
                        maxRows={6} // số dòng tối đa
                        aria-label="textarea" // thuộc tính aria-label
                        placeholder="Nhập nội dung" // văn bản gợi ý
                        style={{ width: '570px', fontSize: '20px' }} // kiểu CSS tùy chỉnh
                    />
                </Box>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }} >
                    <Button variant="contained" color="primary" component={Link} to="/noti">Gửi</Button>


                </Box>
            </Box>
        </Box >
    )
}



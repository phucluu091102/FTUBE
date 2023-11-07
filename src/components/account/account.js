import React from 'react';
import { styled } from '@mui/system';
import TextField from '@mui/material/TextField';
import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/joy';

const useStyles = styled(() => ({
    formContainer: {
        maxWidth: 400,
        margin: '0 auto',
        paddingTop: 40,
    },
    inputField: {
        marginBottom: 20,
    },
}));

const PersonalInformation = () => {
    const classes = useStyles();

    return (
        <div className={classes.formContainer}>
            <Typography variant="h4" gutterBottom >
                Thông tin cá nhân
            </Typography>
            <Box></Box>
            <Grid container spacing={2} alignItems="center">
                <Grid item xs={6}>
                    <TextField
                        label="Mã số"
                        variant="outlined"
                        value="PS24624"
                        className={classes.inputField}
                        fullWidth
                        readOnly
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        label="Chuyên ngành"
                        variant="outlined"
                        value="Ứng dụng phần mềm"
                        className={classes.inputField}
                        fullWidth
                        readOnly
                    />
                </Grid>

                <Grid item xs={6}>
                    <TextField
                        label="Họ và tên"
                        variant="outlined"
                        value="Lưu Đình Thiên Phúc"
                        className={classes.inputField}
                        fullWidth
                        readOnly
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        label="Số điện thoại"
                        variant="outlined"
                        value="123456789"
                        className={classes.inputField}
                        fullWidth
                        readOnly
                    />
                </Grid>

                <Grid item xs={6}>
                    <TextField
                        label="Ngày sinh"
                        type="date"
                        variant="outlined"
                        className={classes.inputField}
                        fullWidth
                        InputLabelProps={{
                            shrink: true,
                        }}
                        readOnly
                    />
                </Grid>

                {/* <Grid item xs={3} sx={{ width: "10px", height: "50px" }}> */}
                {/* <TextField
                        label="Hình"
                        variant="outlined"
                        className={classes.inputField}
                        fullWidth
                        readOnly
                    /> */}
                {/* <Typography variant="h6" gutterBottom >
                        Hình
                    </Typography>
                    <Box >
                        <img sx={{ width: '10px', height: '16px' }} src="https://vnn-imgs-a1.vgcloud.vn/icdn.dantri.com.vn/2021/05/26/ngo-ngang-voi-ve-dep-cua-hot-girl-anh-the-chua-tron-18-docx-1622043349706.jpeg" alt="Image" />
                    </Box>
                </Grid> */}
                <Grid item xs={3} sx={{ width: "10px", height: "100px" }}>
                    <Typography variant="h6" component="h6">
                        Hình
                    </Typography>
                    <Box width={160} height={200}>
                        <img src="https://vnn-imgs-a1.vgcloud.vn/icdn.dantri.com.vn/2021/05/26/ngo-ngang-voi-ve-dep-cua-hot-girl-anh-the-chua-tron-18-docx-1622043349706.jpeg" alt="Image" style={{ maxWidth: '100%', maxHeight: '100%' }} />
                    </Box>
                </Grid>

                <Grid item xs={6}>
                    <TextField
                        label="Gmail"
                        variant="outlined"
                        value="phucluu091102@gmail.com"
                        className={classes.inputField}
                        fullWidth
                        readOnly
                    />
                </Grid>


            </Grid>
        </div>
    );
};

export default PersonalInformation;
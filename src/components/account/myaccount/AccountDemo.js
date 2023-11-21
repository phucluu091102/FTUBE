import React, { useState } from 'react';
// import Container from '@mui/material/Container';
// import Breadcrumbs from '@mui/material/Breadcrumbs';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import LinearProgress from '@mui/material/LinearProgress';
import Avatar from '@mui/material/Avatar';
import { Box, Grid, Divider, TextField } from '@mui/material';



export const AccountDm = () => {

    const [isEditing, setIsEditing] = useState(false);

    const handleEditClick = () => {
        // Khi nút sửa được nhấp, đặt trạng thái isEditing thành true
        setIsEditing(true);
    };

    const handleUpdateClick = () => {
        // Xử lý logic cập nhật ở đây
        // Sau khi cập nhật xong, đặt trạng thái isEditing thành false
        setIsEditing(false);
    };
    return (
        <Box>
            <Typography sx={{
                display: 'flex',
                justifyContent: 'center', // Căn giữa theo chiều ngang
                alignItems: 'center',
            }}>
                <h1>Thông tin cá nhân</h1>
            </Typography>
            <Box className="row" sx={{
                display: 'flex', justifyContent: 'center', // Căn giữa theo chiều ngang
                // alignItems: 'center',
                mt: 1
            }}>

                <Box >
                    <Card >
                        <CardContent textAlign="center" >
                            <div style={{ justifyContent: 'center' }}>
                                <Avatar
                                    alt="avatar"
                                    src="https://vnn-imgs-a1.vgcloud.vn/icdn.dantri.com.vn/2021/05/26/ngo-ngang-voi-ve-dep-cua-hot-girl-anh-the-chua-tron-18-docx-1622043349706.jpeg"
                                    sx={{ width: 250, height: 280, mb: 2, mx: 'auto' }}
                                />
                                <Typography variant="h5" mb={3} align="center">
                                    Vo Thi Thanh Na
                                </Typography>
                            </div>

                        </CardContent>
                    </Card>
                </Box>
                <Card sx={{ mb: 4, ml: 3 }}>
                    <CardContent >
                        <Grid container spacing={2} sx={{ ml: 1 }}>
                            <Grid item xs={12} sm={3} sx={{ mt: 3 }}>
                                <Typography variant="body1" mb={0} sx={{ mb: 1 }}>
                                    Họ và tên:
                                </Typography>
                                <Divider />
                            </Grid>
                            <Grid item xs={12} sm={8}>
                                {/* <Typography variant="body1" color="textSecondary" sx={{ mb: 1 }} mb={0}>
                                Vo Thi Thanh Na
                            </Typography> */}
                                <TextField
                                    style={{ width: '550px' }}
                                    id="outlined-read-only-input"
                                    defaultValue="Vo Thi Thanh Na"
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                />
                                {/* <Divider /> */}
                            </Grid>
                            {/* <hr> */}

                            <Grid item xs={12} sm={3} sx={{ mt: 3 }}>
                                <Typography variant="body1" mb={0} sx={{ mb: 1 }}>
                                    Mật khẩu:
                                </Typography>
                                <Divider />
                            </Grid>
                            <Grid item xs={12} sm={8} >
                                {/* <Typography variant="body1" color="textSecondary" mb={0} sx={{ mb: 1 }}>
                                12345
                            </Typography> */}
                                <TextField
                                    style={{ width: '550px' }}
                                    defaultValue="12345"
                                />
                                {/* <Divider /> */}
                            </Grid>
                            {/* <hr> */}
                            <Grid item xs={12} sm={3} sx={{ mt: 3 }}>
                                <Typography variant="body1" mb={0} sx={{ mb: 1 }}>
                                    Gmail:
                                </Typography>
                                <Divider />
                            </Grid>
                            <Grid item xs={12} sm={8} >
                                {/* <Typography variant="body1" color="textSecondary" mb={0} sx={{ mb: 1 }}>
                                navttps24678@fpt.edu.vn
                            </Typography> */}
                                <TextField
                                    style={{ width: '550px' }}
                                    id="outlined-read-only-input"
                                    defaultValue="navttps24678@fpt.edu.vn"
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                />
                                {/* <Divider /> */}
                            </Grid>
                            {/* <hr> */}
                            <Grid item xs={12} sm={3} sx={{ mt: 3 }}>
                                <Typography variant="body1" mb={0} sx={{ mb: 1 }}>
                                    Chuyên ngành:
                                </Typography>
                                <Divider />
                            </Grid>
                            <Grid item xs={12} sm={8} >
                                {/* <Typography variant="body1" color="textSecondary" mb={0} sx={{ mb: 1 }}>
                                Ứng dụng phần mềm
                            </Typography> */}
                                <TextField
                                    style={{ width: '550px' }}
                                    id="outlined-read-only-input"
                                    defaultValue="Ứng dụng phần mềm"
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                />
                                {/* <Divider /> */}
                            </Grid>
                            <Grid item xs={12} mt={3}>
                                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 2 }}>
                                    {/* <Button variant="contained" color="primary">
                                        Sửa thông tin
                                    </Button> */}
                                    {isEditing ? (
                                        <Button variant="contained" color="primary" onClick={handleUpdateClick}>
                                            Sửa
                                        </Button>
                                    ) : (
                                        <Box>
                                            <Button sx={{ mr: 2 }} variant="contained" color="success" onClick={handleEditClick}>
                                                Cập nhật
                                            </Button>
                                            <Button variant="contained" color="error" onClick={handleEditClick}>
                                                Hủy
                                            </Button>
                                        </Box>
                                    )}
                                </div>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Box >
            <Box>

            </Box>
        </Box>
    );
};


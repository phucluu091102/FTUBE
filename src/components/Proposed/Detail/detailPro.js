import React from 'react';
import { Box, Typography, TextField, Grid } from '@mui/material';
import { IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
export const DetailPro = () => {
    const history = useNavigate();

    const handleBackButtonClick = () => {
        history.goBack(-1);
    };
    return (

        <Box component="form"
            sx={{ width: '100%' }}
        >
            <Box sx={{ paddingBottom: 2, paddingLeft: 4 }}>
                <h1>Chi tiết Sản Phẩm</h1>
            </Box>
            <Box sx={{ paddingBottom: 4, paddingLeft: 4 }}>
                <Grid container spacing={2} alignItems='center' >
                    <Grid item>
                        <Typography variant='h5'>Tiêu đề:</Typography>
                    </Grid>
                    <Box sx={{ paddingLeft: 20 }}>
                        <Grid item >
                            <TextField sx={{ width: '800px' }} variant='outlined' label=""
                                value="Tên tiêu đề"
                                readOnly />
                        </Grid>
                    </Box>


                </Grid>
            </Box>
            <Box sx={{ paddingBottom: 4, paddingLeft: 4, borderRadius: '10px' }}>
                <Grid container spacing={2} alignItems='center' >
                    <Grid item>
                        <Typography variant='h5'>Github:</Typography>
                    </Grid>
                    <Box sx={{ paddingLeft: 21 }}>
                        <Grid item >
                            <TextField sx={{ width: '800px', background: 'aqua', }} variant='outlined' label=""
                                value="..."
                                readOnly />
                        </Grid>
                    </Box>


                </Grid>
            </Box>
            <Box sx={{ paddingBottom: 4, paddingLeft: 4 }}>
                <Grid container spacing={2} alignItems='center' >
                    <Grid item>
                        <Typography variant='h5'>Tài liệu:</Typography>
                    </Grid>
                    <Box sx={{ paddingLeft: 20 }}>
                        <Grid item >
                            <TextField sx={{ width: '300px' }} variant='outlined' label=""
                                value="..."
                                readOnly />
                        </Grid>
                    </Box>


                </Grid>
            </Box>
            <Box sx={{ paddingBottom: 4, paddingLeft: 4 }}>
                <Grid container spacing={2} alignItems='center' >
                    <Grid item>
                        <Typography variant='h5'>Chuyên ngành:</Typography>
                    </Grid>
                    <Box sx={{ paddingLeft: 10 }}>
                        <Grid item >
                            <TextField sx={{ width: '800px' }} variant='outlined' label=""
                                value="..."
                                readOnly />
                        </Grid>
                    </Box>


                </Grid>
            </Box>
            <Box sx={{ paddingBottom: 4, paddingLeft: 4 }}>
                <Grid container spacing={2} alignItems='center' >
                    <Grid item>
                        <Typography variant='h5'>Người kiểm duyệt:</Typography>
                    </Grid>
                    <Box sx={{ paddingLeft: 6 }}>
                        <Grid item >
                            <TextField sx={{ width: '800px' }} variant='outlined' label=""
                                value="..."
                                readOnly />
                        </Grid>
                    </Box>


                </Grid>
            </Box>
            <Box sx={{ paddingBottom: 4, paddingLeft: 4 }}>
                <Grid container spacing={2} alignItems='center' >
                    <Grid item>
                        <Typography variant='h5'>Mô tả:</Typography>
                    </Grid>
                    <Box sx={{ paddingLeft: 22 }}>
                        <Grid item>
                            <TextField InputProps={{ style: { height: '100px' }, }} sx={{ width: '800px' }} variant='outlined' label=""
                                value="..."
                                readOnly />
                        </Grid>
                    </Box>


                </Grid>
            </Box>
        </Box>
    );
}

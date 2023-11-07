import React from "react";
import { Box, Typography } from "@mui/material";
import TextField from '@mui/material/TextField';
export const MyAccount = () => {

    return (
        <Box component="form" sx={{ paddingLeft: 3, '& .MuiTextField-root': { m: 1, width: '25ch' } }}
            noValidate
            autoComplete="off"
        >
            <Box sx={{
                display: 'flex',
                justifyContent: 'center', // Căn giữa theo chiều ngang
                alignItems: 'center',
            }}><h1>Tài khoản</h1></Box>
            <Box>
                <Box >
                    <Typography sx={{ paddingLeft: 1 }}>Mã số:</Typography>
                    <TextField
                        style={{ width: '500px', float: "left" }}
                        id="outlined-read-only-input"
                        defaultValue="PS24624"
                        InputProps={{
                            readOnly: true,
                        }}

                    />
                </Box>
                <Box>
                    <Typography sx={{ paddingLeft: 1 }}>Chuyên ngành:</Typography>
                    <TextField
                        style={{ width: '500px' }}
                        id="outlined-read-only-input"
                        defaultValue="Ứng dụng phần mềm"
                        InputProps={{
                            readOnly: true,
                        }}
                        className="rightTextField"
                    />
                </Box>
            </Box>
            <Box>
                <Typography sx={{ paddingLeft: 1 }}>Họ và tên:</Typography>
                <TextField
                    style={{ width: '500px' }}

                    id="outlined-read-only-input"
                    defaultValue="Lưu Đình Thiên Phúc"
                    InputProps={{
                        readOnly: true,
                    }}
                />
            </Box>
            <Box>
                <Typography sx={{ paddingLeft: 1 }}>Ngày sinh:</Typography>
                <TextField
                    id="outlined-read-only-input"
                    defaultValue="Hello World"
                    InputProps={{
                        readOnly: true,
                    }}
                />
            </Box>
            <Box>
                <Typography sx={{ paddingLeft: 1 }}>Gmail:</Typography>
                <TextField
                    style={{ width: '500px' }}
                    id="outlined-read-only-input"
                    defaultValue="phucldtps24624@fpt.edu.vn"
                    InputProps={{
                        readOnly: true,
                    }}
                />
            </Box>

            <Box>
                <Typography sx={{ paddingLeft: 1 }}>Số điện thoại:</Typography>
                <TextField
                    id="outlined-read-only-input"
                    defaultValue="123456789"
                    InputProps={{
                        readOnly: true,
                    }}
                />
            </Box>

        </Box >
    )
}
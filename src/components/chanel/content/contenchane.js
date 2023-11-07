import React, { useState } from 'react';
// import makeStyles from '@mui/styles/makeStyles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/material';

export const Contench = () => {
    const [showLimit, setShowLimit] = useState(10);
    // Dữ liệu mẫu cho bảng
    const products = [
        { id: 1, name: 'ASMGD1 Java 6', date: '01/11/2023', likes: 10, views: 100, approvalDate: '02/11/2023' },
        { id: 2, name: 'ASMGD1 Java 5', date: '02/11/2023', likes: 8, views: 50, approvalDate: '03/11/2023' },
        { id: 3, name: 'ASMGD2 Java 6', date: '01/11/2023', likes: 10, views: 100, approvalDate: '02/11/2023' },
        { id: 4, name: 'ASMGD2 Java 5', date: '02/11/2023', likes: 8, views: 50, approvalDate: '03/11/2023' },
        { id: 5, name: 'ASMFinal Java 6', date: '01/11/2023', likes: 10, views: 100, approvalDate: '02/11/2023' },
        { id: 6, name: 'ASMFinal Java 5', date: '02/11/2023', likes: 8, views: 50, approvalDate: '03/11/2023' },
        { id: 7, name: 'Lab 3 Java 5', date: '01/11/2023', likes: 10, views: 100, approvalDate: '02/11/2023' },
        { id: 8, name: 'Lab 4 java 5', date: '02/11/2023', likes: 8, views: 50, approvalDate: '03/11/2023' },
        { id: 9, name: 'Lab 6 java 6', date: '01/11/2023', likes: 10, views: 100, approvalDate: '02/11/2023' },
        { id: 10, name: 'Lab 3 java 6', date: '02/11/2023', likes: 8, views: 50, approvalDate: '03/11/2023' },
        { id: 11, name: 'ASM Java 6', date: '01/11/2023', likes: 10, views: 100, approvalDate: '02/11/2023' },
        { id: 12, name: 'ASM Java 5', date: '02/11/2023', likes: 8, views: 50, approvalDate: '03/11/2023' },

        // ...
    ];

    return (
        <Box sx={{ paddingTop: 10, width: '100%', paddingRight: 2 }}>
            <div><h1>Nội dung của bạn</h1></div>
            <TableContainer component={Paper}>
                <Table sx={{ border: '1px solid rgba(224, 224, 224, 1)', }} aria-label="Product Table">
                    <TableHead >
                        <TableRow>
                            <TableCell sx={{ border: '1px solid rgba(224, 224, 224, 1)', }}>Sản Phẩm</TableCell>
                            <TableCell sx={{ border: '1px solid rgba(224, 224, 224, 1)', }} align="center">Ngày</TableCell>
                            <TableCell sx={{ border: '1px solid rgba(224, 224, 224, 1)', }} align="center">Lượt thích</TableCell>
                            <TableCell sx={{ border: '1px solid rgba(224, 224, 224, 1)', }} align="center">Lượt xem</TableCell>
                            <TableCell sx={{ border: '1px solid rgba(224, 224, 224, 1)', }} align="center">Ngày duyệt</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.map((product) => (
                            <TableRow key={product.id}>
                                <TableCell sx={{ border: '1px solid rgba(224, 224, 224, 1)', }} component="th" scope="row">{product.name}</TableCell>
                                <TableCell sx={{ border: '1px solid rgba(224, 224, 224, 1)', }} align="center">{product.date}</TableCell>
                                <TableCell sx={{ border: '1px solid rgba(224, 224, 224, 1)', }} align="center">{product.likes}</TableCell>
                                <TableCell sx={{ border: '1px solid rgba(224, 224, 224, 1)', }} align="center">{product.views}</TableCell>
                                <TableCell sx={{ border: '1px solid rgba(224, 224, 224, 1)', }} align="center">{product.approvalDate}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <button onClick={() => setShowLimit(showLimit + 10)}>Xem thêm</button>
            </TableContainer>
        </Box>
    );
};


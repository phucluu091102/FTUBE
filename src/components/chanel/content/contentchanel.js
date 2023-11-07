import { Box } from "@mui/material";
import React from "react";
import {
    DataGridPro,
    GridColDef,
    GridRowsProp,
    GridColumnMenuContainer,
    GridColumnMenuSortItem,
    GridColumnMenuHideItem,
    GridColumnMenuColumnsItem,
    GridColumnMenuFilterItem,
    GridColumnMenuProps,
} from '@mui/x-data-grid-pro';
import {
    randomCreatedDate,
    randomTraderName,
    randomEmail,
    randomUpdatedDate,
} from '@mui/x-data-grid-generator';

const columns = [
    { field: 'sanpham', headerName: 'Sản Phẩm', width: 400, editable: true },
    {
        field: 'dateCreated',
        headerName: 'Ngày',
        type: 'date',
        width: 150,
        editable: true,
    },
    { field: 'like', headerName: 'Lượt thích', width: 100, type: 'number', editable: true },
    { field: 'xem', headerName: 'Lượt xem', width: 100, type: 'number', editable: true },
    {
        field: 'lastLogin',
        headerName: 'Ngày duyệt',
        type: 'dateTime',
        width: 220,
        editable: true,
    },
];

const rows = [
    {
        id: 1,
        sanpham: randomTraderName(),
        like: 123,
        xem: 25,
        dateCreated: randomCreatedDate(),
        lastLogin: randomUpdatedDate(),
    },
    {
        id: 2,
        sanpham: randomTraderName(),
        like: 123,
        xem: 36,
        dateCreated: randomCreatedDate(),
        lastLogin: randomUpdatedDate(),
    },
    {
        id: 3,
        sanpham: randomTraderName(),
        like: 123,
        xem: 19,
        dateCreated: randomCreatedDate(),
        lastLogin: randomUpdatedDate(),
    },
    {
        id: 4,
        sanpham: randomTraderName(),
        like: 123,
        xem: 28,
        dateCreated: randomCreatedDate(),
        lastLogin: randomUpdatedDate(),
    },
    {
        id: 5,
        sanpham: randomTraderName(),
        like: 123,
        xem: 23,
        dateCreated: randomCreatedDate(),
        lastLogin: randomUpdatedDate(),
    },
    {
        id: 6,
        sanpham: randomTraderName(),
        like: 123,
        xem: 23,
        dateCreated: randomCreatedDate(),
        lastLogin: randomUpdatedDate(),
    },
    {
        id: 7,
        sanpham: randomTraderName(),
        like: 123,
        xem: 23,
        dateCreated: randomCreatedDate(),
        lastLogin: randomUpdatedDate(),
    },
    {
        id: 8,
        sanpham: randomTraderName(),
        like: 123,
        xem: 23,
        dateCreated: randomCreatedDate(),
        lastLogin: randomUpdatedDate(),
    },
    {
        id: 9,
        sanpham: randomTraderName(),
        like: 123,
        xem: 23,
        dateCreated: randomCreatedDate(),
        lastLogin: randomUpdatedDate(),
    },
];
export function CustomColumnMenu(props) {
    const { hideMenu, colDef, color, ...other } = props;

    return (
        <GridColumnMenuContainer hideMenu={hideMenu} colDef={colDef} {...other}>
            <GridColumnMenuSortItem onClick={hideMenu} colDef={colDef} />
            <GridColumnMenuFilterItem onClick={hideMenu} colDef={colDef} />
            <GridColumnMenuHideItem onClick={hideMenu} colDef={colDef} />
            <GridColumnMenuColumnsItem onClick={hideMenu} colDef={colDef} />
        </GridColumnMenuContainer>
    );
}
export const Contentchanel = () => {
    return (
        <Box sx={{ paddingTop: 10, height: "100%", width: "100%" }}>
            <div>
                <h1>Nội dung của bạn</h1>
            </div>
            <Box sx={{ border: "1px solid black" }}>
                <div >
                    <DataGridPro
                        rows={rows}
                        columns={columns}
                        slots={{ columnMenu: CustomColumnMenu }}
                        initialState={{ pinnedColumns: { left: ['sanpham'], right: ['actions'] } }}

                    />
                </div>
            </Box>
        </Box>
    )
}
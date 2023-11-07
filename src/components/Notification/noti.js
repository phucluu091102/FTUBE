import React from "react";
import { useNavigate } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Notification() {
    const navigate = useNavigate();
    const [open, setOpen] = React.useState(true);

    const handleClose = () => {
        setOpen(false);
        // Chuyển hướng trang web đến trang khác sau khi đóng thông báo
        navigate("/proposed");
    };

    return (
        <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
            <Alert onClose={handleClose} severity="success">Thông báo thành công</Alert>
        </Snackbar>
    );
}
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { Typography, Box, Stack } from '@mui/material';
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import { motion } from "framer-motion";
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function ModalInfo({ open, onClose, conferencista }) {

    return (
        <React.Fragment>
            <Dialog
                open={open}
                slots={{
                    transition: Transition,
                }}
                keepMounted
                onClose={onClose}
                aria-describedby="alert-dialog-slide-description"
                PaperProps={{
                    sx: {
                        borderRadius: 4,
                        overflow: "hidden",
                        backdropFilter: "blur(10px)",
                    },
                }}
            >
                <DialogTitle sx={{ p: 0, position: "relative" }}>

                    {/* Botón cerrar */}
                    <IconButton
                        onClick={onClose}
                        sx={{
                            position: "absolute",
                            right: 12,
                            top: 12,
                            zIndex: 2,
                            background: "rgba(255,255,255,0.6)",
                            backdropFilter: "blur(6px)",
                            transition: "all 0.3s ease",
                            "&:hover": {
                                background: "rgba(255,255,255,0.9)",
                                transform: "scale(1.1) rotate(90deg)",
                            },
                        }}
                    >
                        <CloseIcon />
                    </IconButton>

                    {/* Header */}
                    <Box
                        component={motion.div}
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        sx={{
                            textAlign: "center",
                            p: 3,
                            background: "linear-gradient(135deg, rgba(101,166,48,0.95), rgba(101,166,48,0.8), rgba(60,120,30,0.9))",
                            color: "#fff",
                        }}
                    >

                        {/* Foto */}
                        <Box
                            component={motion.img}
                            src={conferencista.foto}
                            alt={conferencista.conferencista}
                            whileHover={{ scale: 1.1, rotate: 2 }}
                            transition={{ type: "spring", stiffness: 200 }}
                            sx={{
                                width: 120,
                                height: 120,
                                borderRadius: "50%",
                                objectFit: "cover",
                                mb: 2,
                                mx: "auto",
                                boxShadow: "0px 8px 25px rgba(0,0,0,0.3)",
                                border: "3px solid rgba(255,255,255,0.4)",
                            }}
                        />

                        {/* Nombre */}
                        <Typography variant="h6" fontWeight="bold">
                            {conferencista.conferencista}
                        </Typography>

                        {/* Puesto */}
                        <Typography variant="body1" sx={{ opacity: 0.9 }}>
                            {conferencista.puesto}
                        </Typography>

                        {/* Institución */}
                        <Typography variant="body2" sx={{ opacity: 0.8 }}>
                            {conferencista.institucion}
                        </Typography>

                        {/* País + bandera */}
                        <Stack
                            direction="row"
                            spacing={1}
                            justifyContent="center"
                            alignItems="center"
                            mt={1}
                        >
                            <Typography variant="body2">
                                {conferencista.pais}
                            </Typography>

                            {conferencista.bandera && (
                                <Box
                                    component={motion.img}
                                    src={`https://flagcdn.com/w40/${conferencista.bandera}.png`}
                                    alt="bandera"
                                    whileHover={{ scale: 1.2 }}
                                    sx={{
                                        width: 24,
                                        height: 16,
                                        borderRadius: "2px",
                                        boxShadow: 2,
                                    }}
                                />
                            )}
                        </Stack>
                    </Box>
                </DialogTitle>

                {/* Contenido */}
                <DialogContent
                    dividers
                    component={motion.div}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    sx={{
                        background: "rgba(101,166,48,0.05)",
                    }}
                >
                    <Typography
                        variant="body2"
                        sx={{
                            lineHeight: 1.7,
                            textAlign: "justify",
                            transition: "all 0.3s ease",
                            "&:hover": {
                                color: "rgba(101,166,48,1)",
                            },
                        }}
                    >
                        {conferencista.cv}
                    </Typography>
                </DialogContent>
            </Dialog>
        </React.Fragment>
    );
}
import { Box, Stack, Typography, Modal, Backdrop, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import React, { useState, useEffect } from "react";
const live_events_service = require('../../helpers/live_events_service')

const Conferencista = ({ speaker }) => {
    const [contador] = useState(0);
    const [conferencista, setConferencista] = useState({});
    const [openModal, setOpenModal] = useState(false);
    const [activeTab, setActiveTab] = useState("info"); // "info" o "cv"

    useEffect(() => {
        live_events_service
            .getData(
                "/conferencista/view/" +
                speaker
            )
            .then((response_conferencista) => {
                setConferencista(response_conferencista.data.response_database.result[0]);
            })
            .catch((error) => {
                console.log(error);
            });

    }, [contador]);

    const handleOpenModal = () => setOpenModal(true);
    const handleCloseModal = () => setOpenModal(false);

    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    py: 1.5,
                    px: 1,
                    borderRadius: 2,
                    transition: "all 0.25s ease",
                    "&:hover": {
                        bgcolor: "rgba(101,166,48,0.08)",
                        transform: "translateX(4px)",
                    },
                    borderBottom: "1px solid",
                    borderColor: "divider",
                }}
            >
                {/* FOTO CON HOVER EFFECT */}
                <Box
                    sx={{
                        position: "relative",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                    }}
                    onClick={handleOpenModal}
                >
                    <Box
                        component="img"
                        src={conferencista.foto_alt}
                        alt={conferencista.nombre}
                        sx={{
                            width: 102,
                            height: 102,
                            objectFit: "contain",
                            borderRadius: 1,
                            transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
                        }}
                    />

                    {/* OVERLAY CON ICONO Y TEXTO */}
                    <Box
                        sx={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: "rgba(101, 166, 48, 0.85)",
                            borderRadius: 1,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: 0.5,
                            opacity: 0,
                            transition: "opacity 0.3s ease",
                            cursor: "pointer",
                            backdropFilter: "blur(2px)",
                            "&:hover": {
                                opacity: 1,
                            },
                        }}
                    >
                        <ZoomInIcon
                            sx={{
                                color: "white",
                                fontSize: 28,
                                animation: "pulse 2s infinite",
                                "@keyframes pulse": {
                                    "0%, 100%": {
                                        transform: "scale(1)",
                                    },
                                    "50%": {
                                        transform: "scale(1.2)",
                                    },
                                },
                            }}
                        />
                        <Typography
                            sx={{
                                color: "white",
                                fontSize: "0.75rem",
                                fontWeight: 600,
                                textAlign: "center",
                                px: 1,
                                textTransform: "uppercase",
                                letterSpacing: "0.5px",
                            }}
                        >
                            Click para ver más
                        </Typography>
                    </Box>
                </Box>

                {/* INFO */}
                <Box sx={{ flex: 1 }}>
                    <Typography variant="body1" fontWeight="bold" sx={{ lineHeight: 1.2 }}>
                        {conferencista.nombre}
                    </Typography>

                    <Typography
                        variant="body1"
                        sx={{ color: "rgba(101,166,48,0.9)", fontWeight: 500 }}
                    >
                        {conferencista.puesto}
                    </Typography>

                    <Typography variant="body1" color="text.secondary">
                        {conferencista.institucion}
                    </Typography>
                    {
                        (conferencista.tipo == "MODERADOR" || conferencista.tipo == "MODERADORA") &&
                        <Typography variant="body1" color="text.secondary" style={{ fontWeight: "bold" }}>
                            {conferencista.tipo}
                        </Typography>}

                </Box>

                {/* PAÍS */}
                <Stack alignItems="center" spacing={0.5}>
                    <Box
                        component="img"
                        src={`https://flagcdn.com/w40/${conferencista.bandera}.png`}
                        alt={conferencista.pais}
                        sx={{
                            width: 22,
                            height: 16,
                            borderRadius: "2px",
                        }}
                    />
                    <Typography variant="body1" color="text.secondary">
                        {conferencista.pais}
                    </Typography>
                </Stack>
            </Box>

            {/* MODAL CON INFORMACIÓN EXPANDIDA */}
            <Modal
                open={openModal}
                onClose={handleCloseModal}
                BackdropComponent={Backdrop}
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    "& .MuiBackdrop-root": {
                        backgroundColor: "rgba(0, 0, 0, 0.6)",
                        backdropFilter: "blur(4px)",
                    },
                }}
            >
                <Box
                    sx={{
                        position: "relative",
                        maxWidth: {
                            xs: "95vw",
                            sm: "85vw",
                            md: "70vw",
                            lg: "60vw",
                        },
                        maxHeight: {
                            xs: "90vh",
                            sm: "85vh",
                            md: "80vh",
                        },
                        borderRadius: 3,
                        boxShadow: "0 20px 80px rgba(0, 0, 0, 0.4)",
                        backgroundColor: "white",
                        overflow: "scroll",
                        animation: "slideUp 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
                        "@keyframes slideUp": {
                            from: {
                                opacity: 0,
                                transform: "translateY(40px)",
                            },
                            to: {
                                opacity: 1,
                                transform: "translateY(0)",
                            },
                        },
                    }}
                >
                    {/* HEADER CON BOTÓN CERRAR */}
                    <Box
                        sx={{
                            position: "absolute",
                            top: 0,
                            right: 0,
                            zIndex: 10,
                            p: 1,
                        }}
                    >
                        <IconButton
                            onClick={handleCloseModal}
                            sx={{
                                backgroundColor: "rgba(0, 0, 0, 0.05)",
                                color: "text.primary",
                                "&:hover": {
                                    backgroundColor: "rgba(101, 166, 48, 0.15)",
                                    color: "rgba(101, 166, 48, 0.9)",
                                },
                                transition: "all 0.3s ease",
                            }}
                        >
                            <CloseIcon />
                        </IconButton>
                    </Box>

                    {/* CONTENEDOR PRINCIPAL */}
                    <Box
                        sx={{
                            display: {
                                xs: "flex",
                                md: "grid",
                            },
                            gridTemplateColumns: { md: "1fr 1fr" },
                            flexDirection: { xs: "column" },
                            gap: 0,
                            height: "100%",
                            overflowY: "auto",
                        }}
                    >
                        {/* COLUMNA IZQUIERDA - FOTO */}
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                padding: { xs: 2, md: 3 },
                                backgroundColor: "rgba(101, 166, 48, 0.05)",
                                minHeight: { xs: "auto", md: "500px" },
                            }}
                        >
                            <Box
                                component="img"
                                src={conferencista.foto_alt}
                                alt={conferencista.nombre}
                                sx={{
                                    width: "100%",
                                    height: "auto",
                                    maxHeight: {
                                        xs: "300px",
                                        md: "450px",
                                    },
                                    objectFit: "contain",
                                    borderRadius: 2,
                                }}
                            />
                        </Box>

                        {/* COLUMNA DERECHA - INFO Y CV */}
                        <Box
                            sx={{
                                padding: { xs: 2, md: 3 },
                                overflowY: "auto",
                                maxHeight: { xs: "auto", md: "500px" },
                            }}
                        >
                            {/* INFO DEL CONFERENCISTA */}
                            <Box sx={{ mb: 3 }}>
                                <Typography
                                    variant="h5"
                                    fontWeight="bold"
                                    sx={{
                                        lineHeight: 1.3,
                                        mb: 1,
                                        color: "text.primary",
                                    }}
                                >
                                    {conferencista.nombre}
                                </Typography>

                                <Typography
                                    variant="body1"
                                    sx={{
                                        color: "rgba(101, 166, 48, 0.9)",
                                        fontWeight: 600,
                                        mb: 0.5,
                                        fontSize: "1rem",
                                    }}
                                >
                                    {conferencista.puesto}
                                </Typography>

                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                    sx={{ mb: 1 }}
                                >
                                    {conferencista.institucion}
                                </Typography>

                                {(conferencista.tipo == "MODERADOR" || conferencista.tipo == "MODERADORA") && (
                                    <Box
                                        sx={{
                                            display: "inline-block",
                                            backgroundColor: "rgba(101, 166, 48, 0.15)",
                                            color: "rgba(101, 166, 48, 0.9)",
                                            px: 1.5,
                                            py: 0.5,
                                            borderRadius: 1,
                                            fontSize: "0.875rem",
                                            fontWeight: 600,
                                            mt: 1,
                                        }}
                                    >
                                        {conferencista.tipo}
                                    </Box>
                                )}

                                {/* PAÍS */}
                                <Stack direction="row" alignItems="center" spacing={1} sx={{ mt: 2 }}>
                                    <Box
                                        component="img"
                                        src={`https://flagcdn.com/w40/${conferencista.bandera}.png`}
                                        alt={conferencista.pais}
                                        sx={{
                                            width: 24,
                                            height: 18,
                                            borderRadius: "2px",
                                        }}
                                    />
                                    <Typography variant="body2" color="text.secondary">
                                        {conferencista.pais}
                                    </Typography>
                                </Stack>
                            </Box>

                            {/* TABS PARA INFO Y CV */}
                            <Box
                                sx={{
                                    display: "flex",
                                    gap: 1,
                                    mb: 2,
                                    borderBottom: "2px solid",
                                    borderColor: "divider",
                                }}
                            >
                                <Box
                                    onClick={() => setActiveTab("info")}
                                    sx={{
                                        padding: "10px 16px",
                                        cursor: "pointer",
                                        fontWeight: activeTab === "info" ? 600 : 500,
                                        color: activeTab === "info" ? "rgba(101, 166, 48, 0.9)" : "text.secondary",
                                        borderBottom: activeTab === "info" ? "3px solid" : "none",
                                        borderColor: activeTab === "info" ? "rgba(101, 166, 48, 0.9)" : "transparent",
                                        transition: "all 0.3s ease",
                                        "&:hover": {
                                            color: "rgba(101, 166, 48, 0.9)",
                                        },
                                    }}
                                >
                                    Información
                                </Box>
                                {conferencista.cv && (
                                    <Box
                                        onClick={() => setActiveTab("cv")}
                                        sx={{
                                            padding: "10px 16px",
                                            cursor: "pointer",
                                            fontWeight: activeTab === "cv" ? 600 : 500,
                                            color: activeTab === "cv" ? "rgba(101, 166, 48, 0.9)" : "text.secondary",
                                            borderBottom: activeTab === "cv" ? "3px solid" : "none",
                                            borderColor: activeTab === "cv" ? "rgba(101, 166, 48, 0.9)" : "transparent",
                                            transition: "all 0.3s ease",
                                            "&:hover": {
                                                color: "rgba(101, 166, 48, 0.9)",
                                            },
                                        }}
                                    >
                                        CV
                                    </Box>
                                )}
                            </Box>

                            {/* CONTENIDO DE LOS TABS */}
                            {activeTab === "info" && (
                                <Box sx={{ animation: "fadeIn 0.3s ease" }}>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                        sx={{
                                            lineHeight: 1.8,
                                            "@keyframes fadeIn": {
                                                from: { opacity: 0 },
                                                to: { opacity: 1 },
                                            },
                                        }}
                                    >
                                        {conferencista.puesto}

                                        <br />
                                        {conferencista.institucion}
                                    </Typography>
                                </Box>
                            )}

                            {activeTab === "cv" && conferencista.cv && (
                                <Box
                                    sx={{
                                        animation: "fadeIn 0.3s ease",
                                        "@keyframes fadeIn": {
                                            from: { opacity: 0 },
                                            to: { opacity: 1 },
                                        },
                                    }}
                                >
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                        sx={{
                                            lineHeight: 1.8,
                                            whiteSpace: "pre-wrap",
                                            wordBreak: "break-word",
                                            textAlign: "justify",
                                        }}
                                    >
                                        {conferencista.cv}
                                    </Typography>
                                </Box>
                            )}
                        </Box>
                    </Box>
                </Box>
            </Modal>
        </>
    )
}

export default Conferencista
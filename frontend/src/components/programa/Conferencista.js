import { Box, Grid, Stack, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
const live_events_service = require('../../helpers/live_events_service')

const Conferencista = ({ speaker }) => {
    const [contador] = useState(0);
    const [conferencista, setConferencista] = useState({});
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
    return (
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
            {/* FOTO */}
            <Box
                component="img"
                src={conferencista.foto_alt}
                alt={conferencista.nombre}
                sx={{
                    width: 102,
                    height: 102,
                    objectFit: "cover",
                }}
            />

            {/* INFO */}
            <Box sx={{ flex: 1 }}>
                <Typography fontWeight="bold" sx={{ lineHeight: 1.2 }}>
                    {conferencista.nombre}
                </Typography>

                <Typography
                    variant="body2"
                    sx={{ color: "rgba(101,166,48,0.9)", fontWeight: 500 }}
                >
                    {conferencista.puesto}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                    {conferencista.institucion}
                </Typography>
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
                <Typography variant="caption" color="text.secondary">
                    {conferencista.pais}
                </Typography>
            </Stack>
        </Box>
    )
}

export default Conferencista
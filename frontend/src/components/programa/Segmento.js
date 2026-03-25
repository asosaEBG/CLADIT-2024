import { Box, Stack, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Conferencista from './Conferencista';

const Segmento = ({ segmento }) => {
    const primary = "rgba(101,166,48,1)";
    const light = "rgba(101,166,48,0.1)";
    const formatHour = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleTimeString("es-GT", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
        });
    };
    return (
        <Box>
            <Stack>
                <Stack direction="row" alignItems="center">
                    <AccessTimeIcon sx={{ fontSize: 18, color: primary }} />
                    <Typography variant="body2" color="text.secondary">
                        {formatHour(segmento.master[1])} - {formatHour(segmento.master[2])}
                    </Typography>
                </Stack>
                <Typography variant="body1" color="text.primary" fontWeight="bold">
                    {segmento.master[0]}
                </Typography>
                {segmento.detail && segmento.detail.map((item, i) => (
                    <Conferencista speaker={item} key={i} />
                ))}
            </Stack>
        </Box>
    )
}

export default Segmento
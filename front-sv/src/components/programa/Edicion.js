import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import Segmentacion from './Segmentacion';
const primary = "rgba(101,166,48,1)";
const light = "rgba(101,166,48,0.1)";
const Edicion = ({ config, programa }) => {
    return (
        <Stack spacing={2}>
            {config.title && <Typography variant="h3" fontWeight="bold" sx={{ color: primary }}>
                {config.title}
            </Typography>
            }
            {
                config.title && <Box sx={{ width: 80, height: 4, background: primary, my: 2 }} />
            }
            {config.segments.map((segment, i) => (
                <Box key={i} sx={{ p: 2 }}>
                    {segment.title && <Box style={{ background: light }} p={3}>
                        <Typography color={primary} variant="h4" fontWeight="bold" textAlign='center'>
                            {segment.title}
                        </Typography>
                    </Box>}
                    <Stack spacing={2} mt={2}>
                        <Segmentacion begin={segment.begin} end={segment.end} programa={programa} />
                    </Stack>
                </Box>
            ))
            }
        </Stack >
    )
}

export default Edicion  
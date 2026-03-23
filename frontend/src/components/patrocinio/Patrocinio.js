import React from 'react'
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import { Stack } from '@mui/material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
const Patrocinio = () => {
    return (
        <Stack>
            <Breadcrumbs aria-label="breadcrumb">
                <Link
                    underline="hover"
                    sx={{ display: 'flex', alignItems: 'center' }}
                    color="inherit"
                    href="/"
                >
                    <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                    Inicio
                </Link>

                <Typography
                    sx={{ color: 'text.primary', display: 'flex', alignItems: 'center' }}
                >
                    <AttachMoneyIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                    Patrocinio
                </Typography>
            </Breadcrumbs>
        </Stack>
    )
}

export default Patrocinio
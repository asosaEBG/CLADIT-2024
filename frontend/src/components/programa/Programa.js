import React, { useState, useEffect } from "react";
import {
    Box,
    Typography,
    Stack,
    Breadcrumbs,
    Tabs,
    Tab,
    Backdrop,
    CircularProgress
} from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import ScheduleIcon from '@mui/icons-material/Schedule';
import Dia from "./Dia";
import PropTypes from 'prop-types';
const live_events_service = require('../../helpers/live_events_service')

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
            style={{ width: '100%' }}
        >
            {value === index && <Box sx={{ paddingLeft: { xs: '0%', md: '5%', lg: '10%' }, paddingRight: { xs: '0%', md: '5%', lg: '10%' } }} >{children}</Box>}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}
export default function Programa() {
    const [contador] = useState(0);
    const [programa, setPrograma] = useState([]);
    const [value, setValue] = React.useState(0);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        live_events_service
            .getData(
                "/programa/view/" +
                process.env.REACT_APP_EVT
            )
            .then((response_programa) => {
                setLoading(false)
                setPrograma(response_programa.data.response_database.programa.speakers);
            })
            .catch((error) => {
                console.log(error);
            });

    }, [contador]);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const dia_1 = {
        morning:
        {
            title: "Talleres simultáneos CLADIT", segments: [
                { title: "Sector Bancario (Talleres simultáneos)", begin: 1, end: 3 },
                { title: "Sector Cooperativas (Talleres simultáneos)", begin: 4, end: 8 },
                { title: "Todos los sectores y Nuevas Personas Obligadas (Talleres simultáneos)", begin: 9, end: 12 },
            ]
        },
        afternoon: {
            title: null, segments: [
                { title: null, begin: 13, end: 19 },
            ]
        }
    }
    const dia2 = {
        morning:
        {
            title: null, segments: [
                { title: null, begin: 20, end: 27 },
            ]
        },
        afternoon: {
            title: null, segments: [
                { title: null, begin: 28, end: 33 },
            ]
        }
    }
    return (
        <Stack spacing={5} alignItems='center' style={{ background: "#f5f7f6", width: '100%' }} pt={3}>
            <Backdrop
                sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={loading}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
            <Breadcrumbs aria-label="breadcrumb">
                <Link
                    underline="hover"
                    sx={{ display: 'flex', alignItems: 'center' }}
                    color="inherit"
                    to="/"
                >
                    <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                    Inicio
                </Link>
                <Typography
                    sx={{ color: 'text.primary', display: 'flex', alignItems: 'center' }}
                >
                    <ScheduleIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                    Programa
                </Typography>
            </Breadcrumbs>
            <Box sx={{ width: '100%' }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    sx={{
                        '& .MuiTabs-indicator': {
                            backgroundColor: 'rgba(101,166,48,1)',
                        },
                        '& .Mui-selected': {
                            color: 'rgba(101,166,48,1) !important',
                        },
                    }}
                    centered
                >
                    <Tab  {...a11yProps(0)} label="Día 1" />
                    <Tab  {...a11yProps(1)} label="Día 2" />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <Dia config={dia_1} programa={programa} />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <Dia config={dia2} programa={programa} />
            </CustomTabPanel>
        </Stack>
    );
}
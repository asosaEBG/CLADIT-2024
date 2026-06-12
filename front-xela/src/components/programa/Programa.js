import React, { useState, useEffect } from "react";
import {
    Box,
    Typography,
    Stack,
    Breadcrumbs,
    Tabs,
    Tab,
    Backdrop,
    CircularProgress,
    Chip,
} from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import ScheduleIcon from '@mui/icons-material/Schedule';
import MicIcon from '@mui/icons-material/Mic';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import StarIcon from '@mui/icons-material/Star';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import PersonIcon from '@mui/icons-material/Person';
import fondoPrograma from '../../assets/fondo-programa.jpg';
import Dia from "./Dia";
import PropTypes from 'prop-types';
const live_events_service = require('../../helpers/live_events_service')

const AGENDA = [
    {
        time: "07:00 – 08:00",
        title: "Registro de participantes",
        type: "break",
        axis: "Networking",
    },
    {
        time: "08:00 – 08:15",
        title: "Palabras de bienvenida e inauguración",
        type: "apertura",
        speaker: "Diana Velásquez · Sub-Gerente de Educación Bancaria y Financiera, Asociación Bancaria de Guatemala",
    },
    {
        time: "08:15 – 09:00",
        title: "Sectores y Profesionales que entran bajo supervisión, Guía práctica para sujetos obligados",
        type: "conferencia",
        code: "Conf. 1.1",
        speaker: "Susan Paola Rojas · Ex-Intendente IVE, Fundadora de Evalua Compliance, Facilitadora EBG",
        axis: "Enfoque Basado en Riesgos",
    },
    {
        time: "09:00 – 10:00",
        title: "El rol estratégico del oficial de cumplimiento",
        type: "conferencia",
        code: "Keynote Speaker",
        speaker: "Juan Pablo Rodríguez · Socio, RICS Management — COLOMBIA",
        axis: "Cumplimiento",
    },
    {
        time: "10:00 – 10:30",
        title: "Coffee break y networking",
        type: "break",
        axis: "Networking",
    },
    {
        time: "10:30 – 12:30",
        parallel: [
            {
                title: "El rol de la Inteligencia Artificial en la prevención del LD/FT: principales casos de uso en la detección y mitigación de riesgos",
                type: "taller",
                code: "Taller 1",
                speaker: "Eliecer Alberto Castillo · CCO Banco de Occidente (Panamá) / Sheily Lia Muñoz · Docente EBG",
                axis: "Tecnología",
            },
            {
                title: "Monitoreo transaccional basado en un enfoque de riesgo",
                type: "taller",
                code: "Taller 2",
                speaker: "Rafael Tul Velásquez · Consultor Independiente, Facilitador EBG",
                axis: "Enfoque Basado en Riesgos",
            },
        ],
    },
    {
        time: "12:30 – 14:00",
        title: "Almuerzo y networking",
        type: "almuerzo",
        axis: "Networking",
    },
    {
        time: "14:00 – 14:45",
        title: "El futuro de las remesas bajo un nuevo entorno regulatorio: tecnología y cumplimiento frente a la Orden Ejecutiva 14406 «Restoring Integrity to America's Financial System»",
        type: "conferencia",
        code: "Conf. 1.2",
        speaker: "Representante BANRURAL — GUATEMALA",
        axis: "Cumplimiento",
    },
    {
        time: "14:45 – 15:30",
        title: "Conversatorio: Gobernanza corporativa y cultura de cumplimiento",
        type: "conversatorio",
        speaker: "Ricardo Estrada · Consultant Lecture, Frankfurt School of Finance & Management — GUATEMALA",
        axis: "Cumplimiento",
    },
    {
        time: "15:30 – 16:15",
        title: "Debida diligencia del cliente (KYC) bajo un enfoque basado en riesgo y beneficiario final",
        type: "conferencia",
        code: "Conf. 1.3",
        speaker: "Alfredo Calvo · Director General, Credit Insights Advisory — MÉXICO",
        axis: "Cumplimiento",
    },
    {
        time: "16:15 – 17:00",
        title: "Buenas Prácticas para el Envío Efectivo de un RTS a través del Portal de Personas Obligadas",
        type: "conferencia",
        code: "Conf. 1.4",
        speaker: "Representante, Intendencia de Verificación Especial-IVE — GUATEMALA",
        axis: "Cumplimiento",
    },
    {
        time: "17:00 – 17:45",
        title: "Panel: Cooperación internacional en la lucha contra el lavado de dinero y el financiamiento del terrorismo",
        type: "panel",
        speaker: "Juan Pablo Rodríguez (COLOMBIA) · Alfredo Calvo (MÉXICO) · Eliecer Alberto Castillo (PANAMÁ)",
        moderator: "Alejandro Arriola · Abogado y Notario, Socio IBR Law & Consulting, Facilitador EBG",
        axis: "Cumplimiento",
    },
    {
        time: "17:45 – 18:00",
        title: "Conclusiones y coffee break",
        type: "break",
        speaker: "Jesús de León — GUATEMALA",
        axis: "Networking",
    },
];

const G = {
    dark:   "#1b3d08",
    mid:    "#2e6b0e",
    brand:  "#65a630",
    light:  "#8bc34a",
    pale:   "#c5e1a5",
    xlight: "#f1f8e9",
};

const TYPE_CONFIG = {
    apertura:      { color: G.dark,  label: "Apertura",       Icon: StarIcon },
    conferencia:   { color: G.brand, label: "Conferencia",    Icon: MicIcon },
    taller:        { color: G.mid,   label: "Taller",          Icon: FlashOnIcon },
    panel:         { color: G.light, label: "Panel",           Icon: PeopleAltIcon },
    conversatorio: { color: "#3a7a18", label: "Conversatorio", Icon: RecordVoiceOverIcon },
    break:         { color: G.light, label: "Networking",      Icon: LocalCafeIcon },
    almuerzo:      { color: G.light, label: "Almuerzo",        Icon: RestaurantIcon },
};

const AXIS_CONFIG = {
    "Enfoque Basado en Riesgos": { color: G.dark,  bg: "rgba(27,61,8,0.08)"   },
    "Cumplimiento":               { color: G.brand, bg: "rgba(101,166,48,0.1)" },
    "Tecnología":                 { color: G.mid,   bg: "rgba(46,107,14,0.09)" },
    "Networking":                 { color: G.light, bg: "rgba(139,195,74,0.12)"},
};

function SessionCard({ session, index }) {
    const isRelax = session.type === "break" || session.type === "almuerzo";
    const cfg = TYPE_CONFIG[session.type] || TYPE_CONFIG.conferencia;

    return (
        <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.4, delay: index * 0.035 }}
            style={{ width: "100%" }}
        >
            <Box
                sx={{
                    borderRadius: "10px",
                    background: isRelax
                        ? `linear-gradient(135deg, ${cfg.color}18, ${cfg.color}08)`
                        : "rgba(255,255,255,0.72)",
                    backdropFilter: "blur(6px)",
                    border: `1px solid ${cfg.color}35`,
                    borderLeft: `3px solid ${cfg.color}`,
                    p: { xs: 1.5, md: 2 },
                    transition: "transform 0.2s ease, box-shadow 0.2s ease",
                    "&:hover": {
                        transform: "translateX(5px)",
                        boxShadow: `0 6px 20px ${cfg.color}28`,
                    },
                }}
            >
                <Stack direction="row" flexWrap="wrap" gap={0.6} sx={{ mb: 0.8 }}>
                    <Chip
                        icon={<cfg.Icon style={{ fontSize: 12, color: "#fff" }} />}
                        label={session.code || cfg.label}
                        size="small"
                        sx={{
                            background: cfg.color,
                            color: "#fff",
                            fontWeight: 700,
                            fontSize: "0.62rem",
                            height: 20,
                        }}
                    />
                    {session.axis && AXIS_CONFIG[session.axis] && (
                        <Chip
                            label={session.axis}
                            size="small"
                            sx={{
                                background: AXIS_CONFIG[session.axis].bg,
                                color: AXIS_CONFIG[session.axis].color,
                                border: `1px solid ${AXIS_CONFIG[session.axis].color}50`,
                                fontSize: "0.58rem",
                                height: 20,
                                fontWeight: 600,
                            }}
                        />
                    )}
                </Stack>

                <Typography
                    sx={{
                        color: G.dark,
                        fontWeight: isRelax ? 500 : 700,
                        fontSize: { xs: "0.82rem", md: "0.9rem" },
                        lineHeight: 1.35,
                        mb: session.speaker ? 0.5 : 0,
                    }}
                >
                    {session.title}
                </Typography>

                {session.speaker && (
                    <Stack direction="row" spacing={0.5} alignItems="center">
                        <PersonIcon sx={{ fontSize: "0.7rem", color: G.mid }} />
                        <Typography variant="caption" sx={{ color: G.mid, fontSize: "0.68rem" }}>
                            {session.speaker}
                        </Typography>
                    </Stack>
                )}

                {session.moderator && (
                    <Stack direction="row" spacing={0.5} alignItems="center" sx={{ mt: 0.3 }}>
                        <RecordVoiceOverIcon sx={{ fontSize: "0.7rem", color: G.brand }} />
                        <Typography variant="caption" sx={{ color: G.mid, fontSize: "0.68rem", fontStyle: "italic" }}>
                            Moderador: {session.moderator}
                        </Typography>
                    </Stack>
                )}
            </Box>
        </motion.div>
    );
}

function TimelineRow({ item, index }) {
    const dotColor = item.parallel
        ? G.mid
        : TYPE_CONFIG[item.type]?.color || G.brand;

    return (
        <Box sx={{ display: "flex", gap: { xs: "8px", md: "14px" }, alignItems: "stretch", mb: "2px" }}>
            {/* Time column */}
            <Box
                sx={{
                    minWidth: { xs: "62px", md: "84px" },
                    pt: "13px",
                    flexShrink: 0,
                    textAlign: "right",
                }}
            >
                <Typography
                    sx={{
                        color: G.mid,
                        fontWeight: 700,
                        fontSize: { xs: "0.58rem", md: "0.68rem" },
                        fontFamily: "monospace",
                        lineHeight: 1.25,
                    }}
                >
                    {item.time.split("–")[0].trim()}
                    <br />
                    <Box component="span" sx={{ color: G.pale }}>
                        {item.time.split("–")[1]?.trim()}
                    </Box>
                </Typography>
            </Box>

            {/* Dot + line */}
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0, width: 12 }}>
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.04 + 0.1, type: "spring", stiffness: 280 }}
                >
                    <Box
                        sx={{
                            mt: "14px",
                            width: 10,
                            height: 10,
                            borderRadius: "50%",
                            background: dotColor,
                            boxShadow: `0 0 7px ${dotColor}bb`,
                        }}
                    />
                </motion.div>
                <Box
                    sx={{
                        width: "1px",
                        flexGrow: 1,
                        mt: "3px",
                        background: `linear-gradient(180deg, ${G.pale} 0%, ${G.xlight} 100%)`,
                    }}
                />
            </Box>

            {/* Content */}
            <Box sx={{ flexGrow: 1, pt: "5px", pb: "14px" }}>
                {item.parallel ? (
                    <Box>
                        <Typography
                            sx={{
                                color: G.mid,
                                fontWeight: 700,
                                letterSpacing: "0.09em",
                                textTransform: "uppercase",
                                fontSize: "0.58rem",
                                mb: 0.8,
                            }}
                        >
                            Sesiones Paralelas
                        </Typography>
                        <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5}>
                            {item.parallel.map((s, si) => (
                                <Box key={si} sx={{ flex: 1 }}>
                                    <SessionCard session={s} index={index + si * 0.18} />
                                </Box>
                            ))}
                        </Stack>
                    </Box>
                ) : (
                    <SessionCard session={item} index={index} />
                )}
            </Box>
        </Box>
    );
}

function ProgramaPreliminar() {
    return (
        <Box
            sx={{
                width: "100%",
                minHeight: "100vh",
                backgroundImage: `url(${fondoPrograma})`,
                backgroundSize: "cover",
                backgroundPosition: "center top",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "fixed",
                pt: { xs: 3, md: 5 },
                pb: 8,
                position: "relative",
                "&::before": {
                    content: '""',
                    position: "absolute",
                    inset: 0,
                    background: "rgba(241,248,233,0.82)",
                    zIndex: 0,
                },
            }}
        >
        <Box sx={{ position: "relative", zIndex: 1 }}>
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: -22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65 }}
            >
                <Box sx={{ textAlign: "center", px: { xs: 2, md: 4 }, mb: { xs: 4, md: 5 } }}>
                    {/* PRELIMINAR badge */}
                    <Box
                        sx={{
                            display: "inline-block",
                            background: `linear-gradient(90deg, ${G.dark}, ${G.mid}, ${G.brand}, ${G.mid}, ${G.dark})`,
                            backgroundSize: "300% 100%",
                            animation: "badgeShimmer 4s linear infinite",
                            "@keyframes badgeShimmer": {
                                "0%": { backgroundPosition: "0% 50%" },
                                "100%": { backgroundPosition: "300% 50%" },
                            },
                            borderRadius: "22px",
                            px: 2.5,
                            py: 0.5,
                            mb: 2.5,
                        }}
                    >
                        <Typography
                            sx={{
                                color: "#fff",
                                fontWeight: 900,
                                fontSize: "0.68rem",
                                letterSpacing: "0.16em",
                                textTransform: "uppercase",
                            }}
                        >
                            Programa Académico Oficial
                        </Typography>
                    </Box>

                    <Typography
                        sx={{
                            color: G.dark,
                            fontWeight: 900,
                            letterSpacing: "-0.03em",
                            lineHeight: 0.92,
                            mb: 1.5,
                            fontSize: { xs: "2.6rem", sm: "3.5rem", md: "4.5rem" },
                        }}
                    >
                        CLADIT{" "}
                        <Box
                            component="span"
                            sx={{
                                color: G.brand,
                                textShadow: `0 0 30px ${G.pale}`,
                            }}
                        >
                            XELA
                        </Box>{" "}
                        2026
                    </Typography>

                    <Typography
                        sx={{
                            color: G.mid,
                            fontStyle: "italic",
                            fontSize: { xs: "0.82rem", md: "0.95rem" },
                            mb: 2.5,
                            maxWidth: 520,
                            mx: "auto",
                        }}
                    >
                        "Retos, Regulación y Tecnología"
                    </Typography>

                    <Chip
                        icon={<ScheduleIcon style={{ color: G.brand }} />}
                        label="Lunes 10 de Agosto, 2026"
                        sx={{
                            background: `rgba(101,166,48,0.12)`,
                            color: G.dark,
                            border: `1px solid ${G.brand}55`,
                            fontWeight: 600,
                            fontSize: "0.78rem",
                            mb: 2.5,
                        }}
                    />

                    {/* Axis legend */}
                    <Stack direction="row" justifyContent="center" flexWrap="wrap" gap={0.8}>
                        {Object.entries(AXIS_CONFIG).map(([axis, cfg]) => (
                            <Chip
                                key={axis}
                                label={axis}
                                size="small"
                                sx={{
                                    background: cfg.bg,
                                    color: cfg.color,
                                    border: `1px solid ${cfg.color}45`,
                                    fontSize: "0.62rem",
                                }}
                            />
                        ))}
                    </Stack>

                    {/* Glowing divider */}
                    <Box
                        sx={{
                            mt: 4,
                            height: "1px",
                            background: `linear-gradient(90deg, transparent, ${G.brand}, ${G.pale}, ${G.brand}, transparent)`,
                        }}
                    />
                </Box>
            </motion.div>

            {/* Timeline */}
            <Box sx={{ px: { xs: 1.5, sm: 2.5, md: "6%", lg: "12%" } }}>
                {AGENDA.map((item, i) => (
                    <TimelineRow key={i} item={item} index={i} />
                ))}
            </Box>

            {/* Footer disclaimer */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
            >
                <Box
                    sx={{
                        mt: 5,
                        mx: { xs: 1.5, sm: 2.5, md: "6%", lg: "12%" },
                        pt: 2.5,
                        borderTop: `1px solid ${G.pale}`,
                        textAlign: "center",
                    }}
                >
                    <Typography
                        variant="caption"
                        sx={{ color: G.mid, fontStyle: "italic", fontSize: "0.7rem" }}
                    >
                        Centro de Convenciones Gran Karmel · Lunes 10 de agosto, 2026
                    </Typography>
                </Box>
            </motion.div>
        </Box>
        </Box>
    );
}

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
    const [noPrograma, setNoPrograma] = useState(true);
    useEffect(() => {
        live_events_service
            .getData(
                "/programa/view/" +
                process.env.REACT_APP_EVT
            )
            .then((response_programa) => {
                setNoPrograma(response_programa.data.response_database == undefined)
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
                { title: "Sector Bancario - Centro de Convenciones (Talleres simultáneos)", begin: 1, end: 3 },
                { title: "Sector Cooperativas - Salón Izabal / Atitlán (Talleres simultáneos)", begin: 4, end: 6 },
                { title: "Todos los sectores y Nuevas Personas Obligadas - Salón Petén Itzá (Talleres simultáneos)", begin: 7, end: 9 },
            ]
        },
        afternoon: {
            title: null, segments: [
                { title: null, begin: 10, end: 16 },
            ]
        }
    }
    const dia2 = {
        morning:
        {
            title: null, segments: [
                { title: null, begin: 17, end: 24 },
            ]
        },
        afternoon: {
            title: null, segments: [
                { title: null, begin: 25, end: 30 },
            ]
        }
    }
    return (
        <Box style={{ backgroundImage: "url('https://escuela-bancaria.s3.us-east-2.amazonaws.com/e9f84203-6749-4522-8de4-ea87bce35801.png')", width: '100%', backgroundPosition: 'top', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', minHeight: '100vh' }}>

            {!noPrograma ? (
                <Stack spacing={5} alignItems='center' pt={3}>
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
                </Stack>) : <ProgramaPreliminar />
            }

        </Box>
    );
}

import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import { Button, Stack } from '@mui/material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import Reel from '../tools/Reel';
import React, { useState, useEffect } from "react";
import {
    Box,
    Container,
    Grid,
    Card,
    CardContent,
    Tabs,
    Tab,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Chip,
    Backdrop,
    CircularProgress
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { motion } from "framer-motion";
import FilePreview from '../tools/FilePreview';
const live_events_service = require('../../helpers/live_events_service')

const MotionCard = motion(Card);

const primary = "rgba(101,166,48,1)";
const light = "rgba(101,166,48,0.1)";

const levels = {
    diamante: {
        name: "Diamante",
        price: {
            gt: "$9,000",
            sv: "$3,500",
            hn: "$3,500",
        },
        benefits: [
            "Conferencia destacada (30-40 min)",
            "Taller pre-congreso exclusivo (2 horas)",
            "Producción de video + pauta en redes EBG",
            "Email marketing a base de datos ABG-EBG",
            "Stand premium + networking",
            "Spot publicitario en salón",
            "Acceso a base de datos de participantes",
            "Sala VIP de negocios (solo GT)",
        ],
    },

    platino: {
        name: "Platino",
        price: {
            gt: "$5,000",
            sv: "$2,800",
            hn: "$2,800",
        },
        benefits: [
            "Presencia de marca digital",
            "Stand en expo",
            "Networking",
            "Participación en actividades del evento",
        ],
    },
    oro: {
        name: "Oro",
        price: {
            gt: "$7,000",
            sv: "$2,800",
            hn: "$2,800",
        },
        benefits: [
            "Presencia de marca en evento",
            "Stand en área de exposición",
            "Acceso a networking",
            "Branding en pantallas",
            "Base de datos de participantes",
            "Participaciones de cortesía",
        ],
    },
};

const extras = [
    {
        title: "Cóctel de Bienvenida / Cena Privada",
        price: "$15,000",
        desc: "Incluye branding completo, bebidas, música en vivo y experiencia VIP (30 pax).",
    },
    {
        title: "Almuerzo Patrocinado",
        price: "$13,000",
        desc: "Incluye presentación especial del patrocinador y experiencia gastronómica.",
    },
    {
        title: "Coffee Breaks",
        price: "$12,000",
        desc: "Islas de servicio con branding + souvenir para asistentes.",
    },
    {
        title: "Carpetas Oficiales",
        price: "$15,000",
        desc: "400 carpetas con logotipo de la empresa patrocinadora.",
    },
    {
        title: "Maletines Oficiales",
        price: "$15,000",
        desc: "400 maletines personalizados con branding.",
    },
    {
        title: "Cintas de Gafetes",
        price: "$7,500",
        desc: "Branding exclusivo en gafetes del evento.",
    },
];

const Patrocinio = () => {
    const [tab, setTab] = useState("diamante");
    const [contador] = useState(0);
    const [loading, setLoading] = useState(true);
    const [url, setUrl] = useState("");
    useEffect(() => {
        live_events_service
            .getData("/evento/view-by-hash/" + process.env.REACT_APP_EVT)
            .then((response_evt) => {
                live_events_service
                    .getData(
                        "/patrocinador/view-by-evento/" +
                        process.env.REACT_APP_EVT
                    )
                    .then((response_patrocinador) => {
                        live_events_service
                            .getData(`/conferencista/read/${process.env.REACT_APP_EVT}`)
                            .then((response) => {
                                setUrl(response_evt.data.response_database.result[0].planos);
                                setLoading(false)
                            })
                            .catch((error) => {
                                console.log(error);
                            });
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            })
            .catch((error) => {
                console.log(error);
            });
    }, [contador]);
    return (
        <Stack
            spacing={5}
            alignItems="center"
            sx={{
                background: '#f5f7f6',
                width: '100%',
                overflowX: 'hidden',
            }}
            pt={3}
        >
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
            <Reel />
            <Box sx={{ py: 10 }}>
                <Container>

                    {/* HEADER */}
                    <Typography variant="h4" fontWeight="bold" sx={{ color: primary }}>
                        PATROCINIOS CLADIT 2026
                    </Typography>

                    <Typography sx={{ mt: 2, mb: 6, color: "text.secondary" }}>
                        Conecta con líderes del sector financiero, posiciona tu marca y genera oportunidades reales de negocio en el evento más importante de prevención de lavado de dinero en Centroamérica.
                    </Typography>

                    {/* TABS */}
                    <Tabs
                        value={tab}
                        onChange={(e, val) => setTab(val)}
                        sx={{ mb: 5 }}
                        textColor="inherit"
                        indicatorColor="primary"

                    >
                        {Object.keys(levels).map((key) => (
                            <Tab
                                key={key}
                                value={key}
                                label={levels[key].name}
                                sx={{
                                    fontWeight: "bold",
                                    color: primary,
                                }}
                            />
                        ))}
                    </Tabs>

                    {/* NIVEL CARD */}
                    <MotionCard
                        key={tab}
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        sx={{ borderRadius: 4, p: 4 }}
                    >
                        <Typography variant="h5" fontWeight="bold">
                            Nivel {levels[tab].name}
                        </Typography>

                        <Box mt={2} mb={3}>
                            <Chip label={`Guatemala`} sx={{ mr: 1 }} />
                            <Chip label={`El Salvador`} sx={{ mr: 1 }} />
                            <Chip label={`Honduras`} />
                        </Box>

                        <List>
                            {levels[tab].benefits.map((b, i) => (
                                <ListItem key={i}>
                                    <ListItemIcon>
                                        <CheckCircleIcon sx={{ color: primary }} />
                                    </ListItemIcon>
                                    <ListItemText primary={b} />
                                </ListItem>
                            ))}
                        </List>
                    </MotionCard>
                    <FilePreview url='https://escuela-bancaria.s3.us-east-2.amazonaws.com/eb15e24b-0529-4cc3-abd6-2814fee6aa5c.jpeg' />

                    <FilePreview url={url} />
                    {/* BENEFICIOS GENERALES */}
                    <Box mt={10}>
                        <Typography variant="h5" fontWeight="bold" sx={{ color: primary, mb: 4 }}>
                            BENEFICIOS GENERALES
                        </Typography>

                        <Grid container spacing={3}>
                            {[
                                "Posicionamiento de marca regional",
                                "Acceso a +500 participantes",
                                "Networking estratégico",
                                "Exposición en medios digitales",
                                "Participación en conferencias y actividades",
                            ].map((item, i) => (
                                <Grid item xs={12} md={4} key={i}>
                                    <Card sx={{ p: 3, borderRadius: 4 }}>
                                        <Typography>{item}</Typography>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>

                    {/* EXTRAS PREMIUM */}
                    <Box mt={10}>
                        <Typography variant="h5" fontWeight="bold" sx={{ color: primary, mb: 4 }}>
                            EXPERIENCIAS PREMIUM
                        </Typography>

                        <Grid container spacing={4}>
                            {extras.map((item, i) => (
                                <Grid item xs={12} md={6} key={i}>
                                    <MotionCard
                                        whileHover={{ scale: 1.03 }}
                                        sx={{ borderRadius: 4, p: 3 }}
                                    >
                                        <CardContent>
                                            <Typography variant="h6" fontWeight="bold">
                                                {item.title}
                                            </Typography>


                                            <Typography variant="body2" color="text.secondary" mt={1}>
                                                {item.desc}
                                            </Typography>
                                        </CardContent>
                                    </MotionCard>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>

                    {/* CTA */}
                    <Box mt={10} textAlign="center">
                        <Typography variant="h5" fontWeight="bold">
                            ¿Listo para posicionar tu marca?
                        </Typography>

                        <Typography color="text.secondary" mt={1}>
                            Conviértete en patrocinador y conecta con los líderes del sector financiero.
                        </Typography>

                        <Box>
                            <Button
                                href="mailto:ncuches@ebg.edu.gt?subject=Interés%20en%20Patrocinio%20CLADIT%202026&body=Hola%20equipo%20EBG,%0A%0AEstoy%20interesado(a)%20en%20convertirme%20en%20patrocinador%20del%20CLADIT%202026.%20Me%20gustaría%20recibir%20más%20información%20sobre%20los%20niveles%20de%20patrocinio,%20beneficios%20y%20disponibilidad.%0A%0AEmpresa:%20%0ANombre:%20%0ACargo:%20%0ATeléfono:%20%0APaís:%20%0A%0AQuedo%20atento(a)%20a%20su%20respuesta.%0A%0ASaludos."
                                variant="contained"
                                sx={{
                                    mt: 3,
                                    display: "inline-block",
                                    px: 5,
                                    py: 2,
                                    background: primary,
                                    color: "#fff",
                                    borderRadius: 3,
                                    cursor: "pointer",
                                    fontWeight: "bold",
                                    transition: "0.3s",
                                    "&:hover": {
                                        transform: "scale(1.05)",
                                    },
                                }}
                            >
                                Quiero ser patrocinador
                            </Button>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </Stack>
    )
}

export default Patrocinio
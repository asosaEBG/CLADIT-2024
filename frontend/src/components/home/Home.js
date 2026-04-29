import React, { useEffect, useState, useRef } from "react";
import {
    Stack,
    Box,
    Button,
    Typography,
    Grid,
    ImageList,
    ImageListItem,
    Divider,
    ImageListItemBar,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Backdrop,
    CircularProgress
} from "@mui/material";
import InfoIcon from '@mui/icons-material/Info';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import VideoChatIcon from '@mui/icons-material/VideoChat';
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import MapIcon from '@mui/icons-material/Map';
import FilePreviewModal from "../tools/Modal";
import EmailIcon from '@mui/icons-material/Email';
import ModalInfo from "../tools/ModalInfo";

const live_events_service = require('../../helpers/live_events_service')

const Inicio = () => {
    const theme = useTheme();
    const isXs = useMediaQuery(theme.breakpoints.down("sm"));
    const isMd = useMediaQuery(theme.breakpoints.between("sm", "lg"));
    const isLg = useMediaQuery(theme.breakpoints.up("lg"));

    // cols para stats: 1 en mobile, 3 en tablet, 5 en desktop
    let cols = 5;
    let cols_detalles = 2;
    if (isXs) { cols = 1; cols_detalles = 1; }
    else if (isMd) { cols = 3; cols_detalles = 2; }
    else if (isLg) { cols = 5; cols_detalles = 2; }

    const stats_arr = [
        { img: "https://escuela-bancaria.s3.us-east-2.amazonaws.com/9c616b0a-7c5a-4357-9aae-51584e68cb8d.jpeg", title: "ASISTENTES", value: "+500" },
        { img: "https://escuela-bancaria.s3.us-east-2.amazonaws.com/91e32109-0226-4148-8f04-3626d422ad6d.jpeg", title: "STANDS EXPO", value: "+10" },
        { img: "https://escuela-bancaria.s3.us-east-2.amazonaws.com/5bdf2e7f-e34a-42fa-bde3-8965eb1948ce.png", title: "PAÍSES", value: "3" },
        { img: "https://escuela-bancaria.s3.us-east-2.amazonaws.com/2c9d0aa6-dfd7-4e85-b551-3d9226de805f.png", title: "CIUDADES", value: "4" },
        { img: "https://escuela-bancaria.s3.us-east-2.amazonaws.com/2add16c0-f13c-4879-97a8-5c01f6b07632.jpeg", title: "CONFERENCIAS", value: "+15" }
    ]
    const detalles_arr = [
        { img: "https://escuela-bancaria.s3.us-east-2.amazonaws.com/d887e158-984e-4537-9d6c-53441c9a2a8a.jpeg", title: "PROGRAMA ACADÉMICO", value: "Click para ver detalles", href: '/programa' },
        { img: "https://escuela-bancaria.s3.us-east-2.amazonaws.com/933f62f1-b423-4097-8d3f-82b2dd1800b6.jpeg", title: "MEDIA PARTNERS", value: "Click para más detalles", href: '/media-partners' },
    ]
    const varios_arr = [
        "https://escuela-bancaria.s3.us-east-2.amazonaws.com/52ae58d7-24cc-4954-ae58-e6a33590d9dd.jpeg",
        "https://escuela-bancaria.s3.us-east-2.amazonaws.com/f7bce16e-1a2c-4731-a66b-5a91ecc3eeaa.jpeg",
        "https://escuela-bancaria.s3.us-east-2.amazonaws.com/d8d7a616-dab4-44e7-853e-0fff815fceeb.jpeg",
        "https://escuela-bancaria.s3.us-east-2.amazonaws.com/431f5b17-fa11-4930-b6ef-3f0b1feb573a.jpeg",
        "https://escuela-bancaria.s3.us-east-2.amazonaws.com/451f7bb8-1d05-427e-8f18-4e94145c1e86.jpeg",
        "https://escuela-bancaria.s3.us-east-2.amazonaws.com/7b9c2c52-6f0d-40e8-acb3-a6d545b2d6a5.jpeg",
        "https://escuela-bancaria.s3.us-east-2.amazonaws.com/47129e5f-2a5e-4348-a0d5-752d53d3ecf4.jpeg",
        "https://escuela-bancaria.s3.us-east-2.amazonaws.com/620c27f5-eedc-4a94-b052-c3ee2093c749.jpeg",
        "https://escuela-bancaria.s3.us-east-2.amazonaws.com/b6010e2c-5019-4bad-b411-bf8cccc61532.jpeg",
    ]
    const [contador] = useState(0);
    const [evento, setEvento] = useState({});
    const [conferencistas, setConferencistas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [open, setOpen] = useState(false);
    const [url, setUrl] = useState("");
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [info, setInfo] = useState({ conferencista: "", cv: "", foto: "", puesto: "", institucion: "", bandera: "", pais: "" });

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
                                setEvento(response_evt.data.response_database.result[0]);
                                setLoading(false);
                                setConferencistas([...new Map(response.data.response.result.sort((a, b) => a.hora.localeCompare(b.hora)).map(item => [item.conferencista.nombre, item])).values()].filter((item) => item.conferencista.nombre != 'Representante'))
                            })
                            .catch((error) => { console.log(error); });
                    })
                    .catch((error) => { console.log(error); });
            })
            .catch((error) => { console.log(error); });
    }, [contador]);

    return (
        <Stack>
            <Backdrop
                sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={loading}
            >
                <CircularProgress color="inherit" />
            </Backdrop>

            {/* Título principal */}
            <Box sx={{ width: "100%", px: { xs: '5%', md: '8%', lg: '10%' }, py: { xs: '6%', md: '5%' } }}>
                <Stack spacing={{ xs: 3, md: 6 }}>
                    <Typography
                        variant="h4"
                        sx={{
                            color: "#1e3d52",
                            fontWeight: "bold",
                            textAlign: 'center',
                            fontSize: { xs: '1.1rem', sm: '1.4rem', md: '1.8rem', lg: '2.125rem' },
                        }}
                    >
                        XXIII CONGRESO REGIONAL PARA LA PREVENCIÓN DE LAVADO DE DINERO U OTROS ACTIVOS Y EL FINANCIAMIENTO DEL TERRORISMO
                    </Typography>
                    <Divider />
                    <Typography
                        variant="h5"
                        sx={{
                            color: "#1e3d52",
                            fontWeight: "bold",
                            mb: 1,
                            textAlign: "center",
                            fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' },
                        }}
                    >
                        Nuestras verticales estratégicas
                    </Typography>
                    <Typography
                        variant="p"
                        sx={{
                            color: "#1e3d52",
                            fontWeight: 500,
                            textAlign: "center",
                            margin: "0 auto",
                            lineHeight: 1.6,
                            fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' },
                        }}
                    >
                        MONITOREO TRANSACCIONAL Y ALERTAS
                        · ANALÍTICA AVANZADA E IA
                        · REGULACIÓN LDFT/FPADM
                        · TIPOLOGÍAS DE LAVADO DE DINERO
                        · GESTIÓN DE RIESGOS
                        · COMPLIANCE Y GOBERNANZA
                        · TENDENCIAS EMERGENTES AML
                        · CIBERSEGURIDAD Y FRAUDE
                        · ACTIVOS VIRTUALES Y BLOCKCHAIN
                        · SANCIONES INTERNACIONALES
                        · RIESGO JURISDICCIONAL
                        · NARCOTRÁFICO Y CRIMEN ORGANIZADO
                        · PROLIFERACIÓN Y WMD
                        · GAFILAT Y EVALUACIONES INTERNACIONALES
                    </Typography>
                </Stack>
            </Box>

            {/* Banner imagen */}
            <Box sx={{ width: "100%" }}>
                <img
                    src='https://escuela-bancaria.s3.us-east-2.amazonaws.com/d8335327-633d-4fb9-841f-c445ce8c0a1e.png'
                    style={{ width: '100%', display: 'block' }}
                    loading="lazy"
                />
            </Box>

            {/* Video - unificado con width responsivo */}
            <Box
                style={{
                    width: '100%',
                    backgroundImage: 'url(https://escuela-bancaria.s3.us-east-2.amazonaws.com/16416305-43f2-45dc-a0a3-7fab9219bcf0.jpeg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    textAlign: 'center',
                }}
                sx={{ py: { xs: '8%', md: '6%', lg: '5%' }, px: { xs: '5%', md: '10%', lg: '15%' } }}
            >
                <video
                    controls
                    style={{ width: '100%', maxWidth: '900px', display: 'block', margin: '0 auto' }}
                >
                    <source
                        src="https://escuela-bancaria.s3.us-east-2.amazonaws.com/649ad4e4-c45e-4c2f-bf0e-883eb546970c.mp4"
                        type="video/mp4"
                    />
                </video>
            </Box>

            {/* Texto descriptivo */}
            <Box sx={{ width: "100%", px: { xs: '5%', md: '8%', lg: '10%' }, py: { xs: '6%', md: '5%' } }}>
                <Stack spacing={{ xs: 3, md: 6 }}>
                    <Typography
                        variant="h5"
                        sx={{
                            color: "#1e3d52",
                            fontWeight: "bold",
                            textAlign: 'center',
                            fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' },
                        }}
                    >
                        ¿Cómo estar a la vanguardia y liderar en la nueva era del Compliance y la Prevención?
                    </Typography>
                    <Typography
                        variant="p"
                        sx={{
                            color: "#1e3d52",
                            fontWeight: "bold",
                            textAlign: 'justify',
                            fontSize: { xs: '0.85rem', sm: '0.9rem', md: '1rem' },
                            lineHeight: { xs: 1.7, md: 1.8 },
                        }}
                    >
                        La transformación digital también está redefiniendo la prevención del lavado de dinero, el financiamiento del terrorismo y la gestión de riesgos.

                        La Inteligencia Artificial, el análisis de datos, la automatización, los activos virtuales, las sanciones internacionales y las nuevas tipologías de fraude están cambiando el rol del oficial de cumplimiento y de los líderes del sistema financiero.

                        CLADIT 2026 reúne a los tomadores de decisión del ecosistema financiero y no financiero de la región: miembros de Junta Directiva, CEOs, Compliance Officers, gerentes de riesgo, auditores, reguladores y especialistas en prevención.

                        Durante dos días intensivos:

                        Conocerás las tendencias emergentes en AML/CFT para 2026

                        Analizarás el impacto regional de sanciones, corrupción y riesgos geopolíticos

                        Descubrirás cómo aplicar IA, automatización y analítica avanzada al cumplimiento

                        Compartirás experiencias con líderes de Centroamérica y expertos internacionales

                        CLADIT no es solo un congreso.
                        Es el espacio donde la regulación se conecta con la innovación y la estrategia.

                        Porque en un entorno cada vez más complejo, la pregunta no es si el riesgo evoluciona.
                        La pregunta es: ¿tu institución está preparada para anticiparlo? 🔐🌎
                    </Typography>
                </Stack>
            </Box>

            {/* Stats ImageList */}
            <ImageList cols={cols} sx={{ m: 0 }}>
                {stats_arr.map((item) => (
                    <ImageListItem key={item.img}>
                        <img
                            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            src={`${item.img}?w=248&fit=crop&auto=format`}
                            alt={item.title}
                            loading="lazy"
                        />
                        <ImageListItemBar
                            title={item.title}
                            subtitle={item.value}
                        />
                    </ImageListItem>
                ))}
            </ImageList>

            {/* Precio grupal + Patrocinio */}
            <Grid container alignItems="stretch" justifyContent="center" style={{ width: '100%' }}>
                <Grid size={{ xs: 12, md: 6, lg: 6 }} sx={{ padding: { xs: '8%', sm: '6%', md: '8%', lg: '10%' } }} style={{ backgroundColor: '#041b42' }}>
                    <Stack spacing={2}>
                        <Typography
                            variant="h4"
                            sx={{
                                color: "white",
                                fontWeight: "bold",
                                textAlign: 'justify',
                                fontSize: { xs: '1.3rem', sm: '1.6rem', md: '2rem', lg: '2.125rem' },
                            }}
                        >
                            Precio Especial por Grupos
                        </Typography>
                        <Typography
                            variant="p"
                            sx={{
                                color: "white",
                                fontWeight: "bold",
                                textAlign: 'justify',
                                fontSize: { xs: '0.85rem', md: '1rem' },
                            }}
                        >
                            Reserva para ti y tu equipo el acceso a CLADIT 2026 con un precio especial por grupos. Asegura tu lugar en el evento de cumplimiento más importante de la región y aprovecha esta oferta exclusiva para organizaciones que buscan fortalecer su estrategia de prevención.
                        </Typography>
                        <List style={{ color: 'white' }}>
                            <ListItem disablePadding>
                                <ListItemButton
                                    href={process.env.REACT_APP_URL_INSCRIPCION + process.env.REACT_APP_EVT}
                                    target="_blank"
                                >
                                    <ListItemIcon>
                                        <ShoppingCartIcon style={{ color: 'white' }} />
                                    </ListItemIcon>
                                    <ListItemText primary="Comprar" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton href="mailto:ncuches@ebg.edu.gt?subject=Quiero%20más%20información%20sobre%20tarifa%20grupal%20de%20CLADIT%202026">
                                    <ListItemIcon>
                                        <InfoIcon style={{ color: 'white' }} />
                                    </ListItemIcon>
                                    <ListItemText primary="Solicitar más información" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <VideoChatIcon style={{ color: 'white' }} />
                                    </ListItemIcon>
                                    <ListItemText primary="Webinar Open House CLADIT 2026" />
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </Stack>
                </Grid>
                <Grid size={{ xs: 12, md: 6, lg: 6 }} sx={{ padding: { xs: '8%', sm: '6%', md: '8%', lg: '10%' } }}>
                    <Stack spacing={2}>
                        <Typography
                            variant="h4"
                            sx={{
                                color: "#65a630",
                                fontWeight: "bold",
                                textAlign: 'justify',
                                fontSize: { xs: '1.3rem', sm: '1.6rem', md: '2rem', lg: '2.125rem' },
                            }}
                        >
                            Patrocinio
                        </Typography>
                        <Typography
                            variant="p"
                            sx={{
                                color: "#65a630",
                                fontWeight: "bold",
                                textAlign: 'justify',
                                fontSize: { xs: '0.85rem', md: '1rem' },
                            }}
                        >
                            Reserva una de las posiciones disponibles
                        </Typography>
                        <Typography
                            variant="h5"
                            sx={{
                                color: "#65a630",
                                fontWeight: "bold",
                                textAlign: 'justify',
                                fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' },
                            }}
                        >
                            Patrocinador / Stand / Taller Pre Congreso
                        </Typography>
                        <List style={{ color: '#65a630' }}>
                            <ListItem disablePadding>
                                <ListItemButton onClick={() => { setOpen(true); setUrl(evento.evt_info_pdf) }}>
                                    <ListItemIcon>
                                        <PictureAsPdfIcon style={{ color: '#65a630' }} />
                                    </ListItemIcon>
                                    <ListItemText primary="Ver Brief de Patrocinios" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton onClick={() => { setOpen(true); setUrl(evento.planos) }}>
                                    <ListItemIcon>
                                        <MapIcon style={{ color: '#65a630' }} />
                                    </ListItemIcon>
                                    <ListItemText primary="Ver Planos de Expo" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton href="mailto:ncuches@ebg.edu.gt?subject=Quiero%20más%20información%20sobre%20patrocinio%20de%20CLADIT%202026">
                                    <ListItemIcon>
                                        <InfoIcon style={{ color: '#65a630' }} />
                                    </ListItemIcon>
                                    <ListItemText primary="Solicitar más información" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <VideoChatIcon style={{ color: '#65a630' }} />
                                    </ListItemIcon>
                                    <ListItemText primary="Webinar Open House CLADIT 2026 - Sponsors" />
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </Stack>
                </Grid>
            </Grid>

            {/* Hero: DIRIGIDO A */}
            <Box
                sx={{
                    width: "100%",
                    // Altura flexible: fija en desktop, auto en mobile para que no recorte contenido
                    minHeight: { xs: 'auto', md: '500px', lg: '600px' },
                    position: "relative",
                    backgroundImage: `url("https://escuela-bancaria.s3.us-east-2.amazonaws.com/53a78163-a027-4504-833e-91fb7b69d022.jpeg")`,
                    backgroundSize: "cover",
                    backgroundPosition: "center top",
                    backgroundRepeat: "no-repeat",
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <Box
                    sx={{
                        position: "absolute",
                        inset: 0,
                        backdropFilter: "blur(3px)",
                        WebkitBackdropFilter: "blur(3px)",
                        backgroundColor: "rgba(0,0,0,0.4)",
                        zIndex: 1,
                    }}
                />
                {/* Padding responsivo en lugar de p={15} fijo */}
                <Box
                    sx={{
                        position: "relative",
                        zIndex: 2,
                        px: { xs: '5%', sm: '8%', md: '10%', lg: '15%' },
                        py: { xs: '8%', sm: '6%', md: '5%' },
                    }}
                >
                    <Stack spacing={1}>
                        <Typography
                            variant="h3"
                            fontWeight="bold"
                            color="white"
                            gutterBottom
                            sx={{ fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem', lg: '3rem' } }}
                        >
                            DIRIGIDO A:
                        </Typography>
                        <Typography
                            variant="p"
                            fontWeight="bold"
                            color="white"
                            gutterBottom
                            sx={{ fontSize: { xs: '0.9rem', md: '1rem' } }}
                        >
                            Sector Financiero
                        </Typography>
                        <Typography
                            variant="p"
                            color="white"
                            sx={{
                                maxWidth: "600px",
                                opacity: 0.9,
                                textAlign: 'justify',
                                fontSize: { xs: '0.8rem', sm: '0.85rem', md: '1rem' },
                                lineHeight: { xs: 1.6, md: 1.7 },
                            }}
                            gutterBottom
                        >
                            Involucrados y tomadores de decisión en el esquema de Riesgo de LD FT como:
                            Compliance officer, analistas de cumplimiento, monitoreo, prevención de fraudes,
                            auditores, financieros, consejos de administración, comités de cumplimiento,
                            vigilancia, riesgos, personal y Jefes de agencias como primer línea de defensa, así
                            como todos los Sujetos Obligados y empresas con prácticas éticas en sus
                            operaciones.
                        </Typography>
                    </Stack>
                </Box>
            </Box>

            {/* Detalles ImageList */}
            <ImageList cols={cols_detalles} sx={{ m: 0 }}>
                {detalles_arr.map((item) => (
                    <ImageListItem key={item.img}>
                        <img
                            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            src={`${item.img}?w=248&fit=crop&auto=format`}
                            alt={item.title}
                            loading="lazy"
                            style={{
                                // Altura responsiva para que no se vea aplastada en mobile
                                height: isXs ? '250px' : '500px',
                                objectFit: 'cover',
                            }}
                        />
                        <ImageListItemBar
                            title={item.title}
                            subtitle={item.value}
                            actionIcon={
                                <IconButton
                                    sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                    aria-label={`info about ${item.title}`}
                                    href={item.href}
                                >
                                    <InfoIcon />
                                </IconButton>
                            }
                        />
                    </ImageListItem>
                ))}
            </ImageList>

            {/* Hero: XXIII CLADIT 2026 */}
            <Box
                sx={{
                    width: "100%",
                    minHeight: { xs: 'auto', md: '500px', lg: '600px' },
                    position: "relative",
                    backgroundImage: `url("https://escuela-bancaria.s3.us-east-2.amazonaws.com/2cdb630b-7fe3-43ec-a0fe-10288be8da1a.jpeg")`,
                    backgroundSize: "cover",
                    backgroundPosition: "center top",
                    backgroundRepeat: "no-repeat",
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <Box
                    sx={{
                        position: "absolute",
                        inset: 0,
                        backdropFilter: "blur(3px)",
                        WebkitBackdropFilter: "blur(3px)",
                        backgroundColor: "rgba(0,0,0,0.4)",
                        zIndex: 1,
                    }}
                />
                <Box
                    sx={{
                        position: "relative",
                        zIndex: 2,
                        px: { xs: '5%', sm: '8%', md: '10%', lg: '15%' },
                        py: { xs: '8%', sm: '6%', md: '5%' },
                    }}
                >
                    <Stack spacing={1}>
                        <Typography
                            variant="h3"
                            fontWeight="bold"
                            color="white"
                            gutterBottom
                            sx={{ fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem', lg: '3rem' } }}
                        >
                            XXIII CLADIT 2026
                        </Typography>
                        <Typography
                            variant="p"
                            fontWeight="bold"
                            color="white"
                            gutterBottom
                            sx={{ fontSize: { xs: '0.9rem', md: '1rem' } }}
                        >
                            +20 expositores
                        </Typography>
                        <Typography
                            variant="p"
                            color="white"
                            sx={{
                                maxWidth: "600px",
                                opacity: 0.9,
                                textAlign: 'justify',
                                fontSize: { xs: '0.8rem', sm: '0.85rem', md: '1rem' },
                                lineHeight: { xs: 1.6, md: 1.7 },
                            }}
                            gutterBottom
                        >
                            Soluciones en AML/CFT, RegTech, Inteligencia Artificial aplicada al Compliance, Analítica Avanzada, Monitoreo Transaccional, Automatización (RPA), Ciberseguridad, Gestión de Riesgos, Sanciones Internacionales, Activos Virtuales, Blockchain, Investigación Financiera y Data Governance que fortalecerán la prevención y el cumplimiento en tu institución.

                            Conecta con proveedores especializados, expertos internacionales y líderes del sector financiero y no financiero en CLADIT 2026 y lleva tu estrategia de prevención al siguiente nivel.
                        </Typography>
                    </Stack>
                </Box>
            </Box>

            {/* Conferencistas */}
            <Box sx={{ width: "100%", px: { xs: '3%', md: '4%', lg: '5%' }, py: { xs: '6%', md: '5%' }, overflow: 'hidden' }}>
                <Stack spacing={{ xs: 3, md: 6 }}>
                    <Typography
                        variant="h4"
                        sx={{
                            color: "#1e3d52",
                            fontWeight: "bold",
                            textAlign: 'center',
                            fontSize: { xs: '1.2rem', sm: '1.5rem', md: '2rem', lg: '2.125rem' },
                        }}
                    >
                        NUESTROS CONFERENCISTAS
                    </Typography>
                    <Divider />
                    <ImageList
                        cols={cols}
                        // Altura de cada celda responsiva
                        rowHeight={isXs ? 220 : isMd ? 240 : 280}
                    >
                        {conferencistas.map((item) => (
                            <ImageListItem
                                key={item.conferencista.foto}
                                sx={{
                                    borderRadius: 3,
                                    overflow: "hidden",
                                    cursor: "pointer",
                                    position: "relative",
                                    transition: "box-shadow 0.3s ease",
                                    "&:hover": {
                                        boxShadow: "0 0 20px rgba(101,166,48,0.8)",
                                    },
                                    "&:hover img": {
                                        filter: "brightness(1.05)",
                                    },
                                }}
                            >
                                <img
                                    srcSet={`${item.conferencista.foto}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                    src={`${item.conferencista.foto}?w=248&fit=crop&auto=format`}
                                    alt={item.conferencista.nombre}
                                    loading="lazy"
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                        display: "block",
                                        transition: "filter 0.3s ease",
                                        filter: "grayscale(100%)",
                                    }}
                                    onMouseEnter={(e) => (e.currentTarget.style.filter = "grayscale(0%)")}
                                    onMouseLeave={(e) => (e.currentTarget.style.filter = "grayscale(100%)")}
                                />
                                <ImageListItemBar
                                    title={item.conferencista.nombre}
                                    sx={{
                                        background: "linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.2))",
                                        // Título más pequeño en mobile
                                        '& .MuiImageListItemBar-title': {
                                            fontSize: { xs: '0.75rem', md: '0.875rem' },
                                        },
                                    }}
                                    actionIcon={item.conferencista.cv &&
                                        <IconButton
                                            sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                            aria-label={`info about ${item.conferencista.nombre}`}
                                            onClick={() => {
                                                setInfo({
                                                    conferencista: item.conferencista.nombre,
                                                    cv: item.conferencista.cv,
                                                    foto: item.conferencista.foto,
                                                    puesto: item.conferencista.puesto,
                                                    institucion: item.conferencista.institucion,
                                                    bandera: item.conferencista.bandera,
                                                    pais: item.conferencista.pais
                                                })
                                                setModalOpen(true);
                                            }}
                                        >
                                            <InfoIcon />
                                        </IconButton>
                                    }
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                </Stack>
            </Box>

            {/* Galería woven - cols responsivo */}
            <ImageList
                variant="woven"
                cols={isXs ? 2 : 3}
                gap={isXs ? 4 : 8}
                sx={{ m: 0 }}
            >
                {varios_arr.map((item) => (
                    <ImageListItem key={item}>
                        <img
                            srcSet={`${item}?w=161&fit=crop&auto=format&dpr=2 2x`}
                            src={`${item}?w=161&fit=crop&auto=format`}
                            alt={"varios"}
                            loading="lazy"
                        />
                    </ImageListItem>
                ))}
            </ImageList>

            {/* Hero: Talleres Pre Congreso */}
            <Box
                sx={{
                    width: "100%",
                    minHeight: { xs: 'auto', md: '500px', lg: '600px' },
                    position: "relative",
                    backgroundImage: `url("https://escuela-bancaria.s3.us-east-2.amazonaws.com/a74f005a-8c6a-41ec-9c85-bb3aa7268f02.png")`,
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                    backgroundRepeat: "no-repeat",
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <Box
                    sx={{
                        position: "absolute",
                        inset: 0,
                        backdropFilter: "blur(3px)",
                        WebkitBackdropFilter: "blur(3px)",
                        backgroundColor: "rgba(0,0,0,0.4)",
                        zIndex: 1,
                    }}
                />
                <Box
                    sx={{
                        position: "relative",
                        zIndex: 2,
                        px: { xs: '5%', sm: '8%', md: '10%', lg: '15%' },
                        py: { xs: '8%', sm: '6%', md: '5%' },
                        width: '100%',
                    }}
                >
                    <Stack spacing={1}>
                        <Typography
                            variant="h3"
                            fontWeight="bold"
                            color="white"
                            gutterBottom
                            sx={{ fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem', lg: '3rem' } }}
                        >
                            Talleres Pre Congreso
                        </Typography>
                        <Typography
                            variant="p"
                            fontWeight="bold"
                            color="white"
                            gutterBottom
                            sx={{ fontSize: { xs: '0.8rem', sm: '0.85rem', md: '1rem' } }}
                        >
                            Sector Bancario / Sector Cooperativas / Todos los sectores y personas obligadas
                        </Typography>
                        <Typography
                            variant="p"
                            color="white"
                            sx={{
                                maxWidth: "600px",
                                opacity: 0.9,
                                textAlign: 'justify',
                                fontSize: { xs: '0.8rem', sm: '0.85rem', md: '1rem' },
                            }}
                            gutterBottom
                        >
                            Espacios de reunión exclusivos para discutir temas estratégicos con expertos en compliance y prevención de lavado de dinero.
                        </Typography>
                        <Grid container alignItems="center" justifyContent="flex-start" style={{ width: '100%' }} spacing={2}>
                            <Grid size={{ xs: 12, sm: 8, md: 6, lg: 6 }}>
                                <Button
                                    style={{ backgroundColor: '#65a630', color: 'white' }}
                                    startIcon={<EmailIcon />}
                                    variant="contained"
                                    color="primary"
                                    fullWidth
                                    href="mailto:ncuches@ebg.edu.gt?subject=Quiero%20más%20información%20sobre%20talleres%20Pre%20Congreso%20CLADIT%202026"
                                    sx={{ fontSize: { xs: '0.75rem', md: '0.875rem' } }}
                                >
                                    Solicitar más información
                                </Button>
                            </Grid>
                        </Grid>
                    </Stack>
                </Box>
            </Box>

            <FilePreviewModal open={open} onClose={() => setOpen(false)} url={url} title="Vista previa" />
            <ModalInfo open={modalOpen} onClose={() => { setModalOpen(false) }} conferencista={info} />
        </Stack>
    );
};

export default Inicio;
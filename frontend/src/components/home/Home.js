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
const live_events_service = require('../../helpers/live_events_service')

const Inicio = () => {
    const theme = useTheme();
    const isXs = useMediaQuery(theme.breakpoints.down("sm"));
    const isMd = useMediaQuery(theme.breakpoints.between("sm", "lg"));
    const isLg = useMediaQuery(theme.breakpoints.up("lg"));
    let cols = 5;
    let cols_detalles = 2;
    if (isXs) { cols = 1; cols_detalles = 1; }
    else if (isMd) { cols = 1; cols_detalles = 1; }
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
                                setConferencistas([...new Map(response.data.response.result.sort((a, b) => a.hora.localeCompare(b.hora)).map(item => [item.conferencista.nombre, item])).values()])
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
        <Stack>
            <Backdrop
                sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={loading}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
            <Box sx={{ width: "100%", padding: '5%' }}>
                <Stack spacing={6}>
                    <Typography variant="h4" align="center" style={{ color: "#1e3d52", fontWeight: "bold", textAlign: 'center' }}>
                        XXIII CONGRESO REGIONAL PARA LA PREVENCIÓN DE LAVADO DE DINERO U OTROS ACTIVOS Y EL FINANCIAMIENTO DEL TERRORISMO
                    </Typography>
                    <Divider />
                    <Typography variant="p" align="center" style={{ color: "#1e3d52", fontWeight: "bold", textAlign: 'center' }}>
                        AML & CFT
                        ·
                        COMPLIANCE
                        ·
                        GESTIÓN DE RIESGOS
                        ·
                        GOBIERNO CORPORATIVO
                        ·
                        ANTICORRUPCIÓN
                        ·
                        SANCIONES INTERNACIONALES
                        ·
                        FINANCIAMIENTO DEL TERRORISMO
                        ·
                        SUJETOS OBLIGADOS
                        ·
                        DEBIDA DILIGENCIA (CDD/KYC)
                        ·
                        GAFILAT & ESTÁNDARES GLOBALES

                    </Typography>
                </Stack>
            </Box >
            <Box sx={{ width: "100%" }}>

                <img src='https://escuela-bancaria.s3.us-east-2.amazonaws.com/d8335327-633d-4fb9-841f-c445ce8c0a1e.png' style={{ width: '100%' }} />
            </Box>
            <Box sx={{ display: { xs: 'none', md: 'none', lg: 'block' } }} style={{ width: '100%', padding: '10%', backgroundImage: 'url(https://escuela-bancaria.s3.us-east-2.amazonaws.com/16416305-43f2-45dc-a0a3-7fab9219bcf0.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center', textAlign: 'center' }}>
                <video controls style={{ width: '60%' }} >
                    <source
                        src="https://escuela-bancaria.s3.us-east-2.amazonaws.com/649ad4e4-c45e-4c2f-bf0e-883eb546970c.mp4"
                        type="video/mp4"
                    />
                </video>
            </Box>
            <Box sx={{ display: { xs: 'block', md: 'block', lg: 'none' } }} style={{ width: '100%', padding: '10%', backgroundImage: 'url(https://escuela-bancaria.s3.us-east-2.amazonaws.com/16416305-43f2-45dc-a0a3-7fab9219bcf0.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center', textAlign: 'center' }}>
                <video controls style={{ width: '100%' }} >
                    <source
                        src="https://escuela-bancaria.s3.us-east-2.amazonaws.com/649ad4e4-c45e-4c2f-bf0e-883eb546970c.mp4"
                        type="video/mp4"
                    />
                </video>
            </Box>
            <Box sx={{ width: "100%", padding: '5%' }}>
                <Stack spacing={6}>
                    <Typography variant="h5" align="center" style={{ color: "#1e3d52", fontWeight: "bold", textAlign: 'center' }}>
                        ¿Cómo estar a la vanguardia y liderar en la nueva era del Compliance y la Prevención?
                    </Typography>
                    <Typography variant="p" align="center" style={{ color: "#1e3d52", fontWeight: "bold", textAlign: 'justify' }}>

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
            </Box >
            <ImageList cols={cols}>
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
            <Grid container alignItems="center" justifyContent="center" style={{ textAlign: "justify", width: '100%' }}>
                <Grid size={{ xs: 12, md: 6, lg: 6 }} sx={{ padding: { xs: '5%', md: '8%', lg: '10%' } }} style={{ backgroundColor: '#041b42' }}>
                    <Stack spacing={2} >
                        <Typography variant="h4" align="center" style={{ color: "white", fontWeight: "bold", textAlign: 'justify' }}>
                            Precio Especial por Grupos
                        </Typography>
                        <Typography variant="p" align="center" style={{ color: "white", fontWeight: "bold", textAlign: 'justify' }}>
                            Reserva para ti y tu equipo el acceso a CLADIT 2026 con un precio especial por grupos. Asegura tu lugar en el evento de cumplimiento más importante de la región y aprovecha esta oferta exclusiva para organizaciones que buscan fortalecer su estrategia de prevención.
                        </Typography>
                        <List style={{ color: 'white' }}>
                            <ListItem disablePadding>
                                <ListItemButton href={
                                    process.env.REACT_APP_URL_INSCRIPCION +
                                    process.env.REACT_APP_EVT
                                } target="_blank">
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
                <Grid size={{ xs: 12, md: 6, lg: 6 }} sx={{ padding: { xs: '5%', md: '8%', lg: '10%' } }}>
                    <Stack spacing={2} >
                        <Typography variant="h4" align="center" style={{ color: "#65a630", fontWeight: "bold", textAlign: 'justify' }}>
                            Patrocinio
                        </Typography>
                        <Typography variant="p" align="center" style={{ color: "#65a630", fontWeight: "bold", textAlign: 'justify' }}>
                            Reserva una de las posiciones disponibles
                        </Typography>
                        <Typography variant="h5" align="center" style={{ color: "#65a630", fontWeight: "bold", textAlign: 'justify' }}>
                            Patrocinador / Stand / Taller Pre Congreso / Sala de reuniones VIP
                        </Typography>
                        <List style={{ color: '#65a630' }}>
                            <ListItem disablePadding>
                                <ListItemButton
                                    onClick={() => { setOpen(true); setUrl(evento.evt_info_pdf) }}
                                >
                                    <ListItemIcon>
                                        <PictureAsPdfIcon style={{ color: '#65a630' }} />
                                    </ListItemIcon>
                                    <ListItemText primary="Ver Brief de Patrocinios" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton
                                    onClick={() => { setOpen(true); setUrl(evento.planos) }}
                                >
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
                                    <ListItemText primary="Webinar Open House CLADIT 2026 -  Sponsors" />
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </Stack>
                </Grid>
            </Grid>
            <ImageList cols={cols_detalles}>
                {detalles_arr.map((item) => (
                    <ImageListItem key={item.img}>
                        <img
                            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            src={`${item.img}?w=248&fit=crop&auto=format`}
                            alt={item.title}
                            loading="lazy"
                            style={{ height: '500px', objectFit: 'cover' }}
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
            <Box
                sx={{
                    width: "100%",
                    height: "600px",
                    position: "relative",
                    backgroundImage: `url("https://escuela-bancaria.s3.us-east-2.amazonaws.com/2cdb630b-7fe3-43ec-a0fe-10288be8da1a.jpeg")`,
                    backgroundSize: "cover",
                    backgroundPosition: "center top",
                    backgroundRepeat: "no-repeat",
                    display: "flex",
                    alignItems: "center",
                }}
            >
                {/* Overlay oscuro con degradado */}
                <Box
                    sx={{
                        position: "absolute",
                        inset: 0,
                        backdropFilter: "blur(3px)",
                        WebkitBackdropFilter: "blur(3px)", // soporte Safari
                        backgroundColor: "rgba(0,0,0,0.4)", // oscurece ligeramente
                        zIndex: 1,
                    }}
                />

                {/* Contenido */}
                <Box sx={{ position: "relative", zIndex: 2 }} p={15}>
                    <Stack spacing={1}>
                        <Typography
                            variant="h3"
                            fontWeight="bold"
                            color="white"
                            gutterBottom
                        >
                            XXIII CLADIT 2026
                        </Typography>
                        <Typography
                            variant="P"
                            fontWeight="bold"
                            color="white"
                            gutterBottom
                        >
                            +20 expositores
                        </Typography>
                        <Typography
                            variant="p"
                            color="white"
                            sx={{ maxWidth: "600px", opacity: 0.9 }}
                            gutterBottom
                            style={{ textAlign: 'justify' }}
                        >
                            Soluciones en AML/CFT, RegTech, Inteligencia Artificial aplicada al Compliance, Analítica Avanzada, Monitoreo Transaccional, Automatización (RPA), Ciberseguridad, Gestión de Riesgos, Sanciones Internacionales, Activos Virtuales, Blockchain, Investigación Financiera y Data Governance que fortalecerán la prevención y el cumplimiento en tu institución.

                            Conecta con proveedores especializados, expertos internacionales y líderes del sector financiero y no financiero en CLADIT 2026 y lleva tu estrategia de prevención al siguiente nivel.
                        </Typography>
                    </Stack>
                </Box>
            </Box>
            <Box sx={{ width: "100%", padding: '5%', overflow: 'hidden' }}>
                <Stack spacing={6}>
                    <Typography variant="h4" align="center" style={{ color: "#1e3d52", fontWeight: "bold", textAlign: 'center' }}>
                        NUESTROS CONFERENCISTAS
                    </Typography>
                    <Divider />
                    <ImageList cols={cols}>
                        {conferencistas.map((item) => (
                            <ImageListItem
                                key={item.conferencista.foto_alt}
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
                                    srcSet={`${item.conferencista.foto_alt}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                    src={`${item.conferencista.foto_alt}?w=248&fit=crop&auto=format`}
                                    alt={item.conferencista.nombre}
                                    loading="lazy"
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                        display: "block",
                                        transition: "filter 0.3s ease",
                                    }}
                                />

                                <ImageListItemBar
                                    title={item.conferencista.nombre}
                                    sx={{
                                        background:
                                            "linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.2))",
                                    }}
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                </Stack>
            </Box >
            <Box
                sx={{
                    width: "100%",
                    height: "600px",
                    position: "relative",
                    backgroundImage: `url("https://escuela-bancaria.s3.us-east-2.amazonaws.com/4f34078f-3f61-4b29-9d1e-0710e6eea487.jpeg")`,
                    backgroundSize: "cover",
                    backgroundPosition: "center bottom",
                    backgroundRepeat: "no-repeat",
                    display: "flex",
                    alignItems: "center",
                }}
            >
                {/* Overlay oscuro con degradado */}
                <Box
                    sx={{
                        position: "absolute",
                        inset: 0,
                        backdropFilter: "blur(3px)",
                        WebkitBackdropFilter: "blur(3px)", // soporte Safari
                        backgroundColor: "rgba(0,0,0,0.4)", // oscurece ligeramente
                        zIndex: 1,
                    }}
                />

                {/* Contenido */}
                <Box sx={{ position: "relative", zIndex: 2 }} p={15}>
                    <Stack spacing={1}>
                        <Typography
                            variant="h3"
                            fontWeight="bold"
                            color="white"
                            gutterBottom
                        >
                            Salas de Negocios VIP
                        </Typography>
                        <Typography
                            variant="P"
                            fontWeight="bold"
                            color="white"
                            gutterBottom
                        >
                            3 Salas
                        </Typography>
                        <Typography
                            variant="p"
                            color="white"
                            sx={{ maxWidth: "600px", opacity: 0.9 }}
                            gutterBottom
                            style={{ textAlign: 'justify' }}
                        >
                            Espacios de reunión exclusivos para discutir temas estratégicos con expertos en compliance y prevención de lavado de dinero.
                            Conéctate con proveedores de soluciones, consultores especializados y líderes del sector financiero y no financiero en un entorno privado diseñado para fomentar el diálogo abierto, la colaboración y la generación de oportunidades de negocio.
                        </Typography>
                        <Grid container alignItems="center" justifyContent="center" style={{ textAlign: "justify", width: '100%' }} spacing={2}>
                            <Grid size={{ xs: 12, md: 6, lg: 6 }}  >
                                <Button startIcon={<MapIcon />} variant="contained" color="primary" fullWidth onClick={() => { setOpen(true); setUrl(evento.planos) }} style={{ backgroundColor: '#65a630', color: 'white' }}> Click para ver espacio de salas VIP</Button>
                            </Grid>
                            <Grid size={{ xs: 12, md: 6, lg: 6 }}   >
                                <Button style={{ backgroundColor: '#65a630', color: 'white' }} startIcon={<EmailIcon />} variant="contained" color="primary" fullWidth href="mailto:ncuches@ebg.edu.gt?subject=Quiero%20más%20información%20sobre%20salas%20VIP%20CLADIT%202026"> Solicitar más información</Button>
                            </Grid>
                        </Grid>
                    </Stack>
                </Box>
            </Box>
            <ImageList variant="woven" cols={3} gap={8}>
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
            <Box
                sx={{
                    width: "100%",
                    height: "600px",
                    position: "relative",
                    backgroundImage: `url("https://escuela-bancaria.s3.us-east-2.amazonaws.com/a74f005a-8c6a-41ec-9c85-bb3aa7268f02.png")`,
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                    backgroundRepeat: "no-repeat",
                    display: "flex",
                    alignItems: "center",
                }}
            >
                {/* Overlay oscuro con degradado */}
                <Box
                    sx={{
                        position: "absolute",
                        inset: 0,
                        backdropFilter: "blur(3px)",
                        WebkitBackdropFilter: "blur(3px)", // soporte Safari
                        backgroundColor: "rgba(0,0,0,0.4)", // oscurece ligeramente
                        zIndex: 1,
                    }}
                />

                {/* Contenido */}
                <Box sx={{ position: "relative", zIndex: 2 }} p={15}>
                    <Stack spacing={1}>
                        <Typography
                            variant="h3"
                            fontWeight="bold"
                            color="white"
                            gutterBottom
                        >
                            Talleres Pre Congreso
                        </Typography>
                        <Typography
                            variant="P"
                            fontWeight="bold"
                            color="white"
                            gutterBottom
                        >
                            Sector Bancario / Sector Cooperativas / Todos los sectores y personas obligadas
                        </Typography>
                        <Typography
                            variant="p"
                            color="white"
                            sx={{ maxWidth: "600px", opacity: 0.9 }}
                            gutterBottom
                            style={{ textAlign: 'justify' }}
                        >
                            Espacios de reunión exclusivos para discutir temas estratégicos con expertos en compliance y prevención de lavado de dinero.
                        </Typography>
                        <Grid container alignItems="center" justifyContent="center" style={{ textAlign: "justify", width: '100%' }} spacing={2}>
                            <Grid size={{ xs: 12, md: 6, lg: 6 }}  >
                                <Button startIcon={<MapIcon />} variant="contained" color="primary" fullWidth onClick={() => { setOpen(true); setUrl(evento.planos) }} style={{ backgroundColor: '#65a630', color: 'white' }}> Click para ver espacio de salas VIP</Button>
                            </Grid>
                            <Grid size={{ xs: 12, md: 6, lg: 6 }}   >
                                <Button style={{ backgroundColor: '#65a630', color: 'white' }} startIcon={<EmailIcon />} variant="contained" color="primary" fullWidth href="mailto:ncuches@ebg.edu.gt?subject=Quiero%20más%20información%20sobre%20talleres%20Pre%20Congreso%20CLADIT%202026"> Solicitar más información</Button>
                            </Grid>
                        </Grid>
                    </Stack>
                </Box>
            </Box>
            <FilePreviewModal open={open} onClose={() => setOpen(false)} url={url} title="Vista previa" />
        </Stack >
    );
};

export default Inicio;

import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Fade from "@mui/material/Fade";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import { Outlet } from "react-router-dom";
import ListItemText from "@mui/material/ListItemText";
import CustomMenuList from "./Menu";
import { Button, Grid, Stack, Typography } from "@mui/material";
import "./style.css";
import DrawIcon from "@mui/icons-material/Draw";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import { useTheme, useMediaQuery } from "@mui/material";
import Patrocinadores from "./Patrocinadores";
import HotelIcon from '@mui/icons-material/Hotel';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const pages = [
  {
    label: "CLADIT 2026",
    href: "/",
  },
  {
    label: "Patrocinio",
    href: "/patrocinio",
  },
  {
    label: "Programa",
    href: "/programa",
  },
  {
    label: "Tarifas",
    href: "/tarifas",
  },
  {
    label: "Contacto",
    href: "/contacto",
  },
  {
    label: "OPCIONES DE HOSPEDAJE",
    submenu: [
      {
        label: "Hotel Westin Camino Real",
        href: "https://www.marriott.com/es/event-reservations/reservation-link.mi?id=1776961284590&key=GRP&guestreslink2=true&app=resvlink",
      },
      {
        label: "Hotel Biltmore",
        href: "https://caminobiltmore-guatemala.ihotelier.com/book/dates-of-stay?groupID=5229234",
      },
    ],
  },
];

const live_events_service = require('../../helpers/live_events_service')

function ScrollTop(props) {
  const { children, windowRef } = props;
  const trigger = useScrollTrigger({
    target: windowRef ? windowRef() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  );
}

function InscripcionButton(props) {
  const { children, windowRef } = props;
  const trigger = useScrollTrigger({
    target: windowRef ? windowRef() : undefined,
    disableHysteresis: true,
    threshold: -1,
  });

  const handleClick = () => {
    window.open(process.env.REACT_APP_URL_INSCRIPCION + process.env.REACT_APP_EVT, '_blank');
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{
          position: "fixed",
          // Mobile: centrado en la parte inferior con más margen del borde
          bottom: { xs: 20, md: 'auto' },
          top: { xs: 'auto', md: '57vh', lg: '32vh' },
          // Mobile: centrado horizontalmente
          left: { xs: '50%', md: 'auto' },
          right: { xs: 'auto', md: '37vw', lg: '10vw' },
          transform: { xs: 'translateX(-50%)', md: 'none' },
          zIndex: 1200,
          // Asegura que no tape elementos importantes en mobile
          pointerEvents: 'auto',
        }}
      >
        {children}
      </Box>
    </Fade>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

// Componente para el dropdown de hospedaje en desktop
function HospedajeDropdown() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLinkClick = (href) => {
    window.open(href, '_blank');
    handleClose();
  };

  return (
    <>
      <Button
        id="hospedaje-button"
        aria-controls={open ? 'hospedaje-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
        sx={{
          color: "#1e3d52",
          fontWeight: "bold",
          textTransform: "none",
          // Fuente más pequeña en tablet para que quepan todos los items
          fontSize: { md: '0.8rem', lg: '1rem' },
          px: { md: 0.5, lg: 1 },
          '&:hover': {
            backgroundColor: 'rgba(30, 61, 82, 0.04)',
          },
        }}
      >
        OPCIONES DE HOSPEDAJE
      </Button>
      <Menu
        id="hospedaje-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={() => handleLinkClick("https://www.marriott.com/es/event-reservations/reservation-link.mi?id=1776961284590&key=GRP&guestreslink2=true&app=resvlink")}>
          <HotelIcon sx={{ mr: 1, color: "#1e3d52" }} />
          <ListItemText style={{ color: "#1e3d52" }}>Hotel Westin Camino Real</ListItemText>
        </MenuItem>
        <MenuItem onClick={() => handleLinkClick("https://caminobiltmore-guatemala.ihotelier.com/book/dates-of-stay?groupID=5229234")}>
          <HotelIcon sx={{ mr: 1, color: "#1e3d52" }} />
          <ListItemText style={{ color: "#1e3d52" }}>Hotel Biltmore</ListItemText>
        </MenuItem>
      </Menu>
    </>
  );
}

export default function Layout(props) {
  const [contador] = useState(0);
  const [evento, setEvento] = useState({});
  const [programa, setPrograma] = useState({});
  const [patrocinadores, setPatrocinadores] = useState([]);
  const [patrocinadores_diamante, setPatrocinadores_diamante] = useState([]);
  const [loading, setLoading] = useState(true);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

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
            setEvento(response_evt.data.response_database.result[0]);
            setPatrocinadores(response_patrocinador.data.response.result);
            setPatrocinadores_diamante(response_patrocinador.data.response.result.filter((patrocinador) => patrocinador.tipo === "DIAMANTE"));
            setLoading(false);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  }, [contador]);

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  function ElevationScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
      target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }

  ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar
          position="static"
          style={{
            backgroundColor: "white",
            color: "#1e3d52",
          }}
        >
          <Box sx={{ width: "100%", px: { xs: '4%', sm: '3%', md: '2%' }, pt: { xs: 1, md: 2 }, pb: { xs: 1, md: 2 } }}>
            <Grid
              container
              style={{ width: '100%' }}
              spacing={{ xs: 1, sm: 2, md: 3 }}
              alignItems="center"
              justifyContent="center"
              sx={{ mt: { xs: 0, sm: 0, md: 0, lg: 0 } }}
            >
              {/* Logo EBG - visible siempre */}
              <Grid size={{ xs: 6, sm: 5, md: 4, lg: 4 }} sx={{ display: 'flex', justifyContent: { xs: 'flex-start', sm: 'center' } }}>
                <img
                  src="https://escuela-bancaria.s3.us-east-2.amazonaws.com/37460b05-fbb4-4578-b54f-d2c3c90c0f42.png"
                  loading="lazy"
                  className="img-header"
                  style={{ width: '100%', maxWidth: '180px', display: 'block' }}
                />
              </Grid>

              {/* Logo CLADIT - solo visible en mobile/tablet (en desktop va en la columna central) */}
              <Grid
                size={{ xs: 6, sm: 4, md: 0 }}
                sx={{
                  display: { xs: 'flex', sm: 'flex', md: 'none' },
                  justifyContent: { xs: 'flex-end', sm: 'center' },
                }}
              >
                <img
                  src="https://escuela-bancaria.s3.us-east-2.amazonaws.com/f5d56a87-7561-4b37-b443-215853238d90.png"
                  loading="lazy"
                  className="img-header"
                  style={{ width: '100%', maxWidth: '160px', display: 'block' }}
                />
              </Grid>

              {/* Logo CLADIT - solo visible en desktop (columna central) */}
              <Grid
                size={{ xs: 0, sm: 0, md: 4, lg: 4 }}
                sx={{
                  display: { xs: 'none', sm: 'none', md: 'flex' },
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <img
                  src="https://escuela-bancaria.s3.us-east-2.amazonaws.com/f5d56a87-7561-4b37-b443-215853238d90.png"
                  loading="lazy"
                  className="img-header"
                  style={{ width: '90%', maxWidth: '300px', display: 'block' }}
                />
              </Grid>

              {/* Patrocinadores Diamante */}
              <Grid size={{ xs: 12, sm: 3, md: 4, lg: 4 }}>
                <Stack
                  direction="column"
                  spacing={1}
                  alignItems="center"
                  justifyContent="center"
                  sx={{ width: '100%' }}
                >
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontWeight: "bold",
                      textAlign: 'center',
                      width: '100%',
                      fontSize: { xs: '0.8rem', sm: '0.85rem', md: '1rem', lg: '1.1rem' },
                      color: '#1e3d52',
                    }}
                  >
                    Patrocinadores Diamante
                  </Typography>
                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="center"
                    sx={{
                      width: '100%',
                      flexWrap: 'wrap',
                      gap: { xs: '0.5rem', sm: '0.75rem', md: '1rem' },
                    }}
                  >
                    {patrocinadores_diamante && patrocinadores_diamante.map((patrocinador, index) => (
                      <Box
                        key={index}
                        sx={{
                          width: { xs: '50px', sm: '55px', md: '70px', lg: '80px' },
                          height: { xs: '50px', sm: '55px', md: '70px', lg: '80px' },
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                        }}
                      >
                        <img
                          src={patrocinador.promocional_landing}
                          loading="lazy"
                          className="img-patrocinador"
                          style={{
                            maxWidth: '100%',
                            maxHeight: '100%',
                            objectFit: 'contain',
                          }}
                        />
                      </Box>
                    ))}
                  </Stack>
                </Stack>
              </Grid>

              {/* Botones de contacto */}
              <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
                <Grid
                  container
                  style={{ width: '100%' }}
                  alignContent='center'
                  alignItems='center'
                  justifyContent='center'
                  spacing={0}
                >
                  <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6 }} style={{ textAlign: 'center' }}>
                    <Button
                      style={{ color: 'black' }}
                      startIcon={<WhatsAppIcon style={{ color: '#25D366' }} />}
                      href="https://wa.me/50223827200"
                      target="_blank"
                      sx={{ fontSize: { xs: '0.8rem', sm: '0.85rem', md: '0.9rem' } }}
                    >
                      +502 2382-7200
                    </Button>
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6 }} style={{ textAlign: 'center' }}>
                    <Button
                      style={{ color: 'black' }}
                      startIcon={<EmailIcon />}
                      href="mailto:ncuches@ebg.edu.gt?subject=Solicitud%20de%20reunión%20para%20más%20información%20de%20CLADIT%202026"
                      sx={{ fontSize: { xs: '0.8rem', sm: '0.85rem', md: '0.9rem' } }}
                    >
                      Solicitar una reunión
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>

          {/* Navbar */}
          <Container maxWidth="xl">
            <Toolbar disableGutters sx={{ minHeight: { xs: '48px', md: '56px' } }}>
              <Stack spacing={0} style={{ width: "100%" }}>
                {/* Mobile menu */}
                <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                  >
                    <MenuIcon />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "left",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{
                      display: { xs: "block", md: "none" },
                      '& .MuiPaper-root': {
                        // Asegura que el menú mobile no se salga de la pantalla
                        maxWidth: '90vw',
                        minWidth: '200px',
                      },
                    }}
                  >
                    {pages.map((page, index) => (
                      <div key={`MENU-ITEM-${index}`}>
                        {page.submenu ? (
                          <>
                            <MenuItem disabled style={{ color: "#1e3d52", fontWeight: "bold" }}>
                              <ListItemText>{page.label}</ListItemText>
                              <KeyboardArrowDownIcon fontSize="small" />
                            </MenuItem>
                            {page.submenu.map((item, subIndex) => (
                              <MenuItem
                                key={`SUBMENU-ITEM-${subIndex}`}
                                onClick={() => {
                                  window.open(item.href, '_blank');
                                  handleCloseNavMenu();
                                }}
                                style={{ paddingLeft: '32px' }}
                              >
                                <HotelIcon sx={{ mr: 1, fontSize: 18 }} />
                                <ListItemText style={{ color: "#1e3d52" }}>
                                  {item.label}
                                </ListItemText>
                              </MenuItem>
                            ))}
                          </>
                        ) : (
                          <MenuItem
                            onClick={() => {
                              window.location.href = page.href;
                            }}
                          >
                            <ListItemText style={{ color: "#1e3d52", fontWeight: "bold" }}>
                              {page.label}
                            </ListItemText>
                          </MenuItem>
                        )}
                      </div>
                    ))}
                  </Menu>
                </Box>

                {/* Desktop menu */}
                <Box
                  sx={{
                    flexGrow: 1,
                    display: { xs: "none", md: "flex" },
                    // En tablet los items pueden necesitar menos padding
                    '& .MuiMenuItem-root': {
                      px: { md: 0.5, lg: 1 },
                    },
                  }}
                  justifyContent="center"
                  alignItems="center"
                >
                  {pages.map((page, index) => (
                    <div key={`MENU-ITEM-${index}`}>
                      {page.submenu ? (
                        <HospedajeDropdown />
                      ) : (
                        <MenuItem onClick={handleCloseNavMenu}>
                          <CustomMenuList title={page.label} href={page.href} />
                        </MenuItem>
                      )}
                    </div>
                  ))}
                </Box>
              </Stack>
            </Toolbar>
          </Container>
        </AppBar>
      </ElevationScroll>

      <Box id="back-to-top-anchor">
        <Stack spacing={2} style={{ width: "100%" }} alignItems="center" justifyContent="center">
          <Outlet />
          <Patrocinadores />
        </Stack>
      </Box>

      {/* Botón flotante de inscripción */}
      <InscripcionButton {...props}>
        <Fab
          variant="extended"
          sx={{
            background: '#65a630',
            color: '#fff',
            fontWeight: 'bold',
            // Tamaño de fuente adaptado a pantalla
            fontSize: { xs: '0.85rem', sm: '0.9rem', md: '1rem' },
            // Padding ajustado en mobile
            px: { xs: 1.5, md: 2 },
            animation: 'neon-pulse 2s ease-in-out infinite',
            boxShadow: '0 0 10px #65a630, 0 0 20px rgba(37, 211, 102, 0.6)',
            border: '2px solid #65a630',
            // Evitar que se salga de pantalla en mobile
            maxWidth: { xs: '85vw', md: 'none' },
            '&:hover': {
              color: '#65a630',
              boxShadow: '0 0 20px #65a630, 0 0 40px rgba(37, 211, 102, 0.8)',
            },
            '@keyframes neon-pulse': {
              '0%, 100%': {
                boxShadow: '0 0 10px #65a630, 0 0 20px rgba(37, 211, 102, 0.6)',
                transform: 'translateY(0)',
              },
              '50%': {
                boxShadow: '0 0 20px #65a630, 0 0 40px rgba(37, 211, 102, 1)',
                transform: 'translateY(-2px)',
              },
            },
          }}
        >
          <DrawIcon sx={{ mr: 1 }} />
          Inscríbete en Línea
        </Fab>
      </InscripcionButton>

      <ScrollTop {...props}>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}
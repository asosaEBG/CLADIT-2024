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
    label: "Talleres",
    href: "/talleres",
  },
  {
    label: "Tarifas",
    href: "/tarifas",
  },
  {
    label: "Contacto",
    href: "/contacto",
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

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

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
          position={isMobile ? "static" : "sticky"}

          style={{
            backgroundColor: "white",
            color: "#1e3d52",
          }}
        >
          <Box style={{ backgroundColor: "black", width: "100%", padding: '1%' }}>
            <Grid container style={{ width: '100%' }} alignContent='center' alignItems='center' justifyContent='center'>
              <Grid size={{ xs: 12, lg: 3, md: 3 }} >
              </Grid>
              <Grid size={{ xs: 12, lg: 4, md: 4 }} style={{ textAlign: 'center' }}>
                <Typography variant="p" style={{ color: "white", fontWeight: "bold", textAlign: 'center', width: '100%' }} >
                  Aprovecha la Tarifa Early Bird hasta el 31 de marzo 2026
                </Typography>
              </Grid>
              <Grid size={{ xs: 12, lg: 2, md: 2 }} style={{ textAlign: 'center' }} alignContent='center' alignItems='center' justifyContent='center'>
                <Button variant="contained" color="primary" size="small" style={{ marginTop: '5px', backgroundColor: '#65a630', color: 'white' }} href={process.env.REACT_APP_URL_INSCRIPCION + process.env.REACT_APP_EVT} target="_blank">
                  Comprar Entradas
                </Button>
              </Grid>
              <Grid size={{ xs: 12, lg: 3, md: 3 }} >
              </Grid>
            </Grid>
          </Box>
          <Box style={{ width: "100%", padding: '1%' }}>
            <Grid container style={{ width: '100%' }} alignContent='center' alignItems='center' justifyContent='center'>
              <Grid size={{ xs: 12, lg: 2, md: 2 }} >
                <img
                  src="https://escuela-bancaria.s3.us-east-2.amazonaws.com/8ff2041f-2791-4a80-8e28-33b2f091497b.png"
                  loading="lazy"
                  className="img-header"
                  style={{ width: '100%' }}
                />
              </Grid>
              <Grid size={{ xs: 12, lg: 2, md: 2 }} style={{ textAlign: 'center' }}>
                <Typography variant="p" style={{ fontWeight: "bold", textAlign: 'center', width: '100%' }} >
                  Patrocinadores Diamante
                </Typography>
              </Grid>
              <Grid size={{ xs: 12, lg: 4, md: 4 }}>
                <Grid container style={{ width: '100%' }} alignContent='center' alignItems='center' justifyContent='center' spacing={2}>
                  {patrocinadores_diamante && patrocinadores_diamante.map((patrocinador, index) => (
                    <Grid size={{ xs: 2, lg: 2, md: 2 }} key={index}>
                      <img
                        src={patrocinador.promocional_landing}
                        loading="lazy"
                        className="img-patrocinador"
                        style={{ width: '100%' }}
                      />
                    </Grid>
                  ))}
                </Grid>
              </Grid>
              <Grid size={{ xs: 12, lg: 2, md: 2 }} >
                <Grid container style={{ width: '100%' }} alignContent='center' alignItems='center' justifyContent='center' spacing={1}>
                  <Grid size={{ xs: 6, lg: 6, md: 6 }} >
                    <Button style={{ color: 'black' }} startIcon={<WhatsAppIcon style={{ color: '#25D366' }} />} href="https://wa.me/50223827200" target="_blank" > +502 2382-7200</Button>
                  </Grid>
                  <Grid size={{ xs: 6, lg: 6, md: 6 }} >
                    <Button style={{ color: 'black' }} startIcon={<EmailIcon />} href="mailto:ncuches@ebg.edu.gt?subject=Solicitud%20de%20reunión%20para%20más%20información%20de%20CLADIT%202026" >Solicitar una reunión</Button>
                  </Grid>
                </Grid>

              </Grid>
            </Grid>
          </Box>
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Stack spacing={2} style={{ width: "100%" }}>
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
                    }}
                  >
                    {pages.map((page, index) => (
                      <MenuItem
                        key={`MENU-ITEM-${index}`}
                        onClick={() => {
                          window.location.href = page.href;
                        }}
                      >
                        <ListItemText
                          style={{ color: "#1e3d52", fontWeight: "bold" }}
                        >
                          {page.label}
                        </ListItemText>
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
                <Box
                  sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
                  justifyContent="center"
                  alignItems={"center"}
                >
                  {pages.map((page, index) => (
                    <MenuItem
                      key={`MENU-ITEM-${index}`}
                      onClick={handleCloseNavMenu}
                    >
                      <CustomMenuList title={page.label} href={page.href} />
                    </MenuItem>
                  ))}
                </Box>
              </Stack>
            </Toolbar>
          </Container>
        </AppBar>
      </ElevationScroll>
      <Box id="back-to-top-anchor">
        <Outlet />
      </Box>
      <ScrollTop {...props}>
        <Stack spacing={2}>
          <Fab size="small" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
          <Fab
            variant="extended"
            href={
              process.env.REACT_APP_URL_INSCRIPCION +
              process.env.REACT_APP_EVT
            }
          >
            <DrawIcon sx={{ mr: 1 }} />
            Inscríbete en Línea
          </Fab>
        </Stack>
      </ScrollTop>
    </React.Fragment>
  );
}

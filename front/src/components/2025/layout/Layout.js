import React from "react";
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
import { Grid, Stack } from "@mui/material";
import "./style.css";
import DrawIcon from "@mui/icons-material/Draw";
const pages = [
  {
    label: "Ciudad de Guatemala",
    href: "/2026/gt",
  },
  {
    label: "Xela",
    href: "/2026/xela",
  },
  {
    label: "Contacto",
    href: "/2026/contacto",
  },
  {
    label: "Ver edición 2024",
    href: "/2024/xela",
  },
];
function ScrollTop(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({
        block: "center",
      });
    }
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
      <AppBar
        style={{
          backgroundColor: "white",
          color: "#1e3d52",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Stack spacing={2} style={{ width: "100%" }}>
              <Grid container justifyContent="center">
                <Grid xs={4} md={4} lg={4} style={{ textAlign: "center" }}>
                  <img
                    src="https://escuela-bancaria.s3.us-east-2.amazonaws.com/8ff2041f-2791-4a80-8e28-33b2f091497b.png"
                    loading="lazy"
                    className="img-header"
                  />
                </Grid>
                <Grid xs={4} md={4} lg={4}></Grid>
                <Grid xs={4} md={4} lg={4} style={{ textAlign: "center" }}>
                  <img
                    src="https://test-escuelabancaria.s3.us-east-2.amazonaws.com/Medios+General/Logotipos+Finales+ABG+2022-01.png"
                    loading="lazy"
                    className="img-header"
                  />
                </Grid>
              </Grid>
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
      <Toolbar id="back-to-top-anchor" />
      <Box className="container-outlet">
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

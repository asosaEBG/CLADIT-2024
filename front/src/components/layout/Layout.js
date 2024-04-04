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
const pages = [
  {
    label: "Inicio",
    href: "/",
  },
  {
    label: "Programa",
    href: "/programa",
  },
  {
    label: "Registro",
    href: "/registro",
  },
  {
    label: "Patrocinio",
    href: "/patrocinio",
  },
  {
    label: "Tarifas de Inscripción",
    href: "/tarifas",
  },
  {
    label: "Talleres",
    href: "/talleres",
  },
  {
    label: "Contacto",
    href: "/contacto",
  },
  {
    label: "Galeria",
    href: "/galeria",
  },
  {
    label: "CLADIT XELA",
    href: "/cladit-xela",
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
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
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
                    src="https://escuela-bancaria.s3.us-east-2.amazonaws.com/1697209244529-CLADIT%202024.png"
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
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}

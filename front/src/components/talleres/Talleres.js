import React from "react";
import Stack from "@mui/material/Stack";
import { Grid, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
const Talleres = () => {
  return (
    <Stack spacing={3} alignItems="center">
      <Typography
        variant="h2"
        style={{ color: "#1e3d52", textAlign: "center" }}
      >
        <strong>Talleres PreCongreso</strong>
      </Typography>
      <Typography
        variant="h3"
        style={{ color: "#1e3d52", textAlign: "center" }}
      >
        <strong>
          <CalendarMonthIcon />
          &nbsp;15 de mayo
        </strong>
      </Typography>
      <Typography
        variant="h4"
        style={{ color: "#1e3d52", textAlign: "center" }}
      >
        <strong>
          <LocationOnIcon />
          &nbsp;Hotel Westin Camino Real z.10
        </strong>
      </Typography>
      <Typography variant="p" style={{ textAlign: "center", color: "#1e3d52" }}>
        <strong>*Cupo limitado</strong>
      </Typography>
      <Grid container p={5}>
        <Grid
          xs={12}
          md={12}
          lg={12}
          style={{ backgroundColor: "#397d51" }}
          marginBottom={4}
        >
          <Typography
            variant="h3"
            style={{ color: "white", textAlign: "center" }}
          >
            <strong>Sector Bancario</strong>
          </Typography>
        </Grid>
        <Grid xs={12} md={12} lg={4} style={{ textAlign: "center" }}>
          <img
            src="https://escuela-bancaria.s3.us-east-2.amazonaws.com/foto+de+Medarano.png"
            alt="conferencista"
            style={{ width: "50%" }}
          />
        </Grid>
        <Grid xs={12} md={12} lg={4} style={{ textAlign: "left" }}>
          <Stack>
            <Typography variant="h4">
              <strong>TALLER</strong>
            </Typography>
            <Typography variant="P" style={{ fontSize: "2em" }}>
              Como realizar investigaciones de manera eficiente en el área de
              cumplimiento
            </Typography>
            <Typography variant="p" style={{ fontSize: "1.5em" }}>
              <AccessTimeIcon />
              &nbsp;8:30 AM - 10:30 AM
            </Typography>
            <Typography
              variant="p"
              style={{ color: "#397d51", fontSize: "1.5em" }}
            >
              Lic. Juan Carlos Medrano
            </Typography>
            <Typography variant="p">PRESIDENTE Y FUNDADOR</Typography>
            <Typography variant="p">J&A Global Compliance</Typography>
            <img
              src="https://escuela-bancaria.s3.us-east-2.amazonaws.com/Banderas+USA+y+VENEZUELA.png"
              alt="img-paises"
              style={{ width: "20%" }}
            />
          </Stack>
        </Grid>
      </Grid>
      <Grid container p={5}>
        <Grid
          xs={12}
          md={12}
          lg={12}
          style={{ backgroundColor: "#397d51" }}
          marginBottom={4}
        >
          <Typography
            variant="h3"
            style={{ color: "white", textAlign: "center" }}
          >
            <strong>Sector Cooperativas</strong>
          </Typography>
        </Grid>
        <Grid xs={12} md={12} lg={4} style={{ textAlign: "center" }}>
          <img
            src="https://escuela-bancaria.s3.us-east-2.amazonaws.com/Lic+Gonzalez.png"
            alt="conferencista"
            style={{ width: "50%" }}
          />
        </Grid>
        <Grid xs={12} md={12} lg={4} style={{ textAlign: "left" }}>
          <Stack>
            <Typography variant="h4">
              <strong>TALLER</strong>
            </Typography>
            <Typography variant="P" style={{ fontSize: "2em" }}>
              Matrices de riesgo LDFT según guía IVE
            </Typography>
            <Typography variant="p" style={{ fontSize: "1.5em" }}>
              <AccessTimeIcon />
              &nbsp;8:30 AM - 12:30 AM
            </Typography>
            <Typography
              variant="p"
              style={{ color: "#397d51", fontSize: "1.5em" }}
            >
              Lic. Jorge González
            </Typography>
            <Typography variant="p">Oficial de Cumplimiento</Typography>
            <Typography variant="p">INTERBANCO</Typography>
            <img
              src="https://escuela-bancaria.s3.us-east-2.amazonaws.com/Bandera+Guatemala.png"
              alt="img-paises"
              style={{ width: "20%" }}
            />
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default Talleres;

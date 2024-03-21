import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { Grid, Typography } from "@mui/material";
const Tarifas = () => {
  return (
    <Box>
      <Grid container justifyContent="center" alignItems="center" p={5}>
        <Grid xs={12} md={12} lg={6} textAlign="center">
          <Typography
            variant="h4"
            style={{ color: "#1e3d52", textAlign: "center" }}
          >
            TARIFAS DE INSCRIPCIÓN
          </Typography>
          <img
            src="https://escuela-bancaria.s3.us-east-2.amazonaws.com/tarifas+CLADIT.png"
            loading="lazy"
            style={{ width: "100%" }}
          />
        </Grid>
        <Grid xs={12} md={12} lg={6}>
          <Typography
            variant="h4"
            style={{ color: "#1e3d52", textAlign: "center" }}
          >
            EL REGISTRO INCLUYE
          </Typography>
          <Typography
            variant="p"
            style={{ fontSize: "1em", textAlign: "justify" }}
          >
            <ul>
              <li>Conferencias</li>
              <li>Taller precongreso</li>
              <li>Refrigerios a.m. y p.m.</li>
              <li>Almuerzos</li>
              <li>Acceso al área de stands</li>
              <li>Certificado de participación digital</li>
              <li>Tarifa especial a parqueo</li>
              <li>Grabación de conferencias</li>
            </ul>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Tarifas;

{
  /*<Box component="section" className="video-section">
          <Grid container></Grid>
          <video autoPlay muted loop id="myVideo">
            <source
              src="https://escuela-bancaria.s3.us-east-2.amazonaws.com/RESUMEN+CLADIT+2023.mp4"
              type="video/mp4"
            />
          </video>
  </Box>*/
}

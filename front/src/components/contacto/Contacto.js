import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { Grid, Typography } from "@mui/material";
const Contacto = () => {
  return (
    <Box>
      <Stack spacing={10} style={{ padding: "5%" }}>
        <Typography variant="h3" style={{ textAlign: "center" }}>
          <strong>CONTACTO Y UBICACIÓN DE EVENTO</strong>
        </Typography>
        <Grid container justifyContent="center">
          <Grid item xs={12} md={6} lg={6} style={{ textAlign: "center" }}>
            <Stack spacing={3}>
              <Typography variant="h6">
                <strong>E-mail:</strong>
              </Typography>
              <Typography variant="p">ebg.edu.gt</Typography>
              <Typography variant="h6">
                <strong>Teléfono:</strong>
              </Typography>
              <Typography variant="p">+502 2382-7223</Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6} lg={6} style={{ textAlign: "center" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.4501076150405!2d-90.54888962425831!3d14.63037247634576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8589a1bbc9ff7d79%3A0x600f61f3baa980b5!2sGran%20karmel!5e0!3m2!1ses!2sgt!4v1718661939443!5m2!1ses!2sgt"
              width="100%"
              height="450"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </Grid>
        </Grid>
      </Stack>
    </Box>
  );
};

export default Contacto;

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

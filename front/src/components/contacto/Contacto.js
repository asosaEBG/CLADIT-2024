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
              <Typography variant="p">+502 2382-7200</Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6} lg={6} style={{ textAlign: "center" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.9721045721803!2d-90.5165557242587!3d14.600664977073766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8589a315f398a111%3A0x815473dae1d82d1!2sEpic%20Avia!5e0!3m2!1ses!2sgt!4v1709838039558!5m2!1ses!2sgt"
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

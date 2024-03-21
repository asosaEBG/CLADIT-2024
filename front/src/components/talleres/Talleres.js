import React from "react";
import Stack from "@mui/material/Stack";
import { ImageList, ImageListItem, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
const Talleres = () => {
  return (
    <Stack spacing={2} p={5} alignItems="center">
      <Typography
        variant="h3"
        style={{ color: "#1e3d52", textAlign: "center" }}
      >
        <strong>Talleres PreCongreso</strong>
      </Typography>
      <Typography
        variant="h5"
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
      <ImageList cols={2} sx={{ width: { lg: "50%", md: "100%", xs: "100%" } }}>
        <ImageListItem cols={2}>
          <img
            src={`https://escuela-bancaria.s3.us-east-2.amazonaws.com/bancario.png`}
            alt="taller-pre-congreso"
            loading="lazy"
          />
        </ImageListItem>
        <ImageListItem cols={1}>
          <img
            src={`https://escuela-bancaria.s3.us-east-2.amazonaws.com/Talleres+1+SB.png`}
            alt="taller-pre-congreso"
            loading="lazy"
          />
        </ImageListItem>
        <ImageListItem cols={1}>
          <img
            src={`https://escuela-bancaria.s3.us-east-2.amazonaws.com/TallerES+2+SB.png`}
            alt="taller-pre-congreso"
            loading="lazy"
          />
        </ImageListItem>
        <ImageListItem cols={2}>
          <img
            src={`https://escuela-bancaria.s3.us-east-2.amazonaws.com/cooperativa.png`}
            alt="taller-pre-congreso"
            loading="lazy"
          />
        </ImageListItem>
        <ImageListItem cols={2}>
          <img
            src={`https://escuela-bancaria.s3.us-east-2.amazonaws.com/Talleres+1+Sc.png`}
            alt="taller-pre-congreso"
            loading="lazy"
          />
        </ImageListItem>
      </ImageList>
    </Stack>
  );
};

export default Talleres;

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

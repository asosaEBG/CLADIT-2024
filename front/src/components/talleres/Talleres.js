import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { Grid, ImageList, ImageListItem, Typography } from "@mui/material";
const Talleres = () => {
  return (
    <Stack spacing={5} p={5}>
      <Typography
        variant="h4"
        style={{ color: "#1e3d52", textAlign: "center" }}
      >
        Talleres Pre Congreso
      </Typography>
      <ImageList cols={2}>
        <ImageListItem>
          <img
            src={`https://escuela-bancaria.s3.us-east-2.amazonaws.com/Taller+1+Sector+Cooperativas.jpg`}
            alt="taller-pre-congreso"
            loading="lazy"
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src={`https://escuela-bancaria.s3.us-east-2.amazonaws.com/Taller+1+Sector+Bancario.jpg`}
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

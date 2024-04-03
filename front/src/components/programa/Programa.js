import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { Grid, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
const Programa = () => {
  return (
    <Box>
      <Stack spacing={4}>
        <Grid container>
          <Grid
            xs={12}
            md={6}
            lg={6}
            style={{ padding: "5%", textAlign: "justify" }}
          >
            <Stack spacing={4}>
              <Typography variant="h2">Programa Académico</Typography>
              <Typography variant="p" style={{ fontSize: "1.5em" }}>
                Para el CLADIT de este año, organizado por la Asociación
                Bancaria de Guatemala y entidades educativas, se ha diseñado un
                programa que aborda temas fundamentales en la lucha contra el
                lavado de dinero y el financiamiento del terrorismo. El objetivo
                principal es proporcionar a los participantes una amplia gama de
                conocimientos y herramientas para fortalecer sus estrategias de
                prevención y cumplimiento normativo.
              </Typography>
              <Button
                startIcon={<PictureAsPdfIcon />}
                href="https://escuela-bancaria.s3.us-east-2.amazonaws.com/Programa+CLADIT+2024+(5).pdf"
                target="_blank"
              >
                Click para ver programa
              </Button>
            </Stack>
          </Grid>
          <Grid xs={12} md={6} lg={6} style={{ padding: "5%" }}>
            <img
              src="https://escuela-bancaria.s3.us-east-2.amazonaws.com/IMG_7458.jpg"
              loading="lazy"
              style={{ width: "100%" }}
            />
          </Grid>
        </Grid>
      </Stack>
    </Box>
  );
};

export default Programa;

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

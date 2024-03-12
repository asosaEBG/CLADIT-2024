import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import "./style.css";
import { Grid, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EventIcon from "@mui/icons-material/Event";
import Button from "@mui/material/Button";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
const Inicio = () => {
  return (
    <Box paddingTop={10}>
      <Stack spacing={4}>
        <Stack spacing={5} alignItems="center" justifyContent="center">
          <Typography variant="h4" style={{ textAlign: "center" }}>
            <EventIcon /> &nbsp;15 y 16 de mayo
          </Typography>
          <Button
            style={{ width: "60%" }}
            variant="outlined"
            startIcon={<DriveFileRenameOutlineIcon />}
            onClick={() => {
              window.open(
                "https://ebg.edu.gt/inscripcion/129f0d0c6df63b15f4c71caef724c6cbd0101c7c62123b5f3a78e50411555a2f",
                "_blank"
              );
            }}
          >
            Inscríbete en Línea
          </Button>
        </Stack>

        <video autoPlay muted loop style={{ width: "100%" }}>
          <source
            src="https://escuela-bancaria.s3.us-east-2.amazonaws.com/RESUMEN+CLADIT+2023.mp4"
            type="video/mp4"
          />
        </video>
        <Stack alignItems="center" justifyContent="center" spacing={5}>
          <Grid container alignItems="center" justifyContent="center">
            <Grid xs={12} md={6} lg={6} style={{ textAlign: "center" }}>
              <Typography variant="h4">ÉPICA</Typography>
              <Typography variant="h5">
                Eventos y Convenciones en AVIA
              </Typography>
            </Grid>
            <Grid xs={12} md={6} lg={6} style={{ textAlign: "center" }}>
              <img
                src="https://escuela-bancaria.s3.us-east-2.amazonaws.com/SELECCIONADA-20.jpg"
                style={{ width: "60%", loading: "lazy" }}
              />
            </Grid>
          </Grid>
          <ImageList cols={5}>
            <ImageListItem>
              <img
                src={`https://escuela-bancaria.s3.us-east-2.amazonaws.com/epica-1.jpg`}
                alt="westin-img"
                loading="lazy"
              />
            </ImageListItem>
            <ImageListItem>
              <img
                src={`https://escuela-bancaria.s3.us-east-2.amazonaws.com/epica-2.jpg`}
                alt="westin-img"
                loading="lazy"
              />
            </ImageListItem>
            <ImageListItem>
              <img
                src={`https://escuela-bancaria.s3.us-east-2.amazonaws.com/epica-3.jpg`}
                alt="westin-img"
                loading="lazy"
              />
            </ImageListItem>
            <ImageListItem>
              <img
                src={`https://escuela-bancaria.s3.us-east-2.amazonaws.com/epica-4.jpg`}
                alt="westin-img"
                loading="lazy"
              />
            </ImageListItem>
            <ImageListItem>
              <img
                src={`https://escuela-bancaria.s3.us-east-2.amazonaws.com/epica-6.jpg`}
                alt="westin-img"
                loading="lazy"
              />
            </ImageListItem>
          </ImageList>
        </Stack>
        <Stack spacing={5} justifyContent="center" alignItems="center">
          <Typography variant="h4" style={{ textAlign: "center" }}>
            Patrocinadores
          </Typography>
          <Typography variant="h5" style={{ textAlign: "center" }}>
            Top Diamante
          </Typography>
          <img
            style={{ width: "25%" }}
            src={`https://escuela-bancaria.s3.us-east-2.amazonaws.com/1+BANRURAL.png`}
            alt="westin-img"
            loading="lazy"
          />
          <Typography variant="h5" style={{ textAlign: "center" }}>
            Diamante
          </Typography>
          <img
            style={{ width: "25%" }}
            src={`https://escuela-bancaria.s3.us-east-2.amazonaws.com/LEXIS+NEXIS.png`}
            alt="westin-img"
            loading="lazy"
          />
          <Typography variant="h5" style={{ textAlign: "center" }}>
            Oro
          </Typography>
          <img
            style={{ width: "25%" }}
            src={`https://escuela-bancaria.s3.us-east-2.amazonaws.com/CHN.png`}
            alt="westin-img"
            loading="lazy"
          />
        </Stack>
        <Grid container>
          <Grid xs={12} md={6} lg={6}>
            <img
              style={{ width: "100%" }}
              src={`https://escuela-bancaria.s3.us-east-2.amazonaws.com/IMG_7454+(2).jpg`}
              alt="westin-img"
              loading="lazy"
            />
          </Grid>
          <Grid xs={12} md={6} lg={6}>
            <Stack spacing={2} style={{ padding: "6%" }}>
              <Typography variant="h4" style={{ textAlign: "center" }}>
                Dirigido a:
              </Typography>
              <Typography
                variant="p"
                style={{ textAlign: "left", fontSize: "1.5em" }}
              >
                <ul>
                  <li>Oficial de cumplimiento</li>
                  <li>Analista de riesgos de cumplimiento</li>
                  <li>Analista de inteligencia financiera</li>
                  <li>Gerente de prevención de lavado de dinero</li>
                  <li>Auditor de cumplimiento</li>
                </ul>
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Stack>
    </Box>
  );
};

export default Inicio;

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

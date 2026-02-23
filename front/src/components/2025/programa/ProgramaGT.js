import React, { useEffect, useState } from "react";
import {
  Stack,
  CircularProgress,
  Box,
  Backdrop,
  Grid,
  Typography,
  Button,
  Container
} from "@mui/material";
import Carousel from "react-material-ui-carousel";
import ViewPrograma from "../evento/programa/Programa";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
const admin_service = require("../../../helpers/admin_service");
const ProgramaGT = (props) => {
  const [contador] = useState(0);
  const [evento, setEvento] = useState({});
  const [programa, setPrograma] = useState({});
  const [patrocinadores, setPatrocinadores] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    admin_service
      .getData("/evento/view-by-hash/" + props.evt)
      .then((response_evt) => {

        setEvento(response_evt.data.response_database.result[0]);

        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });

  }, [contador]);
  return <Box>
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={loading}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
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
              href={evento.enlace}
              target="_blank"
              style={{
                backgroundColor: "#397d51",
                color: "white",
                border: "1px solid transparent",
              }}
            >
              Click para ver programa
            </Button>
          </Stack>
        </Grid>
        <Grid xs={12} md={6} lg={6} style={{ padding: "5%" }}>
          <img
            src="https://escuela-bancaria.s3.us-east-2.amazonaws.com/GALERIA-CLADIT-2024/Captura-de-pantalla-2024-05-16-a-la(s)-12.15.53%E2%80%AFp.%C2%A0m..jpg"
            loading="lazy"
            style={{ width: "100%" }}
          />
        </Grid>
      </Grid>
      <Box

      >
        <CarouselHero />
      </Box>
      <Box
        sx={{
          paddingLeft: { lg: "5%", xs: "1%", md: "3%" },
          paddingRight: { lg: "5%", xs: "1%", md: "3%" },
        }}
      >
        <ViewPrograma speaker={false} hash={props.evt} />
      </Box>
    </Stack>
  </Box>

};
const images = [

  "https://escuela-bancaria.s3.us-east-2.amazonaws.com/a871b40d-2878-4208-a0b7-37edf2aac0ad.png",


  "https://escuela-bancaria.s3.us-east-2.amazonaws.com/8c7845ea-b712-445c-9f24-0effbf93eafd.png",


  "https://escuela-bancaria.s3.us-east-2.amazonaws.com/ddb28b74-69b8-4739-b0b8-fcb3478a77d9.png"


];

function CarouselHero() {
  return (
    <Carousel
      autoPlay
      interval={5000}
      animation="slide"
      indicators={true}
      navButtonsAlwaysVisible={false}
      swipe={true}
    >
      {images.map((img, index) => (
        <Box
          key={index}
          component="img"
          src={img}
          alt={`slide-${index}`}
          sx={{
            width: "100%",
            height: { xs: 250, md: 500 },
            objectFit: "contain"
          }}
        />
      ))}
    </Carousel>
  );
}
export default ProgramaGT;

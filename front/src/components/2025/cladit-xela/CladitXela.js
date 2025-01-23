import React, { useEffect, useState, useRef } from "react";
import View from "../evento/View";
import {
  Stack,
  Box,
  Button,
  Tabs,
  Tab,
  Typography,
  Grid,
  ImageList,
  ImageListItem,
} from "@mui/material";
import HighlightAltIcon from "@mui/icons-material/HighlightAlt";
import PatrocinioQZ from "../patrocinio/PatrocinioQZ";
import ProgramaQZ from "../programa/ProgramaQZ";
import TalleresQZ from "../talleres/TalleresQZ";
import TarifasQZ from "../tarifas/TarifasQZ";
import PauseIcon from "@mui/icons-material/Pause";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Carrousel from "./Carrousel";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
const CladitXela = () => {
  const [cambios, setCambios] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {}, [cambios]);
  const handleTogglePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
    setCambios(cambios + 1);
  };

  return (
    <Box>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          centered
        >
          <Tab label="Evento" {...a11yProps(0)} />
          <Tab label="Patrocinio" {...a11yProps(1)} />
          <Tab label="Programa" {...a11yProps(2)} />
          {/*<Tab label="Talleres" {...a11yProps(3)} />
          <Tab label="Tarifas" {...a11yProps(4)} />*/}
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Box sx={{ width: "100%" }}>
          <Stack spacing={5} alignItems="center" justifyContent="center">
            <Typography variant="h4">
              <CalendarMonthIcon />
              &nbsp; 11 de agosto 2025
            </Typography>
            <Box
              style={{}}
              sx={{
                width: "100%",
                height: { lg: "40vh", md: "20vh", xs: "5vh" },
                overflow: "hidden",
                position: "relative",
              }}
            >
              <video
                autoPlay
                muted
                playsInline
                loop
                style={{
                  width: "100vw",
                  height: "auto",
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <source
                  src="https://escuela-bancaria.s3.us-east-2.amazonaws.com/5e6b6a88-2597-4745-b94c-e6cf722e6bd0.mp4"
                  type="video/mp4"
                />
              </video>
            </Box>
            <Button
              style={{
                backgroundColor: "#397d51",
                padding: "1%",
                color: "white",
              }}
              href={
                process.env.REACT_APP_URL_INSCRIPCION +
                "ffd12104-932e-4ad9-8e1d-ef449aef6b58"
              }
              target="_blank"
              startIcon={<HighlightAltIcon />}
            >
              Inscríbete en Línea
            </Button>
            <Grid
              container
              alignItems="center"
              justifyContent="center"
              style={{ textAlign: "justify" }}
            >
              <Grid xs={12} md={6} lg={6} p={3}>
                <Stack spacing={5}>
                  <Button
                    onClick={handleTogglePlay}
                    startIcon={isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
                    style={{
                      backgroundColor: "#397d51",
                      color: "white",
                      border: "1px solid transparent",
                    }}
                  >
                    {isPlaying
                      ? "Click para pausar video"
                      : "Click para reproducir video"}
                  </Button>
                  <video ref={videoRef} controls style={{ width: "100%" }}>
                    <source
                      src="https://escuela-bancaria.s3.us-east-2.amazonaws.com/4e65b57c-4799-48c4-a9ba-7fab628d3490.mp4"
                      type="video/mp4"
                    />
                  </video>
                </Stack>
              </Grid>
              <Grid xs={12} md={6} lg={6} p={3}>
                <Typography variant="h4">¿Qué es CLADIT?</Typography>
                <Typography variant="p">
                  <br />
                  La Asociación Bancaria de Guatemala -ABG- a través de sus
                  entes educativos, suman esfuerzos en fortalecer los esquemas
                  de control y seguridad en los sistemas de Prevención y
                  Administración de Riesgos de Lavado de Dinero u Otros Activos;
                  las tendencias en la tecnologia como los activos virtuales han
                  propiciado desafíos atípicos, particularmente en temas como la
                  Ciberseguridad, la Inteligencia Artificial, los Criptoactivos,
                  el Derisking y otros, en la búsqueda de asegurar la prevención
                  del lavado de dinero y la expansión del Fraude Cibernético, a
                  través de ataques a la integridad de los datos y de los
                  sistemas.
                  <br />
                  <br />
                  Para ello, invita a participar en su&nbsp;
                  <strong>
                    VI CONGRESO REGIONAL PARA LA PREVENCIÓN DE LAVADO DE DINERO
                    U OTROS ACTIVOS Y EL FINANCIAMIENTO DEL TERRORISMO -CLADIT-.
                  </strong>
                  Este congreso esta diseñado para toda persona que tenga un
                  impacto en el marco del Riesgo de LA-FT, entre otras que
                  conforme la Ley son entes obligados y tienen la
                  responsabilidad de capacitarse en la prevención de lavado de
                  dinero u otros activos y el financiamiento del terrorismo; por
                  medio de conferencias nacionales e internacionales, paneles de
                  discusión, opinión, análisis y criterios de expertos en temas
                  relacionados con la prevención del lavado de dinero y el
                  financiamiento del terrorismo.
                  <br />
                  <br />
                  CLADIT 2025 presenta una serie de invitados del más alto nivel
                  y diferentes actividades que será toda una experiencia
                  novedosa para los participantes.
                </Typography>
              </Grid>
            </Grid>
            <Carrousel />
            <Grid container alignItems="center" justifyContent="center">
              <Grid xs={12} md={6} lg={6} style={{ textAlign: "center" }}>
                <Typography variant="h4">Gran Karmel</Typography>
                <Typography variant="h5">
                  Eventos y Convenciones en Quetzaltenango
                </Typography>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1621.4151340627436!2d-91.5189510814598!3d14.859072732908459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x858ea2a125840a0f%3A0xc4d42b276cacd3d8!2sCentro%20de%20Convenciones%20Gran%20Karmel!5e0!3m2!1ses!2sgt!4v1722364715658!5m2!1ses!2sgt"
                  width="75%"
                  height="450"
                  style={{ border: "0" }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </Grid>
              <Grid xs={12} md={6} lg={6} style={{ textAlign: "center" }}>
                <img
                  src="https://escuela-bancaria.s3.us-east-2.amazonaws.com/IMG_20240411_113048.jpg"
                  style={{ width: "60%", loading: "lazy" }}
                />
              </Grid>
            </Grid>
            <ImageList cols={5}>
              <ImageListItem>
                <img
                  src={`https://escuela-bancaria.s3.us-east-2.amazonaws.com/321f5c_e7041c4b31744b9c929d2cb32c61aaaa~mv2.webp`}
                  alt="cladit-img"
                  loading="lazy"
                />
              </ImageListItem>
              <ImageListItem>
                <img
                  src={`https://escuela-bancaria.s3.us-east-2.amazonaws.com/321f5c_6e81fd2f24e048a9a4f227349d9e55c2~mv2+(1).webp`}
                  alt="cladit-img"
                  loading="lazy"
                />
              </ImageListItem>
              <ImageListItem>
                <img
                  src={`https://escuela-bancaria.s3.us-east-2.amazonaws.com/321f5c_c3f7f3e62fa14942874b76e52c5c649e~mv2.webp`}
                  alt="cladit-img"
                  loading="lazy"
                />
              </ImageListItem>
              <ImageListItem>
                <img
                  src={`https://escuela-bancaria.s3.us-east-2.amazonaws.com/321f5c_397fed696a62421aaf51bcb82590597b~mv2.webp`}
                  alt="cladit-img"
                  loading="lazy"
                />
              </ImageListItem>
              <ImageListItem>
                <img
                  src={`https://escuela-bancaria.s3.us-east-2.amazonaws.com/321f5c_6e81fd2f24e048a9a4f227349d9e55c2~mv2.webp`}
                  alt="cladit-img"
                  loading="lazy"
                />
              </ImageListItem>
            </ImageList>
            <View evt="ffd12104-932e-4ad9-8e1d-ef449aef6b58" />
          </Stack>
        </Box>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <PatrocinioQZ />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <ProgramaQZ evt="ffd12104-932e-4ad9-8e1d-ef449aef6b58" />
      </CustomTabPanel>
      {/*  <CustomTabPanel value={value} index={3}>
        <TalleresQZ />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        <TarifasQZ />
      </CustomTabPanel>*/}
    </Box>
  );
};

export default CladitXela;

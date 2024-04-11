import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import "./style.css";
import { Divider, Grid, Typography } from "@mui/material";
import EventIcon from "@mui/icons-material/Event";
import Button from "@mui/material/Button";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea, CardActions } from "@mui/material";
import conferencistas_json from "../../info/conferencistas.json";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
const helpers = require("../../helpers/helpers");
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Inicio = () => {
  const [cambios, setCambios] = useState(0);
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const arr_expositores = helpers.chunkArray(
    conferencistas_json.conferencistas,
    4
  );
  const maxSteps = arr_expositores.length;

  useEffect(() => {}, [cambios]);
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setCambios(cambios + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    setCambios(cambios + 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
    setCambios(cambios + 1);
  };
  return (
    <Box paddingTop={10}>
      <Stack spacing={4} alignItems="center">
        <Stack spacing={5} alignItems="center" justifyContent="center">
          <Typography variant="h4" style={{ textAlign: "center" }}>
            <EventIcon /> &nbsp;15 y 16 de mayo
          </Typography>
          <Button
            style={{
              backgroundColor: "#397d51",
              color: "white",
              border: "1px solid transparent",
            }}
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

        <video autoPlay muted loop style={{ width: "50%" }}>
          <source
            src="https://escuela-bancaria.s3.us-east-2.amazonaws.com/2024+CLADIT.mp4"
            type="video/mp4"
          />
        </video>
        <Stack alignItems="center" justifyContent="center" spacing={5}>
          <Grid
            container
            alignItems="center"
            justifyContent="center"
            style={{ textAlign: "justify" }}
          >
            <Grid xs={12} md={6} lg={6} p={3}>
              <video controls style={{ width: "100%" }}>
                <source
                  src="https://escuela-bancaria.s3.us-east-2.amazonaws.com/V3+B+Invitacion+Juan+Carlos+Medrano.mp4"
                  type="video/mp4"
                />
              </video>
            </Grid>
            <Grid xs={12} md={6} lg={6} p={3}>
              <Typography variant="h4">¿Qué es CLADIT?</Typography>
              <Typography variant="p">
                <br />
                La Asociación Bancaria de Guatemala -ABG- a través de sus entes
                educativos, suman esfuerzos en fortalecer los esquemas de
                control y seguridad en los sistemas de Prevención y
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
                  XXI CONGRESO REGIONAL PARA LA PREVENCIÓN DE LAVADO DE DINERO U
                  OTROS ACTIVOS Y EL FINANCIAMIENTO DEL TERRORISMO -CLADIT-.
                </strong>
                Este congreso esta diseñado para toda persona que tenga un
                impacto en el marco del Riesgo de LA-FT, entre otras que
                conforme la Ley son entes obligados y tienen la responsabilidad
                de capacitarse en la prevención de lavado de dinero u otros
                activos y el financiamiento del terrorismo; por medio de
                conferencias nacionales e internacionales, paneles de discusión,
                opinión, análisis y criterios de expertos en temas relacionados
                con la prevención del lavado de dinero y el financiamiento del
                terrorismo.
                <br />
                <br />
                CLADIT 2024 presenta una serie de invitados del más alto nivel y
                diferentes actividades que será toda una experiencia novedosa
                para los participantes.
              </Typography>
            </Grid>
          </Grid>
          <Grid container alignItems="center" justifyContent="center">
            <Grid xs={12} md={6} lg={6} style={{ textAlign: "center" }}>
              <Typography variant="h4">ÉPICA</Typography>
              <Typography variant="h5">
                Eventos y Convenciones en AVIA
              </Typography>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.9721045721803!2d-90.5165557242587!3d14.600664977073766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8589a315f398a111%3A0x815473dae1d82d1!2sEpic%20Avia!5e0!3m2!1ses!2sgt!4v1709838039558!5m2!1ses!2sgt"
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
                src="https://escuela-bancaria.s3.us-east-2.amazonaws.com/SELECCIONADA-20.jpg"
                style={{ width: "60%", loading: "lazy" }}
              />
            </Grid>
          </Grid>
          <ImageList cols={5}>
            <ImageListItem>
              <img
                src={`https://escuela-bancaria.s3.us-east-2.amazonaws.com/epica-1.jpg`}
                alt="cladit-img"
                loading="lazy"
              />
            </ImageListItem>
            <ImageListItem>
              <img
                src={`https://escuela-bancaria.s3.us-east-2.amazonaws.com/epica-2.jpg`}
                alt="cladit-img"
                loading="lazy"
              />
            </ImageListItem>
            <ImageListItem>
              <img
                src={`https://escuela-bancaria.s3.us-east-2.amazonaws.com/epica-3.jpg`}
                alt="cladit-img"
                loading="lazy"
              />
            </ImageListItem>
            <ImageListItem>
              <img
                src={`https://escuela-bancaria.s3.us-east-2.amazonaws.com/epica-4.jpg`}
                alt="cladit-img"
                loading="lazy"
              />
            </ImageListItem>
            <ImageListItem>
              <img
                src={`https://escuela-bancaria.s3.us-east-2.amazonaws.com/epica-6.jpg`}
                alt="cladit-img"
                loading="lazy"
              />
            </ImageListItem>
          </ImageList>
        </Stack>
        <Stack spacing={3}>
          <Typography variant="h3" style={{ textAlign: "center" }}>
            Patrocinadores
          </Typography>
          <Typography variant="h4" style={{ textAlign: "center" }}>
            Top Diamante
          </Typography>
          <ImageList cols={10}>
            <ImageListItem></ImageListItem>
            <ImageListItem></ImageListItem>
            <ImageListItem></ImageListItem>
            <ImageListItem></ImageListItem>
            <ImageListItem cols={2}>
              <img
                style={{ width: "100%" }}
                src={`https://escuela-bancaria.s3.us-east-2.amazonaws.com/1+BANRURAL.png`}
                alt="cladit-img"
                loading="lazy"
              />
            </ImageListItem>
            <ImageListItem></ImageListItem>
            <ImageListItem></ImageListItem>
            <ImageListItem></ImageListItem>
            <ImageListItem></ImageListItem>
          </ImageList>
          <Divider style={{ backgroundColor: "#397d51", height: "5px" }} />
          <Typography variant="h4" style={{ textAlign: "center" }}>
            Diamante
          </Typography>
          <ImageList cols={10}>
            <ImageListItem></ImageListItem>
            <ImageListItem></ImageListItem>
            <ImageListItem></ImageListItem>
            <ImageListItem cols={2} style={{ padding: "5%" }}>
              <img
                style={{ width: "100%", objectFit: "contain" }}
                src={`https://escuela-bancaria.s3.us-east-2.amazonaws.com/LNRS_CMYK_POS_+(2).jpg`}
                alt="cladit-img"
                loading="lazy"
              />
            </ImageListItem>
            <ImageListItem cols={2} style={{ padding: "5%" }}>
              <img
                style={{ width: "100%", objectFit: "contain" }}
                src={`https://escuela-bancaria.s3.us-east-2.amazonaws.com/Risk+Consulting+Global+Group+-+1.png`}
                alt="cladit-img"
                loading="lazy"
              />
            </ImageListItem>
            <ImageListItem></ImageListItem>
            <ImageListItem></ImageListItem>
            <ImageListItem></ImageListItem>
          </ImageList>
          <Divider style={{ backgroundColor: "#397d51", height: "5px" }} />

          <Typography variant="h4" style={{ textAlign: "center" }}>
            Oro
          </Typography>
          <ImageList cols={10}>
            <ImageListItem></ImageListItem>
            <ImageListItem></ImageListItem>
            <ImageListItem cols={2} style={{ padding: "5%" }}>
              <img
                style={{ width: "100%", objectFit: "contain" }}
                src={`https://escuela-bancaria.s3.us-east-2.amazonaws.com/logo+CHN.jpg`}
                alt="cladit-img"
                loading="lazy"
              />
            </ImageListItem>
            <ImageListItem cols={2} style={{ padding: "5%" }}>
              <img
                style={{ width: "100%", objectFit: "contain" }}
                src={`https://escuela-bancaria.s3.us-east-2.amazonaws.com/logo+BI.png`}
                alt="cladit-img"
                loading="lazy"
              />
            </ImageListItem>
            <ImageListItem cols={2} style={{ padding: "5%" }}>
              <img
                style={{ width: "100%", objectFit: "contain" }}
                src={`https://escuela-bancaria.s3.us-east-2.amazonaws.com/logo+Banco+Promerica.png`}
                alt="cladit-img"
                loading="lazy"
              />
            </ImageListItem>
            <ImageListItem></ImageListItem>
            <ImageListItem></ImageListItem>
          </ImageList>
          <Divider style={{ backgroundColor: "#397d51", height: "5px" }} />
          <Typography variant="h4" style={{ textAlign: "center" }}>
            Plata
          </Typography>
          <ImageList cols={10}>
            <ImageListItem></ImageListItem>
            <ImageListItem></ImageListItem>
            <ImageListItem></ImageListItem>
            <ImageListItem cols={2}>
              <img
                style={{ width: "100%" }}
                src={`https://escuela-bancaria.s3.us-east-2.amazonaws.com/logo+AMLC.png`}
                alt="cladit-img"
                loading="lazy"
              />
            </ImageListItem>
            <ImageListItem cols={2}>
              <img
                style={{ width: "100%" }}
                src={`https://escuela-bancaria.s3.us-east-2.amazonaws.com/logo+interbanco.png`}
                alt="cladit-img"
                loading="lazy"
              />
            </ImageListItem>
            <ImageListItem></ImageListItem>
            <ImageListItem></ImageListItem>
            <ImageListItem></ImageListItem>
          </ImageList>
          <Divider style={{ backgroundColor: "#397d51", height: "5px" }} />
        </Stack>
        <Typography variant="h3" style={{ textAlign: "center" }}>
          Conferencistas
        </Typography>
        <Grid container justifyContent="center" alignItems="center">
          <Grid xs={12} md={12} lg={12}>
            <AutoPlaySwipeableViews
              axis={theme.direction === "rtl" ? "x-reverse" : "x"}
              index={activeStep}
              onChangeIndex={handleStepChange}
              enableMouseEvents
              interval={5000}
            >
              {arr_expositores.map((actual, index) => (
                <Box
                  alignItems="center"
                  justifyContent="center"
                  key={index}
                  style={{ width: "100%" }}
                >
                  {Math.abs(activeStep - index) <= 2 ? (
                    <Grid
                      container
                      justifyContent="center"
                      alignItems="stretch"
                    >
                      {actual.map((speaker, indice) => (
                        <Grid
                          xs={6}
                          md={6}
                          lg={3}
                          item
                          key={`speaker-${indice}`}
                          style={{ display: "flex" }}
                          p={5}
                        >
                          <Card
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              width: "100%",
                            }}
                          >
                            <CardMedia
                              component="img"
                              style={{
                                width: "100%",
                                height: "140px",
                                objectFit: "contain",
                                alignSelf: "flex-start", // Align photo to the top
                              }}
                              image={speaker.foto}
                              alt="conferencista-cladit"
                            />

                            <CardContent
                              style={{
                                alignSelf: "flex-start",
                                textAlign: "center",
                                width: "100%",
                              }}
                            >
                              <Stack alignItems="center">
                                <img
                                  src={speaker.bandera}
                                  alt="bandera-speaker"
                                  style={{
                                    width: "25%",
                                    height: "35px",
                                    objectFit: "contain",
                                  }}
                                />
                                <Typography
                                  gutterBottom
                                  variant="h5"
                                  component="div"
                                >
                                  {speaker.nombre}
                                </Typography>
                                <Typography
                                  variant="body"
                                  color="text.secondary"
                                >
                                  {speaker.puesto}
                                </Typography>
                                <Typography
                                  variant="body2"
                                  color="text.secondary"
                                >
                                  {speaker.institucion}
                                </Typography>
                                <Typography
                                  variant="body3"
                                  color="text.secondary"
                                >
                                  {speaker.pais}
                                </Typography>
                              </Stack>
                            </CardContent>
                          </Card>
                        </Grid>
                      ))}
                    </Grid>
                  ) : null}
                </Box>
              ))}
            </AutoPlaySwipeableViews>
          </Grid>
          <Grid xs={12} md={12} lg={12} style={{ width: "100%" }}>
            <MobileStepper
              style={{ width: "100%" }}
              steps={maxSteps}
              position="static"
              activeStep={activeStep}
              nextButton={
                <Button
                  size="small"
                  onClick={handleNext}
                  disabled={activeStep === maxSteps - 1}
                >
                  {theme.direction === "rtl" ? (
                    <KeyboardArrowLeft />
                  ) : (
                    <KeyboardArrowRight />
                  )}
                </Button>
              }
              backButton={
                <Button
                  size="small"
                  onClick={handleBack}
                  disabled={activeStep === 0}
                >
                  {theme.direction === "rtl" ? (
                    <KeyboardArrowRight />
                  ) : (
                    <KeyboardArrowLeft />
                  )}
                </Button>
              }
            />
          </Grid>
        </Grid>
        <Grid container alignItems="center" justifyContent="center">
          <Grid xs={12} md={6} lg={6}>
            <img
              style={{ width: "100%" }}
              src={`https://escuela-bancaria.s3.us-east-2.amazonaws.com/IMG_7454+(2).jpg`}
              alt="cladit-img"
              loading="lazy"
            />
          </Grid>
          <Grid xs={12} md={6} lg={6}>
            <Stack spacing={2} style={{ padding: "6%" }}>
              <Typography variant="h5" style={{ textAlign: "center" }}>
                Dirigido a:
              </Typography>
              <Typography
                variant="p"
                style={{ textAlign: "left", fontSize: "0.9em" }}
              >
                <ul className="columns">
                  <li>Entidades Bancarias</li>
                  <li>Cooperativas</li>
                  <li>Financieras</li>
                  <li>Off-Shore </li>
                  <li>Casas de Cambio</li>
                  <li>Emisores de Tarjetas de Crédito</li>
                  <li>Seguros</li>
                  <li>Factoraje</li>
                  <li>Arrendamiento Financiero</li>
                  <li>Casas de Bolsa</li>
                  <li>Promoción inmobiliaria o compraventa de inmuebles</li>
                  <li>Compraventa de vehículos</li>
                  <li>Comercio de joyas, piedras y metales preciosos</li>
                  <li>Objetos de arte y antigüedades</li>
                  <li>Loterías</li>
                  <li>Rifas y similares</li>
                  <li>Entidades de Gobierno, entre otras</li>
                  <li>PEP´S</li>
                  <li>Abogados y Notarios</li>
                  <li>Contadores Públicos y Auditores</li>
                  <li>Contadores</li>
                  <li>Consultores</li>
                  <li>Estudiantes y público en general y todos los</li>
                  <li>
                    Entes obligados por la Superintendencia de Bancos de
                    Guatemala SIB
                  </li>
                  <li>
                    Entre otros órganos de supervisión a nivel internacional{" "}
                  </li>
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

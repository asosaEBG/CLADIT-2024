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
            alt="cladit-img"
            loading="lazy"
          />
          <Typography variant="h5" style={{ textAlign: "center" }}>
            Diamante
          </Typography>
          <img
            style={{ width: "25%" }}
            src={`https://escuela-bancaria.s3.us-east-2.amazonaws.com/LEXIS+NEXIS.png`}
            alt="cladit-img"
            loading="lazy"
          />
          <Typography variant="h5" style={{ textAlign: "center" }}>
            Oro
          </Typography>
          <img
            style={{ width: "25%" }}
            src={`https://escuela-bancaria.s3.us-east-2.amazonaws.com/CHN.png`}
            alt="cladit-img"
            loading="lazy"
          />
           <Typography variant="h5" style={{ textAlign: "center" }}>
            Plata
          </Typography>
          <img
            style={{ width: "25%" }}
            src={`https://escuela-bancaria.s3.us-east-2.amazonaws.com/logo+AMLC+original.png`}
            alt="cladit-img"
            loading="lazy"
          />
        </Stack>
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
              <Typography variant="h4" style={{ textAlign: "center" }}>
                Dirigido a:
              </Typography>
              <Typography
                variant="p"
                style={{ textAlign: "left", fontSize: "1.5em" }}
              >
                <ul>
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

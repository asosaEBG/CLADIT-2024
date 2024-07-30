import React from "react";
import Stack from "@mui/material/Stack";
import { Grid, Typography, Box, Divider } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import talleres_json from "../../info/talleresQZ.json";
import InfoIcon from "@mui/icons-material/Info";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
const TalleresQZ = () => {
  return (
    <Stack spacing={3} alignItems="center" p={5}>
      <Grid container p={2}>
        <Grid xs={12} md={12} lg={6} style={{ textAlign: "center" }}>
          <Typography
            variant="h2"
            style={{ color: "#1e3d52", textAlign: "center" }}
          >
            <strong>Talleres de aplicación CLADIT</strong>
          </Typography>
          <Typography
            variant="h4"
            style={{ color: "#1e3d52", textAlign: "center" }}
          >
            <strong>
              <CalendarMonthIcon />
              &nbsp;26 de agosto
            </strong>
          </Typography>
          <Typography
            variant="h4"
            style={{ color: "#1e3d52", textAlign: "center" }}
          >
            <strong>
              <AccessTimeIcon />
              &nbsp;2:30 PM - 5:30 PM
            </strong>
          </Typography>
        </Grid>
        <Grid xs={12} md={12} lg={6} style={{ textAlign: "center" }}>
          <Typography
            variant="h6"
            style={{ textAlign: "center", color: "#1e3d52" }}
          >
            <strong>Centro de Convenciones Gran Karmel Quetzaltenango</strong>
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
      </Grid>
      {talleres_json.talleres.map((actual, index) => (
        <Stack
          spacing={4}
          p={5}
          key={"taller-" + index}
          style={{ width: "100%" }}
        >
          <Box
            xs={12}
            md={12}
            lg={12}
            style={{ backgroundColor: "#397d51", width: "100%" }}
            marginBottom={4}
          >
            <Typography
              variant="h3"
              style={{ color: "white", textAlign: "center" }}
            >
              <strong>{actual.sector}</strong>
            </Typography>
          </Box>
          <Typography
            variant="h4"
            style={{ textAlign: "center", color: "#1e3d52" }}
          >
            <strong>{actual.capacidad}</strong>
          </Typography>
          {actual.talleres.map((taller, indice) => (
            <Stack spacing={3} key={"talleres-" + indice}>
              <List>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <CalendarMonthIcon />
                    </ListItemIcon>
                    <ListItemText primary={taller.fecha} />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <AccessTimeIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary={`${taller.hora_inicio} - ${taller.hora_fin}`}
                    />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <InfoIcon />
                    </ListItemIcon>
                    <ListItemText primary={taller.concepto} />
                  </ListItemButton>
                </ListItem>
              </List>
              {taller.speakers.map((speaker, indicador) => (
                <Grid container key={"speaker-" + indicador}>
                  <Grid xs={4} md={4} lg={4} style={{ textAlign: "center" }}>
                    <img
                      src={speaker.foto}
                      alt="conferencista"
                      style={{ width: "50%" }}
                    />
                  </Grid>
                  <Grid xs={8} md={8} lg={8} style={{ textAlign: "left" }}>
                    <Stack>
                      <Typography
                        variant="p"
                        style={{ color: "#397d51", fontSize: "1.5em" }}
                      >
                        {speaker.nombre}
                      </Typography>
                      <Typography variant="p">{speaker.puesto}</Typography>
                      <Typography variant="p">{speaker.institucion}</Typography>
                      <Typography variant="p">{speaker.pais}</Typography>
                      {speaker.bandera && (
                        <img
                          src={speaker.bandera}
                          alt="img-paises"
                          style={{ width: "15%" }}
                        />
                      )}
                    </Stack>
                  </Grid>
                </Grid>
              ))}
              {indice != actual.talleres.length - 1 && (
                <Divider
                  style={{ backgroundColor: "#397d51", height: "2px" }}
                />
              )}
            </Stack>
          ))}
        </Stack>
      ))}
    </Stack>
  );
};

export default TalleresQZ;

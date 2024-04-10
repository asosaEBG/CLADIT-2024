import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { Grid, Typography, Paper, Divider, Alert } from "@mui/material";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import Button from "@mui/material/Button";
import programa_json from "../../info/programa.json";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import InfoIcon from "@mui/icons-material/Info";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import talleres_json from "../../info/talleres.json";
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
                href="https://escuela-bancaria.s3.us-east-2.amazonaws.com/Programa+CLADIT+2024+(8).pdf"
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
              src="https://escuela-bancaria.s3.us-east-2.amazonaws.com/IMG_7458.jpg"
              loading="lazy"
              style={{ width: "100%" }}
            />
          </Grid>
        </Grid>
        <Stack
          spacing={5}
          sx={{
            paddingLeft: { lg: "15%", xs: "2%", md: "5%" },
            paddingRight: { lg: "15%", xs: "2%", md: "5%" },
          }}
        >
          {talleres_json.talleres.map((actual, index) => (
            <Paper
              key={index}
              elevation={5}
              sx={{
                padding: { lg: "3%", xs: "1%", md: "2%" },
              }}
            >
              <Stack spacing={4}>
                <Alert severity="success">{actual.sector}</Alert>
                {actual.talleres.map((taller, indice) => (
                  <Stack key={`taller-${index}`}>
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
                    {taller.speakers.map((speaker, indice) => (
                      <Grid
                        container
                        alignItems="center"
                        justifyContent="center"
                        key={indice}
                      >
                        <Grid xs={2} md={2} lg={2}>
                          <img src={speaker.foto} style={{ width: "100%" }} />
                        </Grid>
                        <Grid
                          xs={8}
                          md={8}
                          lg={8}
                          style={{ paddingLeft: "2%" }}
                        >
                          <Typography variant="p" component="strong">
                            {speaker.nombre}
                            <br />
                          </Typography>
                          <Typography variant="p">
                            {speaker.puesto}
                            <br />
                          </Typography>
                          <Typography variant="p">
                            {speaker.institucion}
                            <br />
                          </Typography>
                          <Typography variant="p">
                            {speaker.pais}
                            <br />
                          </Typography>
                          <Typography variant="p" component="strong">
                            {speaker.tipo_speaker}
                            <br />
                          </Typography>
                          {speaker.bandera && (
                            <img
                              src={speaker.bandera}
                              alt="bandera"
                              style={{ width: "45%" }}
                            />
                          )}
                        </Grid>
                      </Grid>
                    ))}
                  </Stack>
                ))}
              </Stack>
            </Paper>
          ))}
        </Stack>
        <Stack
          spacing={5}
          sx={{
            paddingLeft: { lg: "15%", xs: "2%", md: "5%" },
            paddingRight: { lg: "15%", xs: "2%", md: "5%" },
          }}
        >
          {programa_json.programa.map((actual, index) => (
            <Paper
              key={index}
              elevation={5}
              sx={{
                padding: { lg: "3%", xs: "1%", md: "2%" },
                backgroundColor:
                  actual.speakers.length > 0 ? "white" : "#397d51",
                color: actual.speakers.length > 0 ? "black" : "white",
              }}
            >
              <Stack spacing={3}>
                <List>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <CalendarMonthIcon
                          style={{
                            color:
                              actual.speakers.length > 0 ? "black" : "white",
                          }}
                        />
                      </ListItemIcon>
                      <ListItemText primary={actual.fecha} />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <AccessTimeIcon
                          style={{
                            color:
                              actual.speakers.length > 0 ? "black" : "white",
                          }}
                        />
                      </ListItemIcon>
                      <ListItemText
                        primary={`${actual.hora_inicio} - ${actual.hora_fin}`}
                      />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <InfoIcon
                          style={{
                            color:
                              actual.speakers.length > 0 ? "black" : "white",
                          }}
                        />
                      </ListItemIcon>
                      <ListItemText primary={actual.concepto} />
                    </ListItemButton>
                  </ListItem>
                </List>
                {actual.speakers.map((speaker, indice) => (
                  <Grid container alignItems="center" justifyContent="center">
                    <Grid xs={2} md={2} lg={2}>
                      <img src={speaker.foto} style={{ width: "100%" }} />
                    </Grid>
                    <Grid xs={8} md={8} lg={8} style={{ paddingLeft: "2%" }}>
                      <Typography variant="p" component="strong">
                        {speaker.nombre}
                        <br />
                      </Typography>
                      <Typography variant="p">
                        {speaker.puesto}
                        <br />
                      </Typography>
                      <Typography variant="p">
                        {speaker.institucion}
                        <br />
                      </Typography>
                      <Typography variant="p">
                        {speaker.pais}
                        <br />
                      </Typography>
                      <Typography variant="p" component="strong">
                        {speaker.tipo_speaker}
                        <br />
                      </Typography>
                      {speaker.bandera && (
                        <img
                          src={speaker.bandera}
                          alt="bandera"
                          style={{ width: "45%" }}
                        />
                      )}
                    </Grid>
                  </Grid>
                ))}
              </Stack>
            </Paper>
          ))}
        </Stack>
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

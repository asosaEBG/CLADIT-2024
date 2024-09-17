import React, { useEffect, useState } from "react";
import {
  Backdrop,
  CircularProgress,
  Grid,
  Typography,
  Stack,
  Button,
} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Segmento from "./Segmento";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
const admin_service = require("../../../../helpers/admin_service");
const VistaPrevia = (props) => {
  const [contador, setContador] = useState(0);
  const [evento, setEvento] = useState({});
  const [loading, setLoading] = useState(false);
  const [programa, setPrograma] = useState(null);
  useEffect(() => {
    admin_service
      .getData("/evento/view-by-hash/" + props.hash)
      .then((data) => {
        setEvento(data.data.response_database.result[0]);
        admin_service
          .getData("/programa/view/" + props.hash)
          .then((datos) => {
            if (datos.data.response_database == null) {
              setPrograma(null);
            } else {
              setPrograma(datos.data.response_database);
            }
            setLoading(true);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [contador]);
  return (
    <React.Fragment>
      <CssBaseline />
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={!loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      {programa == null ? (
        <Grid container alignItems="center" justifyContent="center">
          <Grid item xs={12} md={12} lg={12}>
            <Typography variant="h3"></Typography>
          </Grid>
        </Grid>
      ) : (
        <Stack spacing={5}>
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
                  Bancaria de Guatemala y entidades educativas, se ha diseñado
                  un programa que aborda temas fundamentales en la lucha contra
                  el lavado de dinero y el financiamiento del terrorismo. El
                  objetivo principal es proporcionar a los participantes una
                  amplia gama de conocimientos y herramientas para fortalecer
                  sus estrategias de prevención y cumplimiento normativo.
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
                src="https://escuela-bancaria.s3.us-east-2.amazonaws.com/GALERIA-CLADIT-2024/Captura-de-pantalla-2024-05-17-a-la(s)-11.46.12%E2%80%AFa.%C2%A0m..jpg"
                loading="lazy"
                style={{ width: "100%" }}
              />
            </Grid>
          </Grid>
          {programa.programa.speakers.map((actual, index) => (
            <Segmento
              actual={actual}
              key={`segmento-${index}`}
              speaker={props.speaker}
              refreshData={() => {
                setContador(contador + 1);
              }}
            />
          ))}
        </Stack>
      )}
    </React.Fragment>
  );
};

export default VistaPrevia;

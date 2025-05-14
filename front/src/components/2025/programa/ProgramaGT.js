import React, { useEffect, useState } from "react";
import {
  Stack,
  CircularProgress,
  Box,
  Backdrop,
  Grid,
  Typography,
  Button,
} from "@mui/material";
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
        admin_service
          .getData("/programa/view/" + props.evt)
          .then((response_programa) => {
            admin_service
              .getData(
                "/patrocinador/view-by-evento/" +
                  props.evt
              )
              .then((response_patrocinador) => {
                setEvento(response_evt.data.response_database.result[0]);
                setPrograma(response_programa.data.response_database);
                setPatrocinadores(response_patrocinador.data.response.result);
                setLoading(false);
              })
              .catch((error) => {
                console.log(error);
              });
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  }, [contador]);
  return loading ? (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={loading}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  ) : (
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
          sx={{
            paddingLeft: { lg: "5%", xs: "1%", md: "3%" },
            paddingRight: { lg: "5%", xs: "1%", md: "3%" },
          }}
        >
          <ViewPrograma speaker={false} hash={props.evt} />
        </Box>
      </Stack>
    </Box>
  );
};

export default ProgramaGT;
